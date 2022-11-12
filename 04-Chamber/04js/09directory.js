


/////////////// API Grid ///////////////////
/* GitHub link for directory: 'https://raw.githubusercontent.com/klittler-byui/wdd230/main/04-Chamber/04js/directorylist.json' */

const requestURL = "./04js/directorylist.json"  ;

const Mcards = document.querySelector('.Mcards');

fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject);
  const members = jsonObject['members'];
  members.forEach(displayMembers);
});

function displayMembers (member) {
  let Mcard = document.createElement('section');
  let name = document.createElement('name');
  let logo = document.createElement('img');
  let address = document.createElement('span');
  let phone = document.createElement('span');
  let web = document.createElement('a');

  name.textContent = `${member.name}`;
  address.textContent = `${member.address}`;
  phone.textContent = `${member.phone}`;
  web.textContent = `${member.web}`;

  logo.setAttribute('src', member.logoImg);
  logo.setAttribute('alt', `${member.name} logo`);
  logo.setAttribute('loading', 'lazy');
  web.setAttribute("href", member.web);
  web.setAttribute("target", "_blank");

  Mcard.appendChild(logo);
  Mcard.appendChild(name);
  Mcard.appendChild(address);
  Mcard.appendChild(phone);
  Mcard.appendChild(web);

  document.querySelector('div.Mcards').appendChild(Mcard);
}


//////// Grid View Toggle Function ///////////
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".Mcards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
