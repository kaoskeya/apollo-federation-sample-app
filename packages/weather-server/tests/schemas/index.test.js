"use strict";
const {
    gql
} = require("apollo-server-lambda");
const {
    createTestClient
} = require("apollo-server-testing");

const server = require("../__utils/handlers/index");
const testData = require("../__utils/test-data");

const {
    query
} = createTestClient(server);

const QUERY_WEATHER = gql `
  query Weather($latitude: Float!, $longitude: Float!) {
    weather(latitude: $latitude, longitude: $longitude) {
        title
        min_temp
        max_temp
        the_temp
    }
  }
`;

describe("[gql][schema] weather", () => {
    it("fetches the name and temperatures of co-ordinates", async () => {
        const response = await query({
            query: QUERY_WEATHER,
            variables: {
                latitude: testData[0].latitude,
                longitude: testData[0].longitude,
            },
        });

        expect(response.data.weather.title).toBe(testData[0].title);
        expect(response.data.weather.min_temp).toBe(testData[0].min_temp);
        expect(response.data.weather.max_temp).toBe(testData[0].max_temp);
        expect(response.data.weather.the_temp).toBe(testData[0].the_temp);
    });

    it("fetches the name and temperatures of another co-ordinates", async () => {
        const response = await query({
            query: QUERY_WEATHER,
            variables: {
                latitude: testData[1].latitude,
                longitude: testData[1].longitude,
            },
        });

        expect(response.data.weather.title).toBe(testData[1].title);
        expect(response.data.weather.min_temp).toBe(testData[1].min_temp);
        expect(response.data.weather.max_temp).toBe(testData[1].max_temp);
        expect(response.data.weather.the_temp).toBe(testData[1].the_temp);
    });
});
