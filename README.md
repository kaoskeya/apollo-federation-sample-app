# apollo-federation-sample-app

## run locally

**_ensure serverless is installed globally._**

```
cd packages/serverless-app
yarn start
```

## deploy

```
lerna bootstrap
cd packages/serverless-app

# to deploy to dev stage
yarn deploy <aws-profile-name>

# to deploy to a particular stage
yarn deploy <aws-profile-name> --stage <stage-name>
```

## about the repo

build a graphql app to illustrate apollo federation with a practical implementation and tests

the app will allow the user to enter a location, geo code it, get the weather and sunrise/sunset timings. these are deveoped as three different services.

free api's which do not require an API key will be used for easier forking and running:

- geocoding: https://geocode.xyz/
- weather: https://www.metaweather.com/api/
- sunrise/sunset: https://sunrise-sunset.org/api [TODO]

lerna to organise code into different packages.

you should be able to run the code locally.

sample app deployment will be done to AWS lambda.

you should be able to run the app locally as mentioned above.

### TODO

react app for the front end.
