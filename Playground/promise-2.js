const request = require('request');
const KEY = 'MIQG5QckeSe2ICUOBXlRCwvn7YZhfkcA';

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);
  	request({
  		url: `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY}&location=${encodedAddress}`,
  		json: true
  	}, (error, response, body) => {
  		if (error) {
  			reject('Unable to connect to the server')
  		} else if (body.info.statuscode === 400) {
  			reject('Unable to find address')
  		} else if (body.info.statuscode === 0) {
  			resolve({
  				address: body.results[0].locations[0].adminArea5,
  				latitude: body.results[0].locations[0].latLng.lat,
  				longitude: body.results[0].locations[0].latLng.lng
  			})
  		}
  	});
  })
};

geocodeAddress('Beaconsfield').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
