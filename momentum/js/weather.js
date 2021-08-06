function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const API_KEY = "84fbfd4178e1418258c47713d9cc4a79";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const temperature = document.querySelector("#weather span:nth-child(2)");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = data.weather[0].main;
            temperature.innerText = `${data.main.temp}°C`;
            city.innerText = data.name;
        });
}
function onGeoErr(){
    alert("NO");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);