$(document).ready(function () {
    // *****************************************************
    // button sliding 
    $("#sliding").click(function () {
        $('html, body').animate({
            scrollTop: $("#registerForm").offset().top
        }, 1000)
    });

    $("#aisf-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#aisf-intro").offset().top
        }, 1000)
    });

    $("#all-pass-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#all-pass-intro").offset().top
        }, 1000)
    });

    $("#business-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#business-intro").offset().top
        }, 1000)
    });

    $("#register-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#registerForm").offset().top
        }, 1000)
    });

    $("#obtain").click(function () {
        $('html, body').animate({
            scrollTop: $("#registerForm").offset().top
        }, 1000)
    });


    $("#submit-button").click(
        function (e) {
            alert("test")
            e.preventDefault();
            e.stopPropagation();

            var name = $("#userName").val();
            var school = $("#userSchool").val();
            var emailAddress = $("#userEmail").val();
            var major = $("#userMajor").val();

            var body = {
                name: name,
                emailAddress: emailAddress, 
                school: school,
                major: major,
            }

            $.ajax({
                url: "http://45.76.124.254/api/submit/",
                type: 'POST',
                headers: {
                    'Conent-Type': 'application/x-www-form-urlencoded',
                },
                
                success: function (data, status, xhr) {
                    console.log(data);
                },
                error: function (data, status, xhr) {
                    console.log(data)
                }
            })
        }
    )



});