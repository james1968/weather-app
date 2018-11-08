const request = require('request');
const KEY = 'MIQG5QckeSe2ICUOBXlRCwvn7YZhfkcA'

request({
	url: 'http://www.mapquestapi.com/geocoding/v1/address?key='+KEY+'&location=Beaconsfield,Buckinghamshire',
	json: true
}, (error, response, body) => {
	console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
	console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);
});