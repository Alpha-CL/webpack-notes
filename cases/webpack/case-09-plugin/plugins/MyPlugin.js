module.exports = class MyPlugin {

    apply(compiler) {

        console.log('MyPlugin executed');

        compiler.hooks.done.tap('MyPlugin-don', function (compilation) {

            console.log('Compile completed');
        });
    }
};