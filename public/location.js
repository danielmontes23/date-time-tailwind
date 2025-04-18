// location.js

async function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const location = await getCityAndState(latitude, longitude);

            if (location) {
                const { city, state } = location;
                const locationElement = document.getElementById("nameOfCity");
                locationElement.textContent = `Location: ${city}, ${state}`;
            }
        }, (error) => {
            console.error("Error getting location: ", error);
        });
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}

async function getCityAndState(lat, lon) {
    const apiKey = 'YOUR_OPENCAGE_API_KEY'; // Replace with your OpenCage API key
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
            const { city, state } = data.results[0].components;
            return { city, state };
        } else {
            console.error("No results found for the given coordinates.");
            return null;
        }
    } catch (error) {
        console.error("Error fetching location data: ", error);
        return null;
    }
}

getCurrentLocation();