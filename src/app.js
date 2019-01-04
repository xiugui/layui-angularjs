
angular.module('app', ['ui.router','ngResource']);
require('common/router');
require('common/resource');

angular.module('app')
  .factory('httpInterceptor', ['$q', '$rootScope','$timeout', '$location', function ($q, $rootScope, $timeout, $location) {
    var httpInterceptor = {
      'request': function (config) {

        // config.headers['authorized'] = authorized || '';
        return config;
      },
      'responseError': function (response) {
        if (response.status == 401) {
          // $timeout(function () {
          //   // $state.go('login',null,{location:"replace"});
          //   // history.back(0);
          //   $location.path('/login');
          //
          // }, 1500)
          return $q.reject(response);
        } else if (response.status == -1) {

        }else if (response.status == 404) {

        }
        return $q.reject(response);
      },
      'response': function (response) {
        if (response.config.url.indexOf('.html') < 0) {
          var code = response.data.result_code || response.data.resultCode;
          if (code != 0) {
            var errMsg = response.data.errMsg || response.data.err_msg || response.data.error_msg || response.data.errorMsg;
            response.data.errorMsg = errMsg;
            return $q.reject(response);
          }
        }
        return $q.resolve(response);
      }
    }
    return httpInterceptor;
  }
  ])
  .config(['$compileProvider', '$httpProvider', function ($compileProvider,  $httpProvider) {
    // Initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};
    }
    // Enables Request.IsAjaxRequest() in ASP.NET MVC
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    //禁用IE对ajax的缓存
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';

    $httpProvider.interceptors.push('httpInterceptor');
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);
  }])
  .controller('homeCtrl', ['$scope', function ($scope) {
    layui.config({
      base: '/extendsModule/'
    }).extend({
      testAlert: 'testAlert',
    });

    //一般直接写在一个js文件中
    layui.use(['layer', 'form', 'testAlert','element'], function () {

      var layer = layui.layer
        , form = layui.form
        , testAlert = layui.testAlert;

      // layer.msg('Hello World');
      // testAlert.hello()

    });


  }]);





