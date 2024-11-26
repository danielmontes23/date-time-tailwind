// weather.js

// Function to get the user's location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

// Function to show the position
function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getWeather(lat, lon);
}

// Function to handle errors
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
}

// Function to get the weather
function getWeather(lat, lon) {
    //const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(`Weather at your location: ${data.weather[0].description}`);
            console.log(`Temperature: ${data.main.temp}K`);
        })
        .catch(error => console.log('Error fetching the weather data:', error));
}

// Call the function to get the location
getLocation();