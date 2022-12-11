/******* Local Storage # Form Submitted ****/


let count = 0;
let mySub = document.getElementById("mySubmit");
let myBlends = document.getElementById("myBlends");

mySubmit.onclick = function() {
  count++;
  myBlends.innerHTML = count;
}
