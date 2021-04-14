function loader(buffer) {

    // console.log(buffer, buffer.byteLength);        // 传输的是 原始数据( 二进制 )

    let content = getBase64(buffer);

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

function getBase64(buffer) {

    return 'data:image/jpg;base64,' + buffer.toString("base64");
}







