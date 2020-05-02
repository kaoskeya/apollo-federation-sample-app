const resolvers = {
  Query: {
    weather: (_, {
        latitude,
        longitude
      }, {
        dataSources: {
          weather
        }
      }) =>
      weather(latitude, longitude),
  },
  Location: {
    weather: ({
        latitude,
        longitude
      }, _, {
        dataSources: {
          weather
        }
      }) =>
      weather(latitude, longitude),
  },
};

module.exports = resolvers;
