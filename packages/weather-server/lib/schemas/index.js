const {
  merge
} = require("lodash");

const weatherSchema = require("./weather");

module.exports = merge(weatherSchema)
