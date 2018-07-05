$(document).ready(function(){
    $("#sliding").click(function(){
        $('html, body').animate({
            scrollTop: $("#registerForm").offset().top
        }, 1000)
    });
});