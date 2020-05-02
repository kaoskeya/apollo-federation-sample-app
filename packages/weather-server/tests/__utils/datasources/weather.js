const testData = require('../test-data');

const weather = async (latitude, longitude) => testData.find(l => l.latitude === latitude && l.longitude === longitude);

module.exports = weather;
