function test() {
  // Retrive Data
var uid = document.getElementById("username").value;
var pw = document.getElementById("password").value;
var email = document.getElementById("email").value;

alert(uid + pw + email);

// Storing Data

var user = localStorage.setItem("uid", uid);
var pass = localStorage.setItem("pw", pw);
var em = localStorage.setItem("email", email);


// Retreiving stored data and using for a calcualtion

var user = localStorage.getItem("uid", uid);
var pass = localStorage.getItem("pw", pw);
var em = localStorage.getItem("email", email);

var a, b, c;


}