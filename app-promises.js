const yargs = require('yargs');
const axios = require('axios')
const KEY = 'MIQG5QckeSe2ICUOBXlRCwvn7YZhfkcA';
const WKEY = 'a4e39ba13f2b83d8d9c98ddbba13aeea'

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetech for the weather',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY}&location=${encodedAddress}`

axios.get(geocodeURL).then((response) => {
	if (response.data.info.statuscode === 400) {
		throw new Error('Unable to find address');
	}

	var lat = response.data.results[0].locations[0].latLng.lat;
	var lng = response.data.results[0].locations[0].latLng.lng;
	var weatherURL = `https://api.darksky.net/forecast/${WKEY}/${lat},${lng}`
	console.log(response.data.results[0].locations[0].adminArea5);
	return axios.get(weatherURL);
}).then((response) => {
	var temperature = response.data.currently.temperature;
	var apparentTemperature = response.data.currently.apparentTemperature;
	console.log(`It is currently ${temperature} but it feels like ${apparentTemperature}`);
}).catch((e) => {
	if (e.code === 'ENOTFOUND') {
			console.log('Unable to connect to API server');
	} else {
			console.log(e.message);
	}
});
