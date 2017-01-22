(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }  
    })
    .state('signup', {
      url: '/signup',                                         
      templateUrl: 'src/signup/sign-up/sign-up.html',
      controller: 'RegistrationController',
      controllerAs: 'regCtrl',
      // resolve: {
      //   menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
      //     return MenuService.getMenuItems($stateParams.category);
      //   }]
      // }
    })
     .state('myinfo', {
      url: '/myinfo',                                         
      templateUrl: 'src/public/my-info/my-info.html',
      controller: 'InfoController',
      controllerAs: 'reg',
      resolve: {
        item: ['RegistrationService', function (RegistrationService) {
          return RegistrationService.getMenuItem();
        }],
        user: ['RegistrationService', function (RegistrationService) {
          return RegistrationService.getUser();
        }]
      }
    });
}
})();
