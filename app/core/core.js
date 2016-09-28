(function () {
  angular.module("mailApp", ["eveCrest"])
  .controller("coreController", function () {
    this.mailType = "mail";
    this.recipientType = "recipient";
  });
})();