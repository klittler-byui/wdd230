const date2 = document.querySelector("#date2");

try {
	const options = {
		weekday: "short",
		day: "numeric",
		month: "short",
		year: "numeric"
	};
	date2.innerHTML = `Today is <span class="highlight">${new Date().toLocaleDateString("en-US", options)}</span>!`;
} catch (e) {
	alert("Error with current date code");
}
