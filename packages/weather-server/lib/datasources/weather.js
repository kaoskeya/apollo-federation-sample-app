const fetch = require("node-fetch");

const weather = async (latitude, longitude) => {
  try {
    const woeResponse = await fetch(`https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`);
    const woeJson = await woeResponse.json();

    const weatherResponse = await fetch(`https://www.metaweather.com/api/location/${woeJson[0].woeid}`);
    const weatherJson = await weatherResponse.json();

    return {
      ...weatherJson.consolidated_weather[0],
      title: weatherJson.title,
      woeid: weatherJson.woeid,
    }
  } catch (e) {
    // log to a service for further inspection
    console.log(e);
    return {
      title: "Unknown",
      min_temp: 0,
      max_temp: 100,
      the_temp: 50,
    };
  }
};

module.exports = weather;
