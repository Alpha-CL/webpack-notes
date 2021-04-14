let loaderUtil = require('loader-utils');

function loader(buffer) {

    // console.log(buffer, buffer.byteLength);        // 传输的是 原始数据( 二进制 )

    let content = getFilePath.call(this, buffer);               // 绑定 this

    console.log(content);

    return `module.exports = \`${content}\``;
}

/**
 * .raw = true;
 *
 * 当设置此属性后，执行该函数时，传输的是 原始数据( 二进制 )
 */

loader.raw = true;

module.exports = loader;

function getFilePath(buffer) {

    const filename =  loaderUtil.interpolateName(this, "[contenthash:5].[ext]", {

        content: buffer
    });

    this.emitFile(filename, buffer);

    return filename;
}




