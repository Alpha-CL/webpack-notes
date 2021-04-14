/**
 * path                 // node 内置模块，用于处理路径
 *
 * path.resolve();      // 将多段路径合并为一个绝对路径
 */

let path = require('path');

module.exports = {

    mode: "development",

    /**
     * entry: 'des.js' === entry: { main: 'des.js' }
     *
     *
     * 设置入口模块，获取入口模块的依赖关系，从而合并所有模块的代码
     */

    entry: {

        main: './src/index.js',     // 设置入口模块路径( 默认 ./src/index.js ),
                                    // key: moduleName; value: modulePath;


        // a: './src/a.js'                          // 合并单个入口模块的所有依赖模块

        a: ['./src/a.js', './src/index.js']         // 一次性合并多个入口模块的所有依赖模块


    },

    output: {

        path: path.resolve(__dirname, 'test'),      // 必须是绝对路径，表示设置导出资源
                                                    // 默认 './dist/main.js'


        /**
         * filename: 'des.js';      // 静态设置
         *
         *
         * 用于设置相应 chunk 中 '合并js文件' 的路径名规则
         */

        /**
         * filename: '[rule].js'    // 动态规则设置
         *
         *
         * [name]                   // 根据 chunkName 动态获取 name
         *
         *
         * [hash:number]            // 设置 hash 会导致 最终hash 也会改变( 不利于浏览器缓存判断是否重新请求文件 )
         *                          // hash: 将一个任意长度的字符串转换为一个固定长度的字符串，并且可以保证原始内容不变
         *                          // 用于浏览器请求文件自动缓存后，判断是否重新获取该文件( 利用 hash 判断js文件内容是否更改 )
         *
         * @number: 设置截取 hash 的前 number 位
         *
         *
         * [chunkhash:number]       // 设置 chunkhash 不会影响最终 hash( 利于浏览器缓存判断是否重新请求文件 )
         *
         *
         * [id]                     // chunkId( 不建议使用，因为生产环境 chunkId 为 chunkName，生产环境为 数字 )
         *
         *
         * eg: filename: '[name]-[hash].js'
         */

        // filename: "script/test.js"               // 静态设置: 若有多个导入文件，则导出会冲突
        filename: "[name]-[hash:5].js"              // 根据 chunk 名称动态替换
    }
};





