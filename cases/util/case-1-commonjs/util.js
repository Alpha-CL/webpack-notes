const name = 'alpha',
    age = 18,
    gender = 'male';


let count = 0;

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// function getNumber() {
//
//     return count++;
// }
//
//
// // console.log(getNumber());
// // console.log(getNumber());
// // console.log(getNumber());
// // console.log(getNumber());
//
//
// exports.ct = gender;            // 单个属性或方法导出
//
// exports.res = {                 // 多个属性或方法导出
//     getNumber,
//     name,
// };
//
//
// exports.xx = [
//
//
// ];


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


console.log(module.exports === exports);            // true

module.exports = {                                  // 修改 module.exports 为新的对象地址

    getNumber() {

        return count++;
    },

    abc: 123
};


/**
 * 因在上面已经修改 module.exports 中存储的地址
 * 内部后续声明的 exports 无法指向已执行代码时改变的地址
 *
 * 因最终返回 module.exports 地址已更改，所以无法返回 exports 所对应原 module.exports 地址中的属性和方法
 */

exports.bcd = 234;                                  // undefined

console.log(module.exports === exports);            // false


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//