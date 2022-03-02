const API_KEY = `e6ed686765f37c857ab7850c78457132`;

const searchTemperature = () => {
    const city = document.getElementById("city-name").value;
    // clear input field data
    document.getElementById("city-name").value = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url);

    fetch(url)
        .then((res) => res.json())
        .then((data) => displayTemperature(data));
};

// display temperature
const displayTemperature = (tempreture) => {
    console.log(tempreture.message);

    const weatherStatus = (document.getElementById("weather-status").innerHTML = `
        <img src="http://openweathermap.org/img/wn/${tempreture.weather[0].icon}@2x.png" alt="" />
                <h1>${tempreture.name}</h1>
                <h3><span>${tempreture.main.temp}</span>&deg;C</h3>
                <h1 class="lead">${tempreture.weather[0].main}</h1>
        `);
};