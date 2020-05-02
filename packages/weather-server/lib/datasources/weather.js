const fetch = require("node-fetch");

const weather = async (latitude, longitude) => {
  try {
    const woeResponse = await fetch(`https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`);
    const woeJson = await woeResponse.json();

    console.log(woeJson);

    const weatherResponse = await fetch(`https://www.metaweather.com/api/location/${woeJson[0].woeid}`);
    console.log(weatherResponse);

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

module.exports = weather;
