require.loadCss({url:'src/modules/demo/index.css'});
module.exports = {
  url:'/demo',
  template:__inline('./index.html'),
  controller:['$scope',function ($scope) {
    $scope.clickDemo = function () {
      alert(11111)
    }
  }]
}
