let getMovieData = require('./getMovieInfo'),
    fs = require('fs');

getMovieData().then(movies => {

    let json = JSON.stringify(movies);

    fs.writeFile('movie.json', json, function () {

        console.log('successful');
    });
});



