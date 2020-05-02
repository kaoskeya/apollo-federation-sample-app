const fetch = require("node-fetch");

const geocoder = async (latitude, longitude) => {
  try {
    const woeResponse = await fetch(`https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`);
    const woeJson = await woeResponse.json();

    const weatherResponse = await fetch(`https://www.metaweather.com/api/location/${woeJson[0].woeid}`);
    return weatherResponse.json();
  } catch (e) {
    // log to a service for further inspection
    return {
      title: "Unknown",
      min_temp: 0,
      max_temp: 100,
      the_temp: 50,
    };
  }
};

module.exports = geocoder;
