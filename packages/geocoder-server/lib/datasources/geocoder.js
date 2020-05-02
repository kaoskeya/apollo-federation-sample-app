const fetch = require("node-fetch");

const geocoder = async (location) => {
  try {
    const response = await fetch(`https://geocode.xyz/${location}?json=1`);
    const json = await response.json();

    // console.log('json: ', json);

    return {
      latitude: parseFloat(json.latt),
      longitude: parseFloat(json.longt),
    };
  } catch (e) {
    console.log('e: ', e);
    // log to a service for further inspection
    return {
      latitude: 0,
      longitude: 0,
    };
  }
};

module.exports = geocoder;
