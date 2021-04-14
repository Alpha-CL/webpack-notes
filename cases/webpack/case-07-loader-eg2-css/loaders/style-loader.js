module.exports = function (sourceCode) {

    return `let oStyle = document.createElement('style');
    oStyle.innerHTML = \`${sourceCode}\`;
    document.head.appendChild(oStyle);
    
    module.export = \`${sourceCode}\`;`;                // 设置后可以导出 css
};