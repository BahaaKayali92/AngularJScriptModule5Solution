(function () {

angular.module('SignUpFormApp')
.service('RegistrationService', RegistrationService);
function RegistrationService() {
  var service = this;
  // service.user={};
  // service.data={};
service.getMenuItem = function(){
  console.log(service.data);
  return service.data;
}
service.getUser = function(){
  console.log(service.user);
  return service.user;
}
}

})();
