console.log('hello world');

const png = require('./assets/webpack2.png').default,
    domPng = document.createElement('img');

console.log(png);

domPng.src = png;

document.body.appendChild(domPng);