var file = document.getElementById('file');
console.log(file);


file.addEventListener('change', ()=>{

    console.log('Alterado');
    
})

function upload(){

    let promisses = [];

    let ajax = new XMLHttpRequest();

    ajax.open('POST', '/asked', true);

    ajax.onload = event => {};

    var formData = new FormData();

    formData.append('title', 'title');

    var alisson = 'alisson'

    var title = 'title';

    ajax.send(title);


}

upload();