(function () {
  angular.module("mailApp")
  
  .component("mailSelector", {
    templateUrl: "app/selector/mailSelector.component.html",
    controller: "mailSelectorController",
    bindings: {
      type: "<"
    }
  })
  .controller("mailSelectorController", ["mailSelectorService", function (mailSelectorService) {
    let ctrl = this;

    ctrl.types = types[ctrl.type];

    ctrl.isSelected = function (key) {
      return mailSelectorService.type[ctrl.type] === types[ctrl.type][key];
    }

    ctrl.select = function (key) {
      mailSelectorService.type[ctrl.type] = types[ctrl.type][key];
    }
  }]);

})();