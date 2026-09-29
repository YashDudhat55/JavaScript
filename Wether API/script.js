const URL = "https://api.openweathermap.org/data/2.5/weather";

const searchBox = document.getElementById("city");
const searchBtn = document.getElementById("btn");

async function checkWeather(city = "Surat") {
    const res = await fetch(
        `${URL}?q=${city}&appid=3d3a48958433692073a506ba2dbeb24a&units=metric`
    );
    let data = await res.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
};

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
});

searchBox.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        checkWeather(searchBox.value)
    }
});

checkWeather();