// select HTML elements in the document
let t = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
let calcWind = document.querySelector('#windChill');

const link = "https://api.openweathermap.org/data/2.5/onecall?q=Carlsbad&exclude=current,minutely,hourly,alerts&appid=95f9751af00a99f70d9bd758841f2220&units=imperial"

console.log(link);

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data)
            wChill(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    t.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

}

//////////// WIND CHILL //////////////


function wChill(windData) {
            let s = document.querySelector('#windSpeed');
            s.innerHTML = `${windData.wind.speed}`;
            s = `${windData.wind.speed}`
            t = `${windData.main.temp}`

          if (t <= 50 && s > 3) {
            let farenheit = 35.74 + 0.6215 * t - 35.75 *Math.pow(s, 0.16)  + 0.4275 * t * Math.pow(s, 0.16);
            farenheit = farenheit.toFixed(2)
            calcWind.innerHTML = farenheit

            } else {
              calcWind.innerHTML = "N/A";
            }
}

apiFetch(link);