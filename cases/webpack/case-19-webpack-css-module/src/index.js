import style1 from "./assets/style1.css";
import style2 from "./assets/style2.css";


console.log(style1);

// css-loader 处理后
//
//
// [Array(3), locals: {…}, toString: ƒ, i: ƒ]
//
// 0: (3) ["./src/assets/style1.css", "._1TyUMnubgEBLCDM5y3ayYM {↵    color: red;↵}↵↵._2zx-GIxJrLp9GYr2vZuLcC {↵    color: green;↵}", ""]
//
// i: ƒ (modules, mediaQuery, dedupe)
//
// locals:
//     c1: "_1TyUMnubgEBLCDM5y3ayYM"
//     c2: "_2zx-GIxJrLp9GYr2vZuLcC"
//
// __proto__: Object
// toString: ƒ toString()
// length: 1
// __proto__: Array(0)

// style-loader 处理后 仅返回 对应关系对象
//
// {c1: "_1TyUMnubgEBLCDM5y3ayYM", c2: "_2zx-GIxJrLp9GYr2vZuLcC"}

const dv = document.querySelector('#dv');

dv.className = style2.c1;