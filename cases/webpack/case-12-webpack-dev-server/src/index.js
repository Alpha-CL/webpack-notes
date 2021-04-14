console.log('hello word');

const url = `https://deeveloper.duyi.com/api/student/findAll?appkey=demo13_1545210570249`;

fetch(url).then(resp => resp.json()).then(resp => {

    console.log(resp);
});