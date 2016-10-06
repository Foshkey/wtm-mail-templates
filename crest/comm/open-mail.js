var appConfig = require('../app-config');
var comm = require('./comm-service');

module.exports = function (accessToken, characterId, postData) {

  // Options
  var options = {
      host: 'crest-tq.eveonline.com',
      path: '/characters/' + characterId + '/ui/openwindow/newmail/',
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
  };

  return comm.sendRequest(options, postData);
}