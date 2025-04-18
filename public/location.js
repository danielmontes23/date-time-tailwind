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

