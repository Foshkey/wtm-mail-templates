(function () {
  angular.module("eveCrest", [])
  .config(["$locationProvider", function ($locationProvider) {
    $locationProvider.html5Mode(true);
  }]);
})();