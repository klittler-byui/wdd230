
/* ATTEMPT 1 to get current date.  Result in error code when run on browser.*/

try {
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};
  document.getElementById("date1")= newDate().toLocaleDateString("en-UK", options);
} catch (e) {
	alert("Error with code or your browser does not support Locale");
}




/* ATTEMPT 2 -- also result in the error code.*/
const date2 = document.querySelector("#date2");

try {
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};
	date2.innerHTML = `Today is <span class="highlight">${new Date().toLocaleDateString("en-UK", options)}</span>!`;
} catch (e) {
	alert("Error with code or your browser does not support Locale");
}




/* ATTEMPT 3 --*/
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.querySelector("#date3").textContent = fulldate;


const date = new Date();
const year = date.getFullYear();
document.getElementById('curYr').innerHTML = year;
