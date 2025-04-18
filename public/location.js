import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const apiKey = process.env.LOCATION_API_KEY;

if (!apiKey) {
  console.error("API key is missing. Please check your .env file.");
}

async function getLocationData(city) {
  try {
    const response = await fetch(
      `https://api.example.com/location?city=${city}&apikey=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching location data: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Handle city search
const searchButton = document.getElementById("search-button");
const cityInput = document.getElementById("city-input");

const searchCity = async () => {
  const cityName = cityInput?.value.trim();
  const resultContainer = document.getElementById("result-container"); // Add a container for results

  if (cityName) {
    console.log(`Searching for city: ${cityName}`);
    const data = await getLocationData(cityName);

    if (data) {
      // Display the fetched data in the result container
      resultContainer.innerHTML = `
        <h3>City: ${data.city || "Unknown"}</h3>
        <p>Latitude: ${data.latitude || "N/A"}</p>
        <p>Longitude: ${data.longitude || "N/A"}</p>
      `;
    } else {
      resultContainer.innerHTML = `<p>Could not fetch data for "${cityName}".</p>`;
    }
  } else {
    console.error("Please enter a valid city name.");
    resultContainer.innerHTML = `<p>Please enter a valid city name.</p>`;
  }
};

searchButton?.addEventListener("click", searchCity);

cityInput?.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    searchCity();
  }
});

