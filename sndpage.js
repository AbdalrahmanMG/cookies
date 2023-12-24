
var username = getCookie("username");
var age = getCookie("age");
var gender = getCookie("gender");
var color = getCookie("color");
var genderImage = getCookie("genderImage");
var visitsCount = getCookie("visitsCount");

sndPage.innerHTML = `<div class="d-flex flex-column justify-content-center align-items-center">
<div><img src="${genderImage}" alt=""></div>
<p>Welcome <span style="color:${color};">${username}</span> you have visited this ${visitsCount} times</p>
</div>`;

visitsCount = Number(visitsCount);
visitsCount +=1;
setCookie("visitsCount", visitsCount);


// function getCookie(name) {
//     // Add your implementation of getCookie here
// }

// Retrieve the values from cookies


// Now you can use these variables in your page as needed
// console.log("Username: " + username);
// console.log("Age: " + age);
// console.log("Gender: " + gender);
// console.log("Color: " + color);
// console.log("Gender Image: " + genderImage);
// console.log("Visits Count: " + visitsCount);
