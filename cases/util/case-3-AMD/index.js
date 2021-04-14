console.log('入口文件执行');

define(['b', 'a'], function (b, a) {                // 又几个模块就响应的几个参数

    // 当前模块执行代码

    console.log('b 模块返回结果: ', b);
    console.log('a 模块返回结果: ', a);
});