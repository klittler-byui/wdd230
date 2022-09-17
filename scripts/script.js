const date1 = document.querySelector("#date1");

try {
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};
	date1.textContent = new;
  Date().toLocaleDateString("en-UK", options);
} catch (e) {
	alert("Error with code or your browser does not support Locale");
}