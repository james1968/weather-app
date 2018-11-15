const request = require('request');
const WKEY = 'a4e39ba13f2b83d8d9c98ddbba13aeea'

var getWeather = (lat, lng, callback) => {
  request({
  	url: `https://api.darksky.net/forecast/${WKEY}/${lat},${lng}`,
  	json: true
  	}, (error, response, body) => {
  	if (!error && response.statusCode === 200) {
  		callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
        });
  	} else {
  		callback(`Unable to fetch weather`);
  	}
  	});
}

module.exports.getWeather = getWeather;
