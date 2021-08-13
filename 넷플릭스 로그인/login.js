var corpw = "1234";
var pw;
var logo = document.getElementById("logo");
var button = document.getElementById("button");
var container = document.getElementById("container");
const bbody = [logo, button, container];
var inputs = [
  $(".i.first").focus,
  $(".i.second"),
  $(".i.third"),
  $(".i.fourth"),
];
var tables = document.getElementsByClassName("t");
var table = document.getElementById("login");
var body = document.body;
var inputs = document.querySelectorAll("input");

function close() {
  bbody.forEach((each) => {
    each.style.display = "none";
    //창 닫는 방법을 모르겠어서 이렇게라도,,,
  });
  body.style.background = "white";
  body.innerHTML =
    "<div style = 'margin : auto;text-align : center; font-size : 60px;'>TERMINATED</div>";
}

button.addEventListener("click", close);
function focuss() {
  $(".i.first").focus();
}
function automove() {
  inputs[0].onkeyup = function () {
    if (1 <= inputs[0].value.length) {
      inputs[0].blur();
      inputs[1].focus();
    }
    pw = "";
    for (var i = 0; i < 4; i++) {
      pw += inputs[i].value.toString();
    }
  };
  inputs[1].onkeyup = function () {
    if (1 <= inputs[1].value.length) {
      inputs[1].blur();
      inputs[2].focus();
    } else {
      inputs[1].blur();
      inputs[0].focus();
    }
    pw = "";
    for (var i = 0; i < 4; i++) {
      pw += inputs[i].value.toString();
    }
  };
  inputs[2].onkeyup = function () {
    if (1 <= inputs[2].value.length) {
      inputs[2].blur();
      inputs[3].focus();
    } else {
      inputs[2].blur();
      inputs[1].focus();
    }
    pw = "";
    for (var i = 0; i < 4; i++) {
      pw += inputs[i].value.toString();
    }
  };
  inputs[3].onkeyup = function () {
    pw = "";
    for (var i = 0; i < 4; i++) {
      pw += inputs[i].value.toString();
    }
    if (1 <= inputs[3].value.length && pw === corpw) {
      bbody.forEach((each) => {
        each.style.display = "none";
        //창 닫는 방법을 모르겠어서 이렇게라도,,,
      });
      body.style.background = "white";
      body.innerHTML =
        "<div style = 'margin : auto;text-align : center; font-size : 60px;'>LOGIN SUCCESS</div>";
    } else if (inputs[3].value.length === 0) {
      inputs[3].blur();
      inputs[2].focus();
    } else if (pw !== corpw) {
      bbody.forEach((each) => {
        each.style.display = "none";
        //창 닫는 방법을 모르겠어서 이렇게라도,,,
      });
      body.style.background = "white";
      body.innerHTML =
        "<div style = 'margin : auto;text-align : center; font-size : 60px;'>LOGIN FAIL</div>";
    }
  };
}

focuss();
automove();
