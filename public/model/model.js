export function getView(viewScreen) {

    $.get(`views/${viewScreen}/${viewScreen}.html`,(value) => {
        $("#app").html(value);    
    });  

};

var _db;

export function initFirebase() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log(user);
            _db = firebase.firestore();
        } else {
            console.log("No User");
            _db = {};
        }
    });
}
 
export function userSignUp (uName, pWord) {
    firebase
    .auth()
    .createUserWithEmailAndPassword(uName, pWord)
    .then((result) => {
        // Alert for successful sign up
        console.log(result.user.uid);
    })
    .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        // Alert for error message
        console.log(`Error Code ${errorCode} Error Message ${errorMessage}`)
    })
}

export function logInUser(uName, pWord) {
    firebase
    .auth()
    .signInWithEmailAndPassword(uName, pWord)
    .then((result) => {
        // Alert for successful sign up
        console.log(result.user.uid);
    })
    .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        // Alert for error message
        console.log(`Error Code ${errorCode} Error Message ${errorMessage}`)
    })
}

export function logOutUser(){
    firebase
    .auth()
    .signOut()
    .then(() => {
        // Use a cool alert for the user saying "Thanks for signing out! Have a nice day!"
        console.log("User Signed Out")
    })
    .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        // Alert for error
        console.log(`Error Code ${errorCode} Error Message ${errorMessage}`)
    })
}

export function addStudent(studentData) {
    _db
        // Whatever you put in the argument for collection, is what the collection will be named in Firebase
        .collection("Students")
        .add(studentData)
        .then((doc) => {
            console.log(`Student added  ${doc} id ${doc.id}`);
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            // Alert for error
            console.log(`Error Code ${errorCode} Error Message ${errorMessage}`)
        });
}

export function getData() {
    _db
    .collection("Students")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            console.log(doc.id);
        });
    });
}