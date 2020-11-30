export function getView(viewScreen) {

    $.get(`views/${viewScreen}/${viewScreen}.html`,(value) => {
        $("#app").html(value);    
    });  

};