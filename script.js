//use it in creating the required cookies to display a greeting message to your visitor

//with displaying an image as his profile pic referring to his gender,

//and inform him with his number of visits to the site

//Display username and number of visits with font color according to his choices

var formBtn = document.getElementById("formBtn");
var inputs = document.querySelectorAll(".form-input");
var fstPage = document.getElementById("fstPage");
var sndPage = document.getElementById("sndPage");
var colorr = document.getElementById("color");

formBtn.addEventListener("click", function () {
  var genderImage = document.querySelector(
    'input[name="gender"]:checked + label > img'
  ).src;

  var gender = document.querySelector('input[name="gender"]:checked').value;
  setCookie("username", inputs[0].value);
  setCookie("age", inputs[1].value);
  setCookie("gender", gender);
  setCookie("color", colorr.value);
  setCookie("genderImage", genderImage);

  // sndPage.classList.replace("d-none", "d-static");
  // fstPage.classList.add("d-none");

  var username = getCookie("username");
  // var color = getCookie("color");
  var visitsCount = countingVisits(username);
  setCookie("visitsCount", visitsCount);

  window.location.href = "sndpage.html";

  // sndPage.innerHTML = `<div>
  //                           <div><img src="${genderImage}" alt=""></div>
  //                           <p>Welcome <span style="color:${color};">${username}</span> you have visited this ${visitsCount} times</p>
  //                       </div>`;
});

function countingVisits(username) {
  var visitCount = getCookie(username + "Visits");
  console.log(visitCount);

  if (visitCount) {
    visitCount = parseInt(visitCount);
    visitCount += 1;
  } else {
    visitCount = 1;
  }

  setCookie(username + "Visits", visitCount);
  return visitCount;
}
