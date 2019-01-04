require.loadCss({url:'src/modules/login/index.css'});
module.exports = {
  url:'/login',
  template:__inline('./index.html'),
  controller:['$scope','$timeout', function ($scope,$timeout) {


  }]
}
