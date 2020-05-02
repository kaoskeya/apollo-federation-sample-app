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
    weather: (a, b, {
      dataSources: {
        weather
      }
    }) => {
      console.log(JSON.stringify(a));
      console.log(JSON.stringify(b));
      return weather(a.latitude, a.longitude);
    },
  },
};

module.exports = resolvers;
