module.exports = class FileListPlugin {

    constructor(filename = "filelist.txt") {

        this.filename = filename;
    }

    apply(compiler) {

        compiler.hooks.emit.tap('FileListPlugin', compilation => {

            // console.log(compilation);               // 包含很多运行中的信息

            let filelist = [],
                content;

            for (const key in compilation.assets) {

                content = `[${key}] size: ${compilation.assets[key].size() / 1000}KB`;

                filelist.push(content);
            }

            const str = filelist.join('\n');

            compilation.assets[this.filename] = {

                source() {

                    return str;
                },

                size() {

                    return str.length;
                }
            };
        });
    }
};