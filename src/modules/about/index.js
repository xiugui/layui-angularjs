require.loadCss({url:'src/modules/about/index.css'});
module.exports = {
  url:'/about',
  template:__inline('./index.html'),
  controller:['$scope','$timeout', function ($scope,$timeout) {


  }]
}
