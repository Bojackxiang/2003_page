$(document).ready(function() {
  // *****************************************************
  // button sliding
  $("#sliding").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#registerForm").offset().top
      },
      1000
    );
  });

  $("#aisf-button").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#aisf-intro").offset().top
      },
      1000
    );
  });

  $("#all-pass-button").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#all-pass-intro").offset().top
      },
      1000
    );
  });

  $("#business-button").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#business-intro").offset().top
      },
      1000
    );
  });

  $("#register-button").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#registerForm").offset().top
      },
      1000
    );
  });

  $("#obtain").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#registerForm").offset().top
      },
      1000
    );
  });

  $("#m-button").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#m-registerForm").offset().top
      },
      1000
    );
  });

  $("#f-button").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#m-registerForm").offset().top
      },
      1000
    );
  });

  function phoneteset(major){
    var phonenumber = major.split("");
    console.log(phonenumber)

    if(phonenumber.length !=10 || phonenumber[0] != "0" || phonenumber[1] != "4"){
      return false;
    }
  }

  $("#submit-button").click(function(e) {
    e.preventDefault();
    e.stopPropagation();

    var name = $("#userName").val();
    var school = $("#userSchool").val();
    var emailAddress = $("#userEmail").val();
    var major = $("#userMajor").val();


    if (!name || !major || !emailAddress || !phoneteset(major)) {
      $(".submit-alert").css("display", "block");
      $(".submit-alert").html("请填写完整/正确信息以获取福利");
    } else {
      var body = {
        name: name,
        emailAddress: emailAddress,
        school: school,
        major: major
      };

      $.ajax({
        url: "https://www.aisfexpo.com.au/api/submit",
        type: "POST",
        dataType: "json",
        data: body,
        headers: {
          "Conent-Type": "application/x-www-form-urlencoded"
        },

        success: function(response, status, xhr) {
          if (response == "bad") {
            $(".submit-alert").css("display", "block");
            $(".submit-alert").html("您已注册过。");
          } else {
            $(".submit-alert").css("display", "block");
            $(".submit-alert").html(
              "恭喜您已成功提交，请注意查看邮箱，获取福利！"
            );
          }
        },
        error: function(data, status, xhr) {
          console.log(JSON.parse(data));
        }
      });
    }
  });

  $("#submit-button-m").click(function(e) {
    e.preventDefault();
    e.stopPropagation();


    var namem = $("#m-userName").val();
    var schoolm = $("#m-userSchool").val();
    var emailAddressm = $("#m-userEmail").val();
    var majorm = $("#m-userMajor").val();


    if (!namem || !emailAddressm || !majorm ) {
      $(".submit-alertm").css("display", "block");
      $(".submit-alertm").html("请填写完整信息以获取福利");
    } else {
      var body = {
        name: namem,
        emailAddress: emailAddressm,
        school: schoolm,
        major: majorm,
      };

      $.ajax({
        url: "https://www.aisfexpo.com.au/api/submit",
        type: "POST",
        dataType: "json",
        data: body,
        headers: {
          "Conent-Type": "application/x-www-form-urlencoded"
        },

        success: function(response, status, xhr) {
          if (response == "bad") {
            $(".submit-alertm").css("display", "block");
            $(".submit-alertm").html("您已注册过。");
          } else {
            $(".submit-alertm").css("display", "block");
            $(".submit-alertm").html(
              "恭喜您已成功提交，请注意查看邮箱，获取福利！"
            );
          }
        },
        error: function(data, status, xhr) {
          console.log(JSON.parse(data));
        }
      });
    }
  });
});
