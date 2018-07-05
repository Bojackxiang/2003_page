$(document).ready(function(){
    // *****************************************************
    // button sliding 
    $("#sliding").click(function(){
        $('html, body').animate({
            scrollTop: $("#registerForm").offset().top
        }, 1000)
    });

    $("#aisf-button").click(function(){
        $('html, body').animate({
            scrollTop: $("#aisf-intro").offset().top
        }, 1000)
    });

    $("#all-pass-button").click(function(){
        $('html, body').animate({
            scrollTop: $("#all-pass-intro").offset().top
        }, 1000)
    });

    $("#business-button").click(function(){
        $('html, body').animate({
            scrollTop: $("#business-intro").offset().top
        }, 1000)
    });

    $("#register-button").click(function(){
        $('html, body').animate({
            scrollTop: $("#registerForm").offset().top
        }, 1000)
    });

    $("#obtain").click(function(){
        $('html, body').animate({
            scrollTop: $("#registerForm").offset().top
        }, 1000)
    });


});