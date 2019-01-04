angular.module('app')
.config(['$stateProvider','$urlRouterProvider','$locationProvider', function ($stateProvider,$urlRouterProvider,$locationProvider) {
  // $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home',require('modules/home/index'))
    .state('home.child',{
      url:'/child',
      template:'<p>child</p><div ui-view></div>'
    })
    .state('home.child.demo',require('modules/demo/index'))
    .state('about',require('modules/about/index'))
    .state('contact',require('modules/contact/index'))
    .state('associate',require('modules/associate/index'))
    .state('login',require('modules/login/index'))
    .state('register',require('modules/register/index'))
}])
