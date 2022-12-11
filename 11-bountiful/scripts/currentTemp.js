// select HTML elements in the document
let currentTemp = document.querySelector('#current-temp');

const captionDesc = document.querySelector('#condition');
let humidity = document.querySelector('#humidity');
let high = document.querySelector('#high');
let low = document.querySelector('#low');


const link = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=95f9751af00a99f70d9bd758841f2220&units=imperial"

console.log(link);

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data)

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = weatherData.main.temp.toFixed(0);
    humidity.innerHTML = weatherData.main.humidity.toFixed(0);
    high.innerHTML = weatherData.main.temp_max;
    low.innerHTML = weatherData.main.temp_min.toFixed(0);
    const desc = weatherData.weather[0].description;


    captionDesc.textContent = desc;




}



apiFetch(link);