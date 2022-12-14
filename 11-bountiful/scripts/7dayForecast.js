///////// 7-DAY FORECAST //////////////
///////////////////////////////////
///////// 7-DAY FORECAST //////////////
///////////////////////////////////

fetchForecast = function () {
	var endpoint =
  "https://api.openweathermap.org/data/3.0/onecall?lat=33.1581&lon=-117.3506&exclude=current,hourly,minutely,alerts&units=imperial&appid=e20a30bb940631578829f14eda7f6b0f";

	var forecastEl = document.getElementsByClassName("forecast");

	fetch(endpoint)
	.then(function (response) {
		if (200 !== response.status) {
			console.log(
				"Looks like there was a problem. Status Code: " + response.status
			);
			return;
		}

		forecastEl[0].classList.add('loaded');

		response.json().then(function (data) {
			var fday = "";
			data.daily.forEach((value, index) => {
				if (index > 0) {
					var dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
						weekday: "short",});

					var icon = value.weather[0].icon;
          const iconsrc = `https://openweathermap.org/img/w/${value.weather[0].icon}.png`;
					var temp = value.temp.day.toFixed(0);
          var descr = value.weather[0].description;


					fday = `<div class="forecast-day">
						<h4>${dayname}</h4>
						<div class="forecast-day--temp">${temp}<sup>°F</sup></div>

            <figure class="weatherICON">
                <img src="${iconsrc}" alt="${descr} icon" id="weather-icon" />
            </figure>
            <p class="wDescr">${descr}</p>
					</div>`;
					forecastEl[0].insertAdjacentHTML('beforeend', fday);
				}
			});
		});
	})
	.catch(function (err) {
		console.log("Fetch Error :-S", err);
	});
};



document.addEventListener( 'DOMContentLoaded', function() {
	var weather;

	if ( 'IntersectionObserver' in window ) {
		weather = document.querySelectorAll('.weather');

		var weatherObserver = new IntersectionObserver( function( entries, observer ) {
			entries.forEach( function( entry ) {
				if ( entry.isIntersecting ) {
					if (entry.target.classList.contains('weather')) {
						fetchForecast();
					}
				}
			});
		}, {
			rootMargin: '0px 0px -120px 0px'
		});

		weather.forEach(function (s) {
			weatherObserver.observe(s);
		});
	}
});