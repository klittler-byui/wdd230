
/****** Days Between Visits Script *********/
const visit = document.querySelector(".lastVisit");
const today = new Date();

const lastVisit = Number(window.localStorage.getItem("last-visit"));

if (lastVisit !== 0) {
	const time = Date.now();
	let difference = ((time - lastVisit) / (1000 * 3600 * 24)).toFixed(0);
	localStorage.setItem("last-visit", time);
	visit.textContent = difference;
} else {
	visits.textContent = `Today is your first day here`;
	localStorage.setItem("last-visit", Date.now());
}
