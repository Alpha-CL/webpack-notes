const axios = require('axios');
const cheerio = require('cheerio');

async function getMoviesHtml() {

    const resp = await axios('https://movie.douban.com/chart');

    return resp.data;
}

async function getMovieData() {

    const html = await getMoviesHtml(),
        $ = cheerio.load(html),
        trs = $('tr.item');

    let movie = [],
        tr = null;

    for (let i = 0; i < trs.length; i++) {

        tr = trs[i];

        movie.push(getMovie($(tr)));
    }

    return movie;
}


function getMovie(tr) {

    let name,
        imgSrc,
        detail;

    name = tr.find('div.pl2 a').text();
    name = name.replace(/\s/g, '');
    name = name.split('/')[0];

    imgSrc = tr.find('a.nbg img').attr('src');

    detail = tr.find('div.pl2 p.pl').text();

    // console.log(name);
    // console.log(imgSrc);
    // console.log(detail);

    return {
        name,
        imgSrc,
        detail
    }
}

// getMovieData();

module.exports = getMovieData;