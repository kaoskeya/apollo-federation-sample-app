const testData = require('../test-data');

const geocoder = async (location) => {
  const geocode = testData.find(l => l.address === location);

  if (!geocode) {
    return {
      latitude: 0,
      longitude: 0
    }
  }

  return {
    latitude: geocode.latitude,
    longitude: geocode.longitude
  }
};

module.exports = geocoder;
