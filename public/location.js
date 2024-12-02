// location.js

async function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const location = await getCityAndState(latitude, longitude);
            console.log(location);
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
        const { city, state } = data.results[0].components;
        return { city, state };
    } catch (error) {
        console.error("Error fetching location data: ", error);
        return null;
    }
}

getCurrentLocation();