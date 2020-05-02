const {
  createTestClient
} = require("apollo-server-testing");

const {
  gatewayServer
} = require("../../../servers");

const {
  query
} = createTestClient(gatewayServer);

const QUERY_SEARCH_WITH_WEATHER = gql `
  query Search($address: String!) {
    search(address: $address) {
      latitude
      longitude
      weather {
        title
        min_temp
        max_temp
        the_temp
      }
    }
  }
`;

describe("[gql][integration][schema] geocoder and weather", () => {
  it("fetches the latitude, longitude and weather information of an address", async () => {
    const response = await query({
      query: QUERY_SEARCH_WITH_WEATHER,
      variables: {
        address: "Koramangala",
      },
    });

    console.log(response);

    expect(response.data.search.latitude).not.toBeNaN();
    expect(response.data.search.longitude).not.toBeNaN();

    expect(response.data.search.weather.title).toBe('Bangalore');
    expect(response.data.search.weather.min_tmep).not.toBeNaN();
    expect(response.data.search.weather.max_tmep).not.toBeNaN();
    expect(response.data.search.weather.the_tmep).not.toBeNaN();
  });
});
