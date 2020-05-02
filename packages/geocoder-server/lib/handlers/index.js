"use strict";

const {
  ApolloServer
} = require("apollo-server-lambda");
const {
  buildFederatedSchema
} = require("@apollo/federation");

const typeDefs = require("../schemas");
const resolvers = require("../resolvers");
const dataSources = require("../datasources");

const server = new ApolloServer({
  schema: buildFederatedSchema([{
    typeDefs,
    resolvers,
  }, ]),
  dataSources
});

module.exports = server;
