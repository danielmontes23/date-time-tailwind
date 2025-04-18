// const fetchWeather = async (lat, lon, apiKey) => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const weatherData = await response.json();
//         console.log(weatherData);
//         // You can use the weather data to update your website's UI here.
//     } catch (error) {
//         console.error('There has been a problem with your fetch operation:', error);
//     }
// };

// // Fetch user location and weather data
// const getWeatherForCurrentLocation = (apiKey) => {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 const lat = position.coords.latitude;
//                 const lon = position.coords.longitude;
//                 fetchWeather(lat, lon, apiKey);
//             },
//             (error) => {
//                 console.error('Error getting location:', error);
//             }
//         );
//     } else {
//         console.error('Geolocation is not supported by this browser.');
//     }
// };

// // Example usage
// const apiKey = 'your_openweathermap_api_key'; // Replace with your actual API key
// getWeatherForCurrentLocation(apiKey);




// Start here ....
const fetchWeather = async (lat, lon, apiKey) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const weatherData = await response.json();
        console.log(weatherData);

        // Get DOM Elements
        const city = document.querySelector('.city');
        const temp = document.querySelector('.temp');
        const icon = document.querySelector('.icon');

        // Set DOM Elements
        city.textContent = weatherData.name; 
        temp.textContent = weatherData.main.temp;
        icon.setAttribute('src', `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

// Fetch user location and weather data
const getWeatherForCurrentLocation = (apiKey) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                fetchWeather(lat, lon, apiKey);
            },
            (error) => {
                console.error('Error getting location:', error);
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
};

// Example usage
const apiKey = import.meta.env.PUBLIC_WEATHER_API; // Use the API key from environment variables
getWeatherForCurrentLocation(apiKey);