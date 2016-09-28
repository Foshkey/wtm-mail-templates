(function () {
  angular.module("mailApp")
  .component("mailEditor", {
    templateUrl: "app/editor/mailEditor.component.html",
    controller: "mailEditorController"
  })
  .controller("mailEditorController", ["mailSelectorService", function (mailSelectorService) {
    let ctrl = this;
    ctrl.current = mailSelectorService.currentTemplate;
  }]);
})();