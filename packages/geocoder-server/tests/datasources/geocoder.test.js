const geocoder = require("../../lib/datasources/geocoder");

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const testData = [{
    address: "Koramangala",
    latitude: 12.93559,
    longitude: 77.61627,
  },
  {
    address: "yoyoyoyoyoyoyo",
    latitude: 0,
    longitude: 0,
  },
];

describe("[datasource] geocoder", () => {
  it("returns the latitude and longitude of a valid address", async () => {
    const response = await geocoder(testData[0].address);

    expect(response.latitude).toBe(testData[0].latitude);
    expect(response.longitude).toBe(testData[0].longitude);
  });

  it("return 0, 0 for an invalid address", async () => {
    // sleep to avoid rate limitting issue
    await sleep(3000);
    const response = await geocoder(testData[1].address);

    expect(response.latitude).toBe(testData[1].latitude);
    expect(response.longitude).toBe(testData[1].longitude);
  });
});
