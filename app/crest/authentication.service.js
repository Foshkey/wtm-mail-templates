(function () {
  angular.module("eveCrest")
  .service("authenticationService", ["$http", "$httpParamSerializer", "$location", "$window", "appConfigService", function ($http, $httpParamSerializer, $location, $window, appConfigService) {
    let serv = this;

    serv.authenticated = false;
    serv.authCode = "";
    serv.state = "";
    serv.accessToken = "";
    serv.refreshToken = "";

    getAccessToken();

    serv.authenticate = function () {
      let authUrl = "https://login.eveonline.com/oauth/authorize";
      serv.state = guid();
      let params = {
        response_type: "code",
        redirect_uri: $location.absUrl(),
        client_id: appConfigService.clientId,
        scope: appConfigService.getScopeString(),
        state: serv.state
      };
      let fullUrl = authUrl + "?" + $httpParamSerializer(params);
      $window.location.href = fullUrl;
    }

    function guid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
      });
    }

    function getAccessToken() {
      let routeParams = $location.search();
      if (!routeParams.code || !routeParams.state) return;

      serv.authCode = routeParams.code;

      // Doesn't work with cross origin... Bummer...

      // let params = {
      //   grant_type: "authorization_code",
      //   code: serv.authCode
      // };

      // let config = {
      //   method: "POST",
      //   url: "https://login.eveonline.com/oauth/token",
      //   headers: {
      //     "Authorization": "Basic " + appConfigService.encodedAuthHeader,
      //     "Content-Type": "application/x-www-form-urlencoded"
      //   },
      //   data: $httpParamSerializer(params)
      // };

      // console.log(config);

      // $http(config).then(function (res) {
      //   serv.accessToken = res.data.access_token;
      //   serv.refreshToken = res.data.refresh_token;
      //   serv.authenticated = true;
      //   console.log(serv.accessToken);
      // });
    }

  }]);
})()