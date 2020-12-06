import * as MODEL from "../model/model.js";

function initListeners() {


    $("#nav nav a").click(function
        (e){

        var btnID = this.id;
        MODEL.getView(btnID);

        });

        $(".navicon").click(function(e){
            $('#nav').toggleClass("navMobileView");
            $('#nav nav a').toggleClass("navMobileView");
        })
    
}

function initView() {
    $.get('views/nav.html', function(value) {
        $("#nav").html(value);
        initListeners();
    });

    $.get('views/home/home.html', function(value) {
        $("#app").html(value);
    });

    $.get('views/footer.html', function(value) {
        $("#footer").html(value);
    });
}

var userNumber = 0;
function init(){
    // this is for a user signing up
    $("#submitBtn").click((e) => {
        e.preventDefault();

        let un = $("#uName").val();
        let pw = $("#pWord").val();   
        MODEL.userSignUp(un, pw); 


        console.log(`un  ${un} pw ${pw}`);
    });

    // user logging out
    $("#logOut").click((e) => {
        e.preventDefault();
        MODEL.logOutUser();
    });

    // user logging in
    $("#logIn").click((e) => {
        e.preventDefault();
        let un = "tnt@t.com";
        let pw = "password";  
        MODEL.logInUser(un, pw);
    });

    // we are adding data
    $("#addData").click((e) => {
        e.preventDefault();

        let studentName = "Student" + userNumber;
        let studentClass = "Class" + userNumber;  
        userNumber++;

        let stuObject = {

            // Whatever you type here is how it will appear in the database
            "studentName": studentName,
            "studentClassNumber": studentClass,
        };

        MODEL.addStudent(stuObject);

    });

    // this one gets all data
    $("#getData").click((e) => {
        e.preventDefault();
        MODEL.getData();
    });

}


$(document).ready(function() {
    // Comment out the bottom two functions for access on local host

    MODEL.initFirebase();
    init();
    
    initView();
})