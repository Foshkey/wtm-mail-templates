(function () {
  angular.module("mailApp")
  .service("mailCreatorService", ["$http", "authenticationService", function ($http, authenticationService) {
    let serv = this;

    serv.recipient = "";
    serv.subject = "";
    serv.body = "";

    serv.createMail = function (recipient, subject, body) {
      if (!authenticationService.authenticated) {
        authenticationService.authenticate();
      }
    }

  }])
})()