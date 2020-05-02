# apollo-federation-sample-app

## run locally

**_ensure serverless is installed globally._**

```
lerna bootstrap
cd packages/serverless-app
yarn start
```

build a graphql app to illustrate apollo federation with a practical implementation and tests

the app will allow the user to enter a location, geo code it, get the weather and sunrise/sunset timings. these are deveoped as three different services.

free api's which do not require an API key will be used for easier forking and running:

- geocoding: https://geocode.xyz/
- weather: https://www.metaweather.com/api/
- sunrise/sunset: https://sunrise-sunset.org/api

lerna to organise code into different packages.

you should be able to run the code locally.

sample app deployment will be done to AWS lambda.

you should be able to run the app locally as mentioned above.

## wip

react app for the front end.
