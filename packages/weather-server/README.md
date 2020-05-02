# `weather-server`

use co-ordinates to fetch weather

## api usage

https://www.metaweather.com/api/location/search/?lattlong=__x,y__ to get the `woeid`

https://www.metaweather.com/api/location/__woeid__ to get the weather

replace 'x,y' with lattitude and longitude of the place.

## gql specs

```
type Weather {
  title
  min_temp
  max_temp
  the_temp
}

extend Location and add weather: Weather
```
