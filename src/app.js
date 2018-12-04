
angular.module('app', ['ui.router']);
require('common/router');

angular.module('app')
  .controller('homeCtrl', ['$scope', function ($scope) {
    layui.config({
      base: '/extendsModule/'
    }).extend({
      testAlert: 'testAlert',
    });
    $scope.text = 'asdkjahsdkjhasdjhakdjhasd';
    //一般直接写在一个js文件中
    layui.use(['layer', 'form', 'testAlert'], function () {

      var layer = layui.layer
        , form = layui.form
        , testAlert = layui.testAlert;

      layer.msg('Hello World');
      // testAlert.hello()

    });


  }]);





