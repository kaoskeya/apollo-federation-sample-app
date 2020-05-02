const resolvers = {
  Query: {
    search: async (_, {
      address
    }, {
      dataSources: {
        geocoder
      }
    }) => geocoder(address),
  },
};

module.exports = resolvers;
