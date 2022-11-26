const requestURL = './04js/directorylist.json';
const spot = document.querySelector('#spot');
let cont = 0
let numbers = []

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const members = jsonObject['members'];
    members.forEach(displaySpotlight);
    random();
  })

  function random() {
    for (i=0; i < cont; i++) {
      document.querySelector('#spot' + i).getElementsByClassName.display = "none;"
    }
    select(cont,3)
  }

  function select (max, quant) {
    let aux = 0
    while (numbers.length < quant) {
      aux = 0;
      min = Math.floor(Math.random() * max);
      for (a = 0; a < numbers.length; a++) {
        if(numbers[a] == mix) {
          aux = 1
        }
      }
      if (aux == 0) {
        numbers.push(mix)
      }
      document.querySelector('#spot' + mix).style.display = '';
    }
  }

  function displaySpotlight(member) {
    if(members.memLevel == 'memLevel: gold') {
      let Scard = document.createElement('Ssection');
      let name = document.createElement('name');
      let logo = document.createElement('img');
      let address = document.createElement('span');
      let phone = document.createElement('span');
      let web = document.createElement('a');
      let level = document.createElement('memLevel');
      let email = document.createElement('email');
      let slogan = document.createElement('slogan');

      name.textContent = `${member.name}`;
      address.textContent = `${member.address}`;
      phone.textContent = `${member.phone}`;
      web.textContent = `${member.web}`;
      email.textContent = `${member.email}`;
      level.textContent = `${member.level}`;
      slogan.textContent = `${member.slogan}`;

      logo.setAttribute('src', member.logoImg);
      logo.setAttribute('alt', `${member.name} logo`);
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute("class", "spotLogo");
      web.setAttribute("href", member.web);
      web.setAttribute("target", "_blank");
      web.setAttribute("class", "smInfo");
      web.setAttribute("class", "webStyle");
      slogan.setAttribute("class", "slogan");
      phone.setAttribute("class", "smInfo");
      email.setAttribute("class", "smInfo");


      Scard.appendChild(logo);
      Scard.appendChild(slogan);
      Scard.appendChild(phone);
      Scard.appendChild(email);
      Scard.appendChild(web);

      spot.appendChild(Scard);
      cont += 1
    }
  }