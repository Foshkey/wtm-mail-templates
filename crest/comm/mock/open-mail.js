var promise = require('promise');

var appConfig = require('../../app-config');

module.exports = function (accessToken, characterId, postData) {
  return new promise(function (resolve, reject) {

    console.log('Open Mail Request Recieved:');
    console.log(postData);

    resolve();
  });
}