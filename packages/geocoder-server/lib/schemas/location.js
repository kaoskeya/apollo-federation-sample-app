const {
  ApolloServer,
  gql
} = require("apollo-server-lambda");

const typeDefs = gql `
  type Location {
    latitude: Float
    longitude: Float
  }

  type Query {
    search(address: String!): Location
  }
`;

module.exports = typeDefs;
