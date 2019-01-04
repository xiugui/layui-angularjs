require.loadCss({url:'src/modules/home/index.css'});
module.exports = {
  url:'/home',
  template:__inline('./index.html'),
  controller:['$scope','$timeout', function ($scope,$timeout) {


  }]
}
