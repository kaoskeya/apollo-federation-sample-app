const {
  ApolloServer,
} = require('apollo-server-lambda');

const typeDefs = require("../../../lib/schemas");
const resolvers = require("../../../lib/resolvers");
const dataSources = require("../datasources");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
})

module.exports = server;
