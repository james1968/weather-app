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
	var weatherURL = `https://api.darksky.net/forecast/${WKEY}/${lat},${lng}`
	console.log(response.data);
}).catch((e) => {
	if (e.code === 'ENOTFOUND') {
			console.log('Unable to connect to API server');
	} else {
			console.log(e.message);
	}
});
