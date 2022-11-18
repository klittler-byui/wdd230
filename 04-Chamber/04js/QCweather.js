// select HTML elements in the document
const t = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const s = document.querySelector('#windSpeed');

const link = "https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=95f9751af00a99f70d9bd758841f2220&units=imperial"

console.log(link);


async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data)
            console.log(data); // this is for testing the call
            // displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    t.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    s.innerHTML = `${weatherData.wind.speed.toFixed(2)}`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

}

apiFetch(link);

//////////// WIND CHILL //////////////

if (t <= 50 && t > 3) {
  document. getElementById("windChill").innerHTML = wChill(t, s);
} else {
  document.getElementById("windChill").innerHTML = "N/A";
}

function wChill(temp, speed) {
          // Use provided formula to calculate wind chill.
          //  f = 35.74 + 0.6215t - 35.75s^0.16 + 0.4275t s^0.16
          let farenheit = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
          console.log(farenheit);

          // Round to the nearest whole number
          let digits = 0;
          let multiplier = Math.pow(10, digits);
          let f = Math.round(farenheit * multiplier) /  multiplier;
          return f;
}
