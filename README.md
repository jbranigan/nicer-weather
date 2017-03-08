# Nicer Weather

This is a demonstration project built using Node.js, Express.js, Pug.js, Bootstrap, and the Weather Underground API.

The idea was to get a small server running to handle routes, fetch data from Weather Underground, and render a pretty interface. An add on is that the background gradient of the weather page is set based on the day's forecasted high and low temperatures.

## Run Locally

**Dependencies**: This app requires Node.js and npm to be installed. It was built running Node v6.9.1 and npm v4.3.0.

`$ git clone` this repository
`$ cd nicer-weather/app/`
Install the dependencies from package.json
`$ npm install` 

Get a Weather Underground API key. They provide free keys for developers [here](https://www.wunderground.com/weather/api/).

**To run the app locally:**

`WUKEY=YOUR_API_KEY DEBUG=myapp:* npm start`

This sets up an environment variable for the API key.

## View Demo

This app is deployed to a small Heroku instance here: [http://nicerweather.com](http://nicerweather.com)

