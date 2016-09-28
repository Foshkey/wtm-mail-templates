(function () {
  angular.module("mailApp")
  .service("mailTemplateService", ["$http", function ($http) {
    let serv = this;

    serv.template = {};
    serv.templateCache = {};

    serv.setTemplate = function (mailType, recipientType) {
      if (!mailType || !recipientType) return;

      let templateUrl = "templates/" + mailType + "/" + recipientType;

      if (!serv.templateCache) serv.templateCache = {};
      if (!serv.templateCache[mailType]) serv.templateCache[mailType] = {};
      if (!serv.templateCache[mailType][recipientType]) {
        $http.get(templateUrl).then(function (res) {
          serv.templateCache[mailType][recipientType] = { text: res.data };
          serv.template = serv.templateCache[mailType][recipientType];
        });
      }
      else {
        serv.template = serv.templateCache[mailType][recipientType];
      }
    }

  }]);
})()