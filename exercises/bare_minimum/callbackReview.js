/******************************************************************
 *                 Node style callback pattern                    *
 ******************************************************************/

var fs = require('fs');
var request = require('request');

var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    console.log('--------->data:', data);
    console.log('path: ------->',  filePath);
    if (err) {
      callback(err);
    } else {
      var result = data.split('\n')[0];
      callback(err, result);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
// HINT: the `request` module has been included to help you send HTTP requests
// HINT: there is a `statusCode` property on the `response` object
var getStatusCode = function (url, callback) {
  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(error, 200);  
    } else {
      callback(error);
    }
  });  
};

// Export these functions so we can unit test them
// and reuse them in later code ;)
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
