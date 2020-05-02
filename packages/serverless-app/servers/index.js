const {
  ApolloServer
} = require("apollo-server-lambda");
const {
  ApolloGateway
} = require("@apollo/gateway");

const geocoderServer = require("geocoder-server");
const weatherServer = require("weather-server");

// BASE_URL will be set when deploying to AWS
const BASE = process.env.BASE_URL || "http://localhost:3000/dev";

const gateway = new ApolloGateway({
  serviceList: [{
      name: "geocoder",
      url: `${BASE}/geocoder`,
    },
    {
      name: "weather",
      url: `${BASE}/weather`,
    },
  ],
});

const server = new ApolloServer({
  gateway,
  // Disable subscriptions (not currently supported with ApolloGateway)
  subscriptions: false,
});

module.exports.geocoderServer = geocoderServer;
module.exports.weatherServer = weatherServer;
module.exports.gatewayServer = server.createHandler();
