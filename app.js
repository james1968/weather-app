const request = require('request');
const KEY = 'MIQG5QckeSe2ICUOBXlRCwvn7YZhfkcA';
const yargs = require('yargs');

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

request({
	url: `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY}&location=${encodedAddress}`,
	json: true
}, (error, response, body) => {
	console.log(`Address: ${argv.address}`);
	console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
	console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);
});
