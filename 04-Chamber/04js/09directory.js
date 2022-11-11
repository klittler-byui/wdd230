const requestURL = 'https://raw.githubusercontent.com/klittler-byui/wdd230/main/04-Chamber/04js/directorylist.json';

const cards = document.querySelector('.cards');

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
  let DIRcard = document.createElement('section');
  let h2 = document.createElement('h2');
  let logo = document.createElement('img');
  let address = document.createElement('span');
  let phone = document.createElement('span');
  let web - document.createElement('span');

  h2.textContent = `${member.bname}`;
  address.textContent = `${member.address} ${member.city}, ${member.state} ${member.zip}`;
  phone.textContent = `${member.phone}`;
  web.textContent = `${member.web}`;

  logo.setAttribute('src', member.logoImg);
  logo.setAttribute('alt', `${member.bname} logo`);
  logo.setAttribute('loading', 'lazy');

  DIRcard.appendChild(logo);
  DIRcard.appendChild(address);
  DIRcard.appendChild(phone);
  DIRcard.appendChild(web);

  document.querySelector('div.cards').appendChild(card);
}