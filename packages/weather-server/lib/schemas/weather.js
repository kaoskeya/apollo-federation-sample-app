const {
  ApolloServer,
  gql
} = require("apollo-server-lambda");

const typeDefs = gql `
  type Weather {
    latitude: Float @external
    longitude: Float @external
    title: String
    min_temp: Float
    max_temp: Float
    the_temp: Float
  }

  extend type Location @key(fields: ["latitude", "longitude"]) {
    weather: Weather
  }

  type Query {
    weather(latitude: Float!, longitude: Float!): Weather
  }
`;

module.exports = typeDefs;
