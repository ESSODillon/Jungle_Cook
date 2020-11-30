import * as MODEL from "../model/model.js";

function initListeners() {


    $("#nav nav a").click(function
        (e){

        var btnID = this.id;
        MODEL.getView(btnID);

        });

        $(".navicon").click(function(e){
            $('nav').toggleClass("navMobileView");
            $(".links").toggleClass("linksMobileView");
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


$(document).ready(function() {

    initView();
    
})