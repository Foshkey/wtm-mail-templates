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

    ctrl.types = function () {
      let ctrlTypes = {};
      let mailSelection = mailSelectorService.type.mail;
      Object.keys(types[ctrl.type]).forEach(function (type) {
        if (types[ctrl.type][type].showOnMailType) {
          if (types[ctrl.type][type].showOnMailType.indexOf(mailSelection.key) >= 0) {
            ctrlTypes[type] = types[ctrl.type][type];
          }
        }
        else {
          ctrlTypes[type] = types[ctrl.type][type];
        }
      });
      return ctrlTypes;
    };

    ctrl.isSelected = function (key) {
      return mailSelectorService.type[ctrl.type] === types[ctrl.type][key];
    }

    ctrl.select = function (key) {
      mailSelectorService.type[ctrl.type] = types[ctrl.type][key];
    }
  }]);

})();