module.exports = {

    mode: "development",
    devtool: "source-map",
    entry: {
        main: "./src/index.js",
    },
    output: {
        filename: "js/[name].[chunkhash:5].js",
        publicPath: "/"
    },

    module: {                                   // 根据模块配置，目前版本只有两个配置: rules, noParse

        /**
         * rules[ {rule_1}, {rule_2}, {rule_3} ...]
         *
         *
         * 模块匹配规则
         *
         * 匹配顺序: {rule_last}, {rule_last-1}, {rule_last-2} ...
         */

        rules: [

            /**
             * if (test: regex) { execute use{ loaders } };
             *
             *
             * 通过 test 匹配模块，若匹配到相应模块，则执行 use 中指定的 loader
             *
             *
             */

            {
                test: /index\.js$/,             // 用于匹配模块路径的正则表达式

                use: [                          // test 匹配成功后执行相应的 加载器

                    {                           // 每个加载器为一个对象

                        /**
                         * 可以配置多个 loader
                         *
                         * 当模块匹配成功，模块代码将被作为参数( 字符串 )传递给 loader 执行
                         */

                        loader: "./loaders/test-loader",        // 执行原理: require(loader.value);
                                                                // 必须是绝对路径，否则会在 node_modules 中查找

                        /**
                         * options{}
                         *
                         *
                         * 可配置自定义 要修改的参数
                         *
                         * 设置的参数，仅可以在 loader 运行中的 this 才可以获取( 也可以 loader-utils 工具便捷获取 )
                         */

                        options: {              // 改变参数也可以设置在 loader: './loaders/test-loader?changeVar=let'

                            changeVar: 'let'    // 自定义参数
                        }
                    }
                ]
            }
        ],

        /**
         * noParse
         *
         * 是否不解析某个模块
         */

        // noParse: [
        //
        // ]
    }
};