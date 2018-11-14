const yargs = require('yargs');
const geocode = require('./geocode/geocode');


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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage)
	} else {
		console.log(JSON.stringify(results, undefined, 2));
	}
});


//a4e39ba13f2b83d8d9c98ddbba13aeea
