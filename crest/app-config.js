var querystring = require('querystring');

var availableScopes = require('./available-scopes');

// ============================================================
// APP CONFIG
// ============================================================
var clientId = '6419217e48b44d2291083f679b4158eb';
var secretKey = 'B3Rulwdc2ZgPfgZls9kAu8ID2k26j9Y7zJ5GXyW3';
var redirectUrl = 'http://localhost:3000';
var scope = [
  availableScopes.remoteClientUI
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================
var getEncodedAuthHeader = function () {
  var concatString = clientId + ':' + secretKey;
  return new Buffer(concatString).toString('base64');
}

var getScopeString = function () {
  return scope.join(' ');
}

var genSsoUrl = function (state) {
  var ssoBase = 'https://login.eveonline.com/oauth/authorize';
  var params = {
    response_type: 'code',
    redirect_uri: redirectUrl,
    client_id: clientId,
    scope: getScopeString(),
    state: state
  }
  return ssoBase + '?' + querystring.stringify(params);
}

module.exports = {
  clientId: clientId,
  authHeader: getEncodedAuthHeader(),
  scope: getScopeString(),
  genSsoUrl: genSsoUrl
}