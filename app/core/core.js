(function () {
  angular.module("mailApp", [])
  .controller("coreController", function () {
    this.mailType = "mail";
    this.recipientType = "recipient";
  });
})();