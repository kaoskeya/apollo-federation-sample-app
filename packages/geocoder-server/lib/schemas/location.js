const {
  ApolloServer,
  gql
} = require("apollo-server-lambda");

const typeDefs = gql `
  type Location @key(fields: ["latitude", "longitude"]) {
    latitude: Float
    longitude: Float
  }

  type Query {
    search(address: String!): Location
  }
`;

module.exports = typeDefs;
