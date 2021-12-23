class UI {
    constructor() {
        this.location = document.getElementById("w-location");
        this.main = document.getElementById("w-main");
        this.icon = document.getElementById("w-icon");
        this.temp = document.getElementById("w-temp");
        this.temp_min = document.getElementById("w-temp-min");
        this.temp_max = document.getElementById("w-temp-max");
        this.pressure = document.getElementById("w-pressure");
        this.humidity = document.getElementById("w-humidity");
        this.wind_speed = document.getElementById("w-wind-speed");
        this.lon = document.getElementById("w-lon");
        this.lat = document.getElementById("w-lat");
    }

    paint(weather, location) {
        //---
        // let word;
        // this.translator(weather.weather[0].main)
        //     .then((result) => {
        //         console.log(result);
        //     })
        //     .catch((err) => console.log(err.message));
        //
        this.location.textContent = location;
        this.main.textContent = weather.weather[0].main;
        this.icon.setAttribute(
            "src",
            `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
        );
        this.temp.textContent = weather.main.temp;
        this.temp_min.textContent = weather.main.temp_min;
        this.temp_max.textContent = weather.main.temp_max;
        this.pressure.textContent = weather.main.pressure;
        this.humidity.textContent = weather.main.humidity;
        this.wind_speed.textContent = weather.wind.speed;
        this.lon.textContent = weather.coord.lon;
        this.lat.textContent = weather.coord.lat;
    }

    async translator(word) {
        let res = await fetch(
            //`https://translate.yandex.com/?lang=en-fa&text=${word}`
            `http://api.targoman.com/v7.0/rest/test/?token=YOUR_API_TOKEN`
        );

        let transWord = await res.json();
        return transWord;
    }
}
