let loaderUtil = require('loader-utils');

function loader(buffer) {

    const bytLength = buffer.byteLength;

    let {limit = 1000, filename = "[contetnthash].[ext]"} = loaderUtil.getOptions(this),
        content;               // 绑定 this

    if (bytLength >= limit) {

        content = getFilePath.call(this, buffer, filename);

    } else {

        // content = getBase64(buffer);
    }

    return `module.exports = \`${content}\``;
}

/**
 * .raw = true;
 *
 * 当设置此属性后，执行该函数时，传输的是 原始数据( 二进制 )
 */

loader.raw = true;

module.exports = loader;

function getBase64(buffer) {

    return 'data:image/jpg;base64,' + buffer.toString("base64");
}

function getFilePath(buffer, name) {

    const filename = loaderUtil.interpolateName(this, name, {

        content: buffer
    });

    this.emitFile(filename, buffer);

    return filename;
}