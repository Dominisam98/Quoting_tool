// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 3000;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});

const fetchData = async () => {
  fetch(
        `https://www.airport-data.com/api/ap_info.json?icao=KJFK`

      )
      .then((res) => {

        console.log(res)


      });


      // { 'flight': { 'departure': 'KTEB', 'destination': 'KVNY', 'scheduledTimeOfDeparture': '2022-02-25T11:24:36.000Z', 'aircraftRegistration': "N150MB" } },




  };
fetchData()
