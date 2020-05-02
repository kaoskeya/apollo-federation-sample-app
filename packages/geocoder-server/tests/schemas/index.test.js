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

const QUERY_SEARCH = gql `
  query Search($address: String!) {
    search(address: $address) {
      latitude
      longitude
    }
  }
`;

describe("[gql][schema] geocoder", () => {
    it("fetches the latitude and longitude of an address", async () => {
        const response = await query({
            query: QUERY_SEARCH,
            variables: {
                address: testData[0].address,
            },
        });

        expect(response.data.search.latitude).toBe(testData[0].latitude);
        expect(response.data.search.longitude).toBe(testData[0].longitude);
    });

    it("fetches the latitude and longitude of another address", async () => {
        const response = await query({
            query: QUERY_SEARCH,
            variables: {
                address: testData[1].address,
            },
        });

        expect(response.data.search.latitude).toBe(testData[1].latitude);
        expect(response.data.search.longitude).toBe(testData[1].longitude);
    });

    it("fetches 0, 0 for an invalid address", async () => {
        const response = await query({
            query: QUERY_SEARCH,
            variables: {
                address: testData[2].address,
            },
        });

        expect(response.data.search.latitude).toBe(testData[2].latitude);
        expect(response.data.search.longitude).toBe(testData[2].longitude);
    });
});
