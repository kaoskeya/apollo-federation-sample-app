# apollo-federation-sample-app

build a graphql app to illustrate apollo federation with a practical implementation

the app will allow the user to enter a location, geo code it, get the weather and sunrise/sunset timings. three services totally.

free api's which do not require an API key will be used for easier forking and running:

- geocoding: https://geocode.xyz/
- weather: https://www.metaweather.com/api/
- sunrise/sunset: https://sunrise-sunset.org/api

react will be used for the front end.
lerna to organise code into different packages.
you should be able to run the code locally.
sample app deployment will be done to AWS lambda. you should be able to deploy elsewhere easily, as the only AWS specific code will be the deploy script and the apollo server handler.
