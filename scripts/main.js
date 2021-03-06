"use strict";

var gratisfaction = angular.module('grLoyalty', []);
gratisfaction.controller('grController', function ($scope) {
  $scope.activeMenu = 1;
  $scope.activeClaimCard = null;
  $scope.loyaltyViews = 1;
  $scope.hamMenu = false;

  $scope.toggleMenu = function (e) {
    $scope.hamMenu = !$scope.hamMenu;
  };

  var mySwiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
});
//# sourceMappingURL=main.js.map
