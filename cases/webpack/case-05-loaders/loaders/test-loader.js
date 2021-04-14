// module.exports = function (sourceCode) {
//
//     return 'var a = 1';
// };


// module.exports = function (sourceCode) {
//
//     return sourceCode.replace(/let/g, 'const');
// };


let loaderUtils = require('loader-utils');

module.exports = function (sourceCode) {

    console.log('executed test-loader');

    const options = loaderUtils.getOptions(this),
        reg = new RegExp(options.changeVar,'g');

    return sourceCode.replace(reg, 'const')
};