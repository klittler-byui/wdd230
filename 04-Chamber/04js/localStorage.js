// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");
const lastVisitDisplay = document.querySelector(".lastVisit");
const today = new Date();
const todayTime = today.getTime();

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date.
todayDisplay.textContent = Date.now();

const lastVisit = Number(window.localStorage.getItem("last-visit"));
console.log(lastVisit);

if (lastVisit !== 0) {
	const time = Date.now();

	let difference = ((time - lastVisit) / (1000 * 3600 * 24)).toFixed(0);

	localStorage.setItem("last-visit", time);

	lastVisitDisplay.textContent = difference;
} else {
	visitsDisplay.textContent = `Today is your first day here`;
	localStorage.setItem("last-visit", Date.now());
}
