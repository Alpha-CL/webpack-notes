let jpgSrc = require('./assets/webpack1.jpg'),
    pngSrc = require('./assets/webpack2.png'),
    png = document.createElement('img'),
    jpg = document.createElement('img');

png.src = pngSrc;
jpg.src = jpgSrc;

document.body.appendChild(jpg);
document.body.appendChild(png);