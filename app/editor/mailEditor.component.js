(function () {
  angular.module("mailApp")
  .component("mailEditor", {
    templateUrl: "app/editor/mailEditor.component.html",
    controller: "mailEditorController"
  })
  .controller("mailEditorController", ["mailTemplateService", function (mailTemplateService) {
    let ctrl = this;
    ctrl.current = mailTemplateService;
  }]);
})();