const date1 = document.querySelector("#date1");

try {
	const options = {
		day: "numeric",
		month: "numeric",
		year: "numeric"
	};
	date1.innerHTML = `${new Date().toLocaleDateString("en-US", options)}</span>`;
} catch (e) {}

const date2 = document.querySelector("#date2");

try {
	const options = {
		day: "numeric",
		month: "long",
		year: "numeric"
	};
	date2.innerHTML = `${new Date().toLocaleDateString("en-US", options)}</span>`;
} catch (e) {}


const copyYr = document.querySelector("#copyYr");
// Try to complete the method with options
try {
	const options = {
		year: "numeric"
	};
	copyYr.innerHTML = `${new Date().toLocaleDateString("en-US", options)}</span>`;
} catch (e) {}



// Menu Hamburger Button
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;




// TUES WED HERO BANNER //


let bannerDay = new Date().getDay();
const announcement = document.querySelector('#announcement');
if (bannerDay === 1 || bannerDay === 2){
announcement.style.display = 'block';
} else{
announcement.style.display = 'none';
}
const close = document.querySelector('#close');
close.addEventListener('click', () => {
banner.style.display = 'none';
})
