(function () {
  angular.module("mailApp")
  .component("mailCreator", {
    templateUrl: "app/creator/mailCreator.component.html",
    controller: "mailCreatorController"
  })
  .controller("mailCreatorController", ["mailCreatorService", "mailTemplateService", function (mailCreatorService, mailTemplateService) {
    let ctrl = this;

    ctrl.pilotName = "";
    ctrl.mailTemplateService = mailTemplateService;

    ctrl.createMail = function () {
      mailCreatorService.createMail(ctrl.pilotName, ctrl.mailTemplateService.template.subj, ctrl.mailTemplateService.template.text);
    }

  }]);
})();