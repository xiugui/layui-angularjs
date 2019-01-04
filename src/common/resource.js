angular
  .module('app')
  .constant('configHost','http://182.92.3.98:4587')
  .constant('TIMEOUT',300000)
  .factory('Gift', ['$resource', 'configHost', 'TIMEOUT', function ($resource, configHost, TIMEOUT) {
    return $resource(configHost + '/dashboard/lsauth/login/:id', { id: '@id' }, {
      login: {//登录
        method: 'post',
        timeout: TIMEOUT
      },
      register: {//注册
        url: configHost + '/dashboard/lsauth/register',
        method: 'post',
        timeout: TIMEOUT,
      },
      info: {//info
        url: configHost + '/dashboard/lsauth/info',
        method: 'post',
        timeout: TIMEOUT,
      },
      logout: {//logout
        url: configHost + '/dashboard/lsauth/logout',
        method: 'post',
        timeout: TIMEOUT,
      },

    });
  }])
