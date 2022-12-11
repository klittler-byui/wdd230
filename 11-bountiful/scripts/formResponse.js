function getDataForm() {
  document.getElementById('locRES').innerHTML = document.myform.pickUpLoc.value;
  document.getElementById('fruit1RESP').innerHTML = document.myform.fruitSelect1.value;
  document.getElementById('fruit2RESP').innerHTML = document.myform.fruitSelect2.value;
  document.getElementById('fruit3RESP').innerHTML = document.myform.fruitSelect3.value;
  document.getElementById('insRES').innerHTML = document.myform.additionalInstructions.value;
  document.getElementById('fnameRES').innerHTML = document.myform.fname.value;
  document.getElementById('mobileRES').innerHTML = document.myform.mobile.value;
  document.getElementById('emailRES').innerHTML = document.myform.email.value;
  document.getElementById('dateRES').innerHTML = document.myform.memFormDate.value;
}

/***   const response = function (event) {
  // Recive user input
  let r_name = document.querySelector(#fname).value;
  let r_email = document.querySelector(#email).value;
  // Output on page
  fnameRES.innerHTML = r_name;
  dateRES.innerHTML = r_email;
  event.preventDefault();
}; **********/

/*** function getDataform() {
  debugger
  var fnameFORM = document.getElementById("fname").value;
  var dateFORM = document.getElementById("lastModified").value;
  var fruit1FORM = document.getElementById("fruitSelect1").value;


  document.getElementById('fnameRES').innerHTML = fnameFORM;
  document.getElementById('dateRES').innerHTML = dateFORM;
  document.getElementById('fruit1RESP').innerHTML = fruit1FORM;
  document.getElementById("p2").innerHTML = strText1;
}
***/

/*********
const freshForm = document.querySelector('.freshForm'),
  form = freshForm.querySelectorAll('.form')
  submitInput = form[0].querySelector('input[type="submit"]');

function getDataForm(e) {
  e.preventDefault();

  let formData = new FormData(form[0]);

  document.querySelector('dateRES').innerHTML = formData.get('lastModified');
  document.querySelector('fruit1RESP').innerHTML = formData.get('fruitSelect1');
  document.querySelector('fruit2RESP').innerHTML = formData.get('fruitSelect2');
  document.querySelector('fruit3RESP').innerHTML = formData.get('fruitSelect3');
  document.querySelector('response3').innerHTML = formData.get('mobile');


}

document.addEventListener('DOMContentLoaded', function(){
  submitInput.addEventListener('click'. getDataForm, false);
}, false);

*/