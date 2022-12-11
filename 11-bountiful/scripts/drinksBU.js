const fruitOpt1 = document.getElementById("fruitSelect1");
const fruitOpt2 = document.getElementById("fruitSelect2");
const fruitOpt3 = document.getElementById("fruitSelect3");


console.log({ fruitOpt1 });

const getFruit = async () => {
  const response = await fetch("https://brotherblazzard.github.io/canvas-content/fruit.json");
  const data = await response.json();
  return data;
};

const fruitOptions = async () => {
  const options = await getFruit();
  for (option of options) {

    const newOption1 = document.createElement("option");
    const newOption2 = document.createElement("option");
    const newOption3 = document.createElement("option");


    newOption1.value = option.fruitname;
    newOption2.value = option.fruitname;
    newOption3.value = option.fruitname;

    newOption1.text = option.name;
    newOption2.text = option.name;
    newOption3.text = option.name;

    fruitOpt1.appendChild(newOption1);
    fruitOpt2.appendChild(newOption2);
    fruitOpt3.appendChild(newOption3);
  }
};

fruitOptions();

/*********** RECEIPT w/ LOC STORAGE ************/


function passValues() {
  let oDate = document.getElementById("lastModified").value;
  let fname = document.getElementById("fname").value;
  let tel = document.getElementById("tel").value;
  let email = document.getElementById("email").value;
  let fruit1  = document.getElementById("fruitSelected1").value;
  let fruit2  = document.getElementById("fruitSelected2").value;
  let fruit3  = document.getElementById("fruitSelected3").value;
  let inst  = document.getElementById("addInstructions").value;

  alert(`Thank you, ${fname}!`
  `We will begin preparing your specialty blend with:  ${fruit1}, ${fruit2}, and ${fruit3}.`

  `Special instructions:  ${inst}`

  `Ordered on: ${oDate}`
  `${fname} ${lname}`
  `Phone:  ${tel}`
  `Email:  ${email}`
  );
}


function orderReceipt() {
  alert("Thank you for your order!")
}



/************* On-Page pop-up not working *******/


let nextStep = document.querySelector('#mySubmit');

nextStep.addEventListener('click', function (e) {
    e.preventDefault();
    // Hide first view
    document.getElementById('my_form').style.display = 'none';

    // Show thank you message element
    document.getElementById('thank_you').style.display = 'block';
  });
