require.loadCss({url:'src/modules/register/index.css'});
module.exports = {
  url:'/register',
  template:__inline('./index.html'),
  controller:['$scope','$timeout','Gift', function ($scope,$timeout,Gift) {

    layui.use('form', function(){
      var form = layui.form;

      //监听提交
      form.on('submit(formDemo)', function(data){
        console.log(data.field);
        Gift.register(data.field).$promise.then(function (res) {

        },function (err) {
          console.log(err)
        })
        return false;
      });
    });

  }]
}
