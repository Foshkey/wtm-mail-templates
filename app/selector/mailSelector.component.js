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
      if (ctrl.type == "recipient") {
        Object.keys(mailSelectorService.types[ctrl.type]).forEach(function (typePropertyKey) {
          let currentType = mailSelectorService.types[ctrl.type][typePropertyKey];
          if (mailSelectorService.selectedType.mail.recipientTypes.indexOf(currentType.key) >= 0) {
            ctrlTypes[typePropertyKey] = currentType;
          }
        });
      }
      else if (ctrl.type == "mail") {
        ctrlTypes = mailSelectorService.types[ctrl.type];
      }
      return ctrlTypes;
    };

    ctrl.isSelected = function (key) {
      return mailSelectorService.selectedType[ctrl.type] === mailSelectorService.types[ctrl.type][key];
    }

    ctrl.select = function (key) {
      mailSelectorService.selectType(ctrl.type, mailSelectorService.types[ctrl.type][key]);
    }
  }]);

})();