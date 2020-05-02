# `geocoder`

code to convert location to co-ordinates

## api usage

https://geocode.xyz/__address__?json=1

replace 'address' with name of the place.

## gql specs

```
type Location {
  latitude
  longitude
}

query search(address: String!): Location
```
