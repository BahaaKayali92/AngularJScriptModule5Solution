(function () {

angular.module('SignUpFormApp')
.controller('RegistrationController', RegistrationController);
RegistrationController.$inject=['$http','RegistrationService']
function RegistrationController($http,RegistrationService) {
  var reg = this;
reg.error = null;
  reg.submit = function () {
     $http.get(" https://bahaak-course5.herokuapp.com/menu_items/"+reg.user.shortname+".json").then(function (response) {
      reg.error = false;
      RegistrationService.user=reg.user;
      RegistrationService.data=response.data;
      console.log(reg);
    },function myError(response) {
       reg.error = true;
       RegistrationService.user=null;
      RegistrationService.data=null;
            console.log(reg);
    });
  };
}

})();
