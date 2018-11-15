const request = require('request');
const KEY = 'MIQG5QckeSe2ICUOBXlRCwvn7YZhfkcA';

var geocodeAddress = (address, callback) => {
	var encodedAddress = encodeURIComponent(address);

	request({
		url: `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY}&location=${encodedAddress}`,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback('Unable to connect to the server')
		} else if (body.info.statuscode === 400) {
			callback('Unable to find address')
		} else if (body.info.statuscode === 0) {
			callback(undefined, {
				address: body.results[0].locations[0].adminArea5,
				latitude: body.results[0].locations[0].latLng.lat,
				longitude: body.results[0].locations[0].latLng.lng
			})
		}
	});
};

module.exports.geocodeAddress = geocodeAddress;