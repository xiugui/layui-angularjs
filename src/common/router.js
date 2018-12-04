angular.module('app')
.config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider.state('home',{
    url:'/home',
    template:'<p>嵌套</p><div ui-view></div>'
  })
    .state('home.child',{
      url:'/child',
      template:'<p>child</p><div ui-view></div>'
    })
    .state('home.child.demo',require('modules/demo/index'))
}])
