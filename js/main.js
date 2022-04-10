const weatherKey = "4d57ac0fdfecdda18037489ee4ba6501"

//Function to get city name from form, pass it to the API call, and fill global variable with data
async function getData(){
    city = document.getElementById('city').value;
    Country = document.getElementById('country').value;
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${Country}&appid=${weatherKey}&units=imperial`);
    data = await response.json();
    document.getElementById("city").innerHTML=`${city}`;
    document.getElementById("country").innerHTML= `${Country}`;
    document.getElementById("high").innerHTML = `${data.main.temp_max} F`;
    document.getElementById("low").innerHTML =`${data.main.temp_min} F`;
    document.getElementById("feel").innerHTML =`${data.main.feels_like} F`;
    document.getElementById("description").innerHTML=data.weather[0].description;
    document.getElementById("cloud").innerHTML = `${data.clouds.all} %`;
    return data

}