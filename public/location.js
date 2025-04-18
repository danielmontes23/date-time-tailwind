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

// Example usage
getLocationData("New York");

<section>
  <input type="text" id="city-input" placeholder="Enter city name" />
  <button id="search-button" style="margin-top: 10px; border: 0.0625em solid black; border-radius: 0.3125em;">Search</button>
</section>

<script>
  const searchButton = document.getElementById('search-button') as HTMLButtonElement;
  const cityInput = document.getElementById('city-input') as HTMLInputElement;

  const searchCity = () => {
    const cityName = cityInput?.value.trim();
    if (cityName) {
      // Dispatch a custom event with the city name
      const event = new CustomEvent('citySearch', { detail: { cityName } });
      window.dispatchEvent(event);
    }
  };

  searchButton?.addEventListener('click', searchCity);

  cityInput?.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      searchCity();
    }
  });
</script>

<!-- Styling -->
<style>
  section {
    position: absolute;
    right: 30%;
    top: 25%;
    transform: translate(50%, -50%);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
</style>