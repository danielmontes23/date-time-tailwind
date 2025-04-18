import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// API key for OpenWeatherMap
const weatherApiKey = process.env.WEATHER_API_KEY;

if (!weatherApiKey) {
  console.error("API key is missing. Please check your .env file.");
}

// Start with Fahrenheit
let units = "imperial"; // Use 'imperial' for Fahrenheit, 'metric' for Celsius

// DOM elements
const nameOfCity = document.querySelector(".city");
const tempOfCity = document.querySelector(".temp");
const countryOfCity = document.querySelector(".country");
const unitOfTemp = document.querySelector(".unit");
const toggleUnitButton = document.getElementById("toggleUnit");

// Function to fetch weather data
async function fetchWeather(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${weatherApiKey}`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    updateWeatherDisplay(data);
  } catch (error) {
    alert(error.message);
  }
}

// Update the weather display with the fetched data
function updateWeatherDisplay(data) {
  if (nameOfCity) nameOfCity.textContent = data.name || "Unknown";
  if (tempOfCity) tempOfCity.textContent = data.main.temp.toFixed(1) || "N/A"; // Round the temperature
  if (countryOfCity) countryOfCity.textContent = data.sys.country || "N/A";
  if (unitOfTemp) unitOfTemp.textContent = units === "imperial" ? "F" : "C"; // Update the unit display
}

// Listen for the custom event to trigger a weather fetch
window.addEventListener("citySearch", (event) => {
  const cityName = event.detail?.cityName;
  if (cityName) {
    fetchWeather(cityName);
  } else {
    alert("City name is missing in the event.");
  }
});

// Toggle the unit (Fahrenheit/Celsius)
if (toggleUnitButton) {
  toggleUnitButton.addEventListener("click", () => {
    // Toggle between Fahrenheit (imperial) and Celsius (metric)
    units = units === "imperial" ? "metric" : "imperial";
    toggleUnitButton.textContent =
      units === "imperial" ? "Celsius" : "Fahrenheit"; // Update the button text
    const cityName = nameOfCity?.textContent;
    if (cityName) fetchWeather(cityName);
  });
}