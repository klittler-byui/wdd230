


/////////////// API Grid ///////////////////
/* GitHub link for directory: 'https://raw.githubusercontent.com/klittler-byui/wdd230/main/04-Chamber/04js/directorylist.json' */

const requestURL = "./04js/directorylist.json";

const Scards = document.querySelector('.Scards');

fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject);
  const members = jsonObject["members"].filter(members => members.memLevel === "gold");
  members.forEach(displayMembers);
});

function displayMembers (member) {
  let Scard = document.createElement('Ssection');
  let name = document.createElement('name');
  let logo = document.createElement('img');
  let address = document.createElement('span');
  let phone = document.createElement('span');
  let web = document.createElement('a');
  let level = document.createElement('memLevel');
  let email = document.createElement('email');

  name.textContent = `${member.name}`;
  address.textContent = `${member.address}`;
  phone.textContent = `${member.phone}`;
  web.textContent = `${member.web}`;
  email.textContent = `${member.email}`;

  logo.setAttribute('src', member.logoImg);
  logo.setAttribute('alt', `${member.name} logo`);
  logo.setAttribute('loading', 'lazy');
  web.setAttribute("href", member.web);
  web.setAttribute("target", "_blank");

  Scard.appendChild(logo);
  Scard.appendChild(phone);
  Scard.appendChild(email);
  Scard.appendChild(web);

  document.querySelector('div.Scards').appendChild(Scard);
}