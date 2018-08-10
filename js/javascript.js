$(document).ready(function () {
  // *****************************************************
  // button sliding

  function phonetset(phone) {
    var phoneExpression = /^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$/;
    // 电话有效
    var result = phone.match(phoneExpression)
    if (result == null) {
      console.log("电话无效");
      return false;
    } else {
      console.log("有效");
      return true;
    }

  }

  function emailValidation(email) {
    console.log("run email checker");
    var emailAddress = email.split("");
    if (emailAddress.indexOf("@") > 0) {
      return true;
    } else {
      return false;
    }
  }

  function formValidation(name, school, email, phone) {
    var emailResult = emailValidation(email);
    var phoneResult = phonetset(phone);

    console.log(phoneResult)

    if (!name) {
      $(".name-warning").css("display", "inline-block");
      return
    }

    if (!email) {
      $(".email-warning").css("display", "inline-block");
      return
    }

    if (!phoneResult) {
      $(".phone-warning").css("display", "inline-block");
      return
    }

    return true
  }

  function formValidationMobile(name, school, email, phone) {


    var emailResult = emailValidation(email);
    var phoneResult = phonetset(phone);



    if (!name) {
      $(".name-warning-m").css("display", "inline-block");
      return
    }

    if (!email) {
      $(".email-warning-m").css("display", "inline-block");
      return
    }

    if (!phoneResult) {
      $(".phone-warning-m").css("display", "inline-block");
      return
    }

    return true
  }


  $("#sliding").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#registerForm").offset().top
      },
      1000
    );
  });

  $("#aisf-button").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#aisf-intro").offset().top
      },
      1000
    );
  });

  $("#all-pass-button").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#all-pass-intro").offset().top
      },
      1000
    );
  });

  $("#business-button").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#business-intro").offset().top
      },
      1000
    );
  });

  $("#register-button").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#registerForm").offset().top
      },
      1000
    );
  });

  $("#obtain").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#registerForm").offset().top
      },
      1000
    );
  });

  $("#m-button").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#m-registerForm").offset().top
      },
      1000
    );
  });

  $("#f-button").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#m-registerForm").offset().top
      },
      1000
    );
  });

  $("#submit-button").click(function (e) {
    e.preventDefault();
    e.stopPropagation();

    var name = $("#userName").val();
    var school = $("#userSchool").val();
    var emailAddress = $("#userEmail").val();
    var major = $("#userMajor").val();

    if (!formValidation(name, school, emailAddress, major)) {
      return
    }

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

      success: function (response, status, xhr) {
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
      error: function (data, status, xhr) {
        console.log(JSON.parse(data));
      }
    });
  });

  $("#submit-button-m").click(function (e) {
    e.preventDefault();
    e.stopPropagation();

    var namem = $("#m-userName").val();
    var schoolm = $("#m-userSchool").val();
    var emailAddressm = $("#m-userEmail").val();
    var majorm = $("#m-userMajor").val();

    if (!formValidationMobile(namem, schoolm, emailAddressm, majorm)) {
      return
    }


    var body = {
      name: namem,
      emailAddress: emailAddressm,
      school: schoolm,
      major: majorm
    };

    $.ajax({
      url: "https://www.aisfexpo.com.au/api/submit",
      type: "POST",
      dataType: "json",
      data: body,
      headers: {
        "Conent-Type": "application/x-www-form-urlencoded"
      },

      success: function (response, status, xhr) {
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
      error: function (data, status, xhr) {
        console.log(JSON.parse(data));
      }
    });

  });


  const businessContainer = [
    {
      img: './assets/logo-23.jpeg',
      content: ['凭此卡预订任何附加服务包括接送机，家具租凭，家具购买，房屋清洁，搬运代买等 可享全单9.5折优惠（房租费用除外）', '实地看房服务5折', '开通水电煤服务5折'],
      intro: ['Hooli Home 让全球留学生安心的房屋租赁生活平台 100%真实房源 1对1全程服务 随时随地门店咨询', '悉尼门店地址：Shop125, 8 Quay Street, Haymarket', '悉尼总部地址：68 York Street, Sydney']
    },
    {
      img: './assets/logo-23.jpeg',
      content: ['凭此卡预订任何附加服务包括接送机，家具租凭，家具购买，房屋清洁，搬运代买等 可享全单9.5折优惠（房租费用除外）', '实地看房服务5折', '开通水电煤服务5折'],
      intro: ['Hooli Home 让全球留学生安心的房屋租赁生活平台 100%真实房源 1对1全程服务 随时随地门店咨询', '悉尼门店地址：Shop125, 8 Quay Street, Haymarket', '悉尼总部地址：68 York Street, Sydney']
    },
    {
      img: './assets/logo-23.jpeg',
      content: ['凭此卡预订任何附加服务包括接送机，家具租凭，家具购买，房屋清洁，搬运代买等 可享全单9.5折优惠（房租费用除外）', '实地看房服务5折', '开通水电煤服务5折'],
      intro: ['Hooli Home 让全球留学生安心的房屋租赁生活平台 100%真实房源 1对1全程服务 随时随地门店咨询', '悉尼门店地址：Shop125, 8 Quay Street, Haymarket', '悉尼总部地址：68 York Street, Sydney']
    },
    {
      img: './assets/logo-23.jpeg',
      content: ['凭此卡预订任何附加服务包括接送机，家具租凭，家具购买，房屋清洁，搬运代买等 可享全单9.5折优惠（房租费用除外）', '实地看房服务5折', '开通水电煤服务5折'],
      intro: ['Hooli Home 让全球留学生安心的房屋租赁生活平台 100%真实房源 1对1全程服务 随时随地门店咨询', '悉尼门店地址：Shop125, 8 Quay Street, Haymarket', '悉尼总部地址：68 York Street, Sydney']
    },
    {
      img: './assets/logo-23.jpeg',
      content: ['凭此卡预订任何附加服务包括接送机，家具租凭，家具购买，房屋清洁，搬运代买等 可享全单9.5折优惠（房租费用除外）', '实地看房服务5折', '开通水电煤服务5折'],
      intro: ['Hooli Home 让全球留学生安心的房屋租赁生活平台 100%真实房源 1对1全程服务 随时随地门店咨询', '悉尼门店地址：Shop125, 8 Quay Street, Haymarket', '悉尼总部地址：68 York Street, Sydney']
    },
    {
      img: './assets/logo-23.jpeg',
      content: ['凭此卡预订任何附加服务包括接送机，家具租凭，家具购买，房屋清洁，搬运代买等 可享全单9.5折优惠（房租费用除外）', '实地看房服务5折', '开通水电煤服务5折'],
      intro: ['Hooli Home 让全球留学生安心的房屋租赁生活平台 100%真实房源 1对1全程服务 随时随地门店咨询', '悉尼门店地址：Shop125, 8 Quay Street, Haymarket', '悉尼总部地址：68 York Street, Sydney']
    },
    {
      img: './assets/logo-23.jpeg',
      content: ['凭此卡预订任何附加服务包括接送机，家具租凭，家具购买，房屋清洁，搬运代买等 可享全单9.5折优惠（房租费用除外）', '实地看房服务5折', '开通水电煤服务5折'],
      intro: ['Hooli Home 让全球留学生安心的房屋租赁生活平台 100%真实房源 1对1全程服务 随时随地门店咨询', '悉尼门店地址：Shop125, 8 Quay Street, Haymarket', '悉尼总部地址：68 York Street, Sydney']
    },
    {
      img: './assets/logo-23.jpeg',
      content: ['凭此卡预订任何附加服务包括接送机，家具租凭，家具购买，房屋清洁，搬运代买等 可享全单9.5折优惠（房租费用除外）', '实地看房服务5折', '开通水电煤服务5折'],
      intro: ['Hooli Home 让全球留学生安心的房屋租赁生活平台 100%真实房源 1对1全程服务 随时随地门店咨询', '悉尼门店地址：Shop125, 8 Quay Street, Haymarket', '悉尼总部地址：68 York Street, Sydney']
    },
    {
      img: './assets/logo-23.jpeg',
      content: ['凭此卡预订任何附加服务包括接送机，家具租凭，家具购买，房屋清洁，搬运代买等 可享全单9.5折优惠（房租费用除外）', '实地看房服务5折', '开通水电煤服务5折'],
      intro: ['Hooli Home 让全球留学生安心的房屋租赁生活平台 100%真实房源 1对1全程服务 随时随地门店咨询', '悉尼门店地址：Shop125, 8 Quay Street, Haymarket', '悉尼总部地址：68 York Street, Sydney']
    },
    {
      img: './assets/logo-23.jpeg',
      content: ['凭此卡预订任何附加服务包括接送机，家具租凭，家具购买，房屋清洁，搬运代买等 可享全单9.5折优惠（房租费用除外）', '实地看房服务5折', '开通水电煤服务5折'],
      intro: ['Hooli Home 让全球留学生安心的房屋租赁生活平台 100%真实房源 1对1全程服务 随时随地门店咨询', '悉尼门店地址：Shop125, 8 Quay Street, Haymarket', '悉尼总部地址：68 York Street, Sydney']
    },
    {
      img: './assets/logo-23.jpeg',
      content: ['凭此卡预订任何附加服务包括接送机，家具租凭，家具购买，房屋清洁，搬运代买等 可享全单9.5折优惠（房租费用除外）', '实地看房服务5折', '开通水电煤服务5折'],
      intro: ['Hooli Home 让全球留学生安心的房屋租赁生活平台 100%真实房源 1对1全程服务 随时随地门店咨询', '悉尼门店地址：Shop125, 8 Quay Street, Haymarket', '悉尼总部地址：68 York Street, Sydney']
    }];
  let container = $("#business-container");

  // let row = Math.ceil(businessContainer.length/2);
  let row = 10;
  let i = 0;
  let end = '</div>';
  let cardClass = '<div class="card">';
  let cardImage= '<div class="card-image">';
  let cardDescription = '<div class="card-description"><p>';
  let containerBegining = '<div class="row" id="business-container" style="display: flex;">';
  let cardSescriptionEnd = '</p>'
  let bodyBegining = '<div style="flex:1">'
  let cardImage = '';
  let body = '';
  let bodyEnd = '<div style="flex:1">'
  
  while(i<=row){
    if(!businessContainer[i] || !businessContainer[i+1]){
      if(!businessContainer[i]){
        console.log(`there is no more ${i+1}`);
      }else{
        console.log(`there is no more ${i+2}`);
      }
      break;
    }

    let item1 = businessContainer[i];
    let img1 = item1['img'];
    let description1 = '';
    body = cardClass+cardImage
    item1['content'].forEach((ele)=>{
      description1 += '<span class="dot">•</span>'+ele+'<br>';
      body += cardDescription+description1+cardSescriptionEnd;
    });

    console.log(body);
    // container.append(body);
    
    let item2 = businessContainer[i+1];
    

    // let bodyImage1 = '<img src="'+businessContainer[i][img]+'" alt="">';
    // let description1= '';
    // for(let j=0; j<businessContainer[i][content].length;  j++){
    //   description1 += businessContainer[i][content][j] + '<br>';
    // }
    // console.log(description1);
    // let body1 = '<div class="card"><div class="card-image"><img src="'+bodyImage+'" alt=""></div><div class="card-description"><p><span class="dot">•</span>{this is for content}<br></p><p class="card-address">{this is for intro}</p></div></div>'
    bdoy = '';
    i+=2
    
  }


});
