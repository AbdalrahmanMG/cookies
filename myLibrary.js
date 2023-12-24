//to create, display and delete cookies


//Replace the registration page with the
//profile page using location object the library should have the
//following functions:

function setCookie(key, value, expireDate) {
  document.cookie = `${key} = ${value} ; expires = ${expireDate}`;
  // console.log(document.cookie = `${key} = ${value} ; expires = ${expireDate}`);
}

function getCookie(cookieName) {
  var arr = document.cookie.split("; ");
  console.log(arr);

  var result = false;

  for (var i = 0; i < arr.length; i++) {
    var keyCkeck = arr[i].split("=");
    if (keyCkeck[0] === cookieName) {
      result = keyCkeck[1];
    }
  }
  return result
}

function deleteCookie(key) {
  document.cookie = `${key} = deleted ; expires = ${new Date(1999, 11, 10)}`;
}

function allCookieList(){
  var arr = document.cookie.split("; ");
  var cookieList =[];

  for (var i = 0; i < arr.length; i++) {
    var checked = arr[i].split("=");
    if (checked.length === 2) {
      var key = checked[0];
      var value = checked[1];
      cookieList.push({ key, value});
    }
  }

}

function hasCookie(cookieName){
  return document.cookie.includes(cookieName);
}
