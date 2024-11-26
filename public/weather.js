const fetchWeather = async (lat, lon, apiKey) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const weatherData = await response.json();
        console.log(weatherData);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

// Example usage
const lat = '35.6895'; // Replace with your latitude
const lon = '139.6917'; // Replace with your longitude
const apiKey = 'apiKey'; // Replace with your OpenWeatherMap API key

fetchWeather(lat, lon, apiKey);