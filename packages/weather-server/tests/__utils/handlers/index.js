const {
  ApolloServer
} = require("apollo-server-lambda");
const {
  buildFederatedSchema
} = require("@apollo/federation");

const typeDefs = require("../../../lib/schemas");
const resolvers = require("../../../lib/resolvers");
const dataSources = require("../datasources");

const server = new ApolloServer({
  schema: buildFederatedSchema([{
    typeDefs,
    resolvers
  }]),
  dataSources,
});

module.exports = server;
