const weather = require("../../lib/datasources/weather");

const testData = [{
  latitude: 12.93559,
  longitude: 77.61627,
  woeid: 2295420,
  title: "Bangalore"
}, ];

describe("[datasource] weather", () => {
  it("returns the weather for a pair of co-ordinates", async () => {
    const response = await weather(testData[0].latitude, testData[0].longitude);

    expect(response.woeid).toBe(testData[0].woeid);
    expect(response.title).toBe(testData[0].title);

    expect(response.min_temp).not.toBeNaN();
    expect(response.max_temp).not.toBeNaN();
    expect(response.the_temp).not.toBeNaN();
  });
});
