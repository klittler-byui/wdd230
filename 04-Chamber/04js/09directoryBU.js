


/////////////// API Grid ///////////////////
const requestURL = 'https://raw.githubusercontent.com/klittler-byui/wdd230/main/04-Chamber/04js/directorylist.json';

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
  let h2 = document.createElement('h2');
  let logo = document.createElement('img');
  let address = document.createElement('span');
  let phone = document.createElement('span');
  let web = document.createElement('span');

  h2.textContent = `${member.name}`;
  address.textContent = `${member.address}`;
  phone.textContent = `${member.phone}`;
  web.textContent = `${member.web}`;

  logo.setAttribute('src', member.logoImg);
  logo.setAttribute('alt', `${member.name} logo`);
  logo.setAttribute('loading', 'lazy');

  Mcard.appendChild(logo);
  Mcard.appendChild(address);
  Mcard.appendChild(phone);
  Mcard.appendChild(web);

  document.querySelector('div.Mcards').appendChild(Mcard);
}
