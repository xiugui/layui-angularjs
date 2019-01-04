require.loadCss({url:'src/modules/demo/index.css'});
module.exports = {
  url:'/demo',
  template:__inline('./index.html'),
  controller:['$scope','$timeout', function ($scope,$timeout) {
    $scope.clickDemo = function () {
      alert(11111)
    }

    $scope.box = {
      write:true,
      read:true,
      dai:false,
      switch:true,
    }


    $scope.changeBox = function(key){
      console.log($scope.box);
    }

    layui.use('form', function(){
      var form = layui.form;


      // $timeout(function () {
      //   form.render();
      // },0)
      form.on('checkbox',function (data) {
        console.log(data)
        angular.element(data.elem).triggerHandler('change');
      })
      form.on('switch',function (data) {
        console.log(data)
        angular.element(data.elem).triggerHandler('change');
      })
      //监听提交
      form.on('submit(formDemo)', function(data){
        layer.msg(JSON.stringify(data.field));
        return false;
      });
    });
  }]
}
