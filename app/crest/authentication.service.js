(function () {
  angular.module("eveCrest")
  .service("authenticationService", ["$httpParamSerializer", "$location", "$window", "appConfigService", function ($httpParamSerializer, $location, $window, appConfigService) {
    let serv = this;

    serv.authenticated = false;
    serv.authCode = "";
    serv.state = "";
    serv.accessToken = "";

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

      // To Be Continued...
    }

  }]);
})()