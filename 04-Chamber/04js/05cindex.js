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
let dayOfweek = new Date().getDay();

          let meetNgreet;
            if (dayOfweek != 3){
              meetNgreet = "Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
            }

            else  (dayOfweek == 3){
              meetNgreet = "Join us TONIGHT for the chamber meet and greet at 7:00 p.m.";
            }

            document.getElementById("meetPut").style.display = "block";