// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const link = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=95f9751af00a99f70d9bd758841f2220&units=imperial"


async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data)
            console.log(data); // this is for testing the call
            // displayResults(data);
        } else {
            // throw Error(await response.text());
            console.log(`Response not ok ${await response.text()}`);
        }
    } catch (error) {
        //console.log(error);
        console.log(`Error ${error.message}`)
    }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

}

apiFetch(link);
