const button = document.getElementById("submit");
const weatherText = document.getElementById("weather");
const tempText = document.getElementById("temp");
const input = document.getElementById("input");
const locationText = document.getElementById("location")



button.addEventListener("click", async (e) => {
    e.preventDefault();
    place = await input.value.toString();
    getWeather(place);
});

input.addEventListener("keypress", async (e) => {
    if (e.key == 'Enter') {
        e.preventDefault();
        place = await input.value.toString();
        getWeather(place);
    }
});

async function getWeather(location) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=ace4d94a1a8c4a129b5160532230504&q=${location.toString()}`, {mode: 'cors'})
    .then( (response) => {
        return response.json();
    })
    .then( (response) => {
        console.log(response);
        let temperature = response.current.temp_f;
        let weatherCondition = response.current.condition.text;
        let currentLocation = response.location.name + ", " + response.location.region;
        console.log(weatherCondition);
        weatherText.innerHTML = weatherCondition;
        tempText.innerHTML = temperature + "° F";
        locationText.innerHTML = currentLocation;
    });
}

