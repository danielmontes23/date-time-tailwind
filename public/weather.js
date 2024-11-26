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
const fetchWeather = async (location, date1, date2, apiKey) => {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date1}/${date2}?key=${apiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const weatherData = await response.json();
        console.log(weatherData);
        // You can use the weather data to update your website's UI here.
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
                const location = `${lat},${lon}`;
                const date1 = '2023-01-01'; // Replace with your desired start date
                const date2 = '2023-01-02'; // Replace with your desired end date
                fetchWeather(location, date1, date2, apiKey);
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
const apiKey = 'IDK'; // Replace with your actual API key
getWeatherForCurrentLocation(apiKey);