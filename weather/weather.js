const request = require('request');

var getWeather = () => {
  request({
  	url: `https://api.darksky.net/forecast/a4e39ba13f2b83d8d9c98ddbba13aeea/51.608288,-0.657123`,
  	json: true
  	}, (error, response, body) => {
  	if (!error && response.statusCode === 200){
  		console.log(body.currently.temperature);
  	} else {
  		console.log(`Unable to fetch weather`);
  	}
  	});
}

module.exports.getWeather = getWeather;
