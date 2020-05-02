const {
  merge
} = require("lodash");
const weatherResolvers = require("./weather");

module.exports = merge(weatherResolvers);
