const date1 = document.querySelector("#date1");

try {
  const options = {
    weekday: "short",
    day: "numberic",
    month: "short",
    year: "numeric"
  };
  date1.innerHTML = `Last Updated:  <span class="highlight">${new Date().toLocaleDateString("en-UK", options)}</span>!`;
} catch (e) {
  alert("Error.  Last updated JS code not working");

}