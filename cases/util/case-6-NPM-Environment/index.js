// console.log(global);                             // node 环境中的全局变量，类似于浏览器环境中的 window

// console.log(global.process);                     // 全局进程

// console.log(global.process.env);                 // 全局变量

console.log(process.env.NODE_ENV);

let env;

if (process.env.NODE_ENV === 'development') {                    // 判断是否是开发环境

    env = 'development environment';

} else if (process.env.NODE_ENV === 'production') {             // 判断是否是生产环境

    env = 'production environment';

} else if (process.env.NODE_ENV === 'test') {                   // 判断是否是测试环境

    env = 'test environment';

} else {

    throw new Error('No environment variables');
}








