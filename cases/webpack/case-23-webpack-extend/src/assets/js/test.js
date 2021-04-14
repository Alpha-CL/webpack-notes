// class A {
//
//     prop1 = 1;
//
//     constructor(b = 2) {
//
//         this.prop2 = b;
//     }
//
//     method1() {
//
//         console.log('method-1');
//     }
//
//     method2 = (...args) => {
//
//         console.log('method-2', args);
//     };
//
//     static method3() {
//
//         console.log('method-3', this);
//     }
//
//     static method4() {
//
//         console.log('method-4', this);
//     }
// }
//
//
// function B() {
//
//     return new Promise(resolve => {
//
//         setTimeout(() => {
//
//             resolve(3);
//         });
//     });
// }
//
//
// async function C() {
//
//     const b = await B(),
//         c = await B();
//
//     return b + c;
// }
//
// B().then(data => {
//
//     console.log(data);
// });
//



