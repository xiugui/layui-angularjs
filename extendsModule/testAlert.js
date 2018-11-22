layui.define(function (exports) {
    var obj = {
        hello:function (str) {
            alert('hello'+(str || 'sb'))
        }
    };

    exports('testAlert',obj);
});