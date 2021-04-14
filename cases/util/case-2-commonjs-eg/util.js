function sortRandom(arr) {

    return arr.sort((a, b) => {

        return Math.random() - 0.5;
    });
}


module.exports = {

    sortRandom,
};



