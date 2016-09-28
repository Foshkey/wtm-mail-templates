(function () {
  angular.module("mailApp")
  .service("mailCreatorService", ["$http", function ($http) {
    let serv = this;

    serv.recipient = "";
    serv.subject = "";
    serv.body = "";

    serv.createMail = function (recipient, subject, body) {

    }

  }])
})()