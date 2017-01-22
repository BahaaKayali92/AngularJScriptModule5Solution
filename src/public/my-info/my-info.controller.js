(function () {
"use strict";
angular.module('public')
.controller('InfoController', InfoController);
InfoController.$inject = ['item','user'];
function InfoController(item,user) {
  var reg = this;
reg.item=item;
reg.user=user;
console.log(reg);

  
  };


})();
