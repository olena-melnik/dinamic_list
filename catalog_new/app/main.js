window.onscroll = function (e) {
    if (window.pageYOffset + window.innerHeight >= (document.body.clientHeight - 10)) {
        var list = document.querySelector('.list');
        var lastElement = list.lastElementChild;
        var a = parseInt(lastElement.dataset.id);
        list.parentElement.replaceChild(render(store.slice(a,a+2)), list);
    }
}

function createItem(id, autor, title, years, image, text) {
    var container = document.createElement('div');
    container.setAttribute('class', 'elem');
    container.setAttribute('data-id', id);

    var imag = document.createElement('img');
    imag.src = image;

    var titl = document.createElement('h3');
    titl.innerHTML = title;
    var txt = document.createElement('p');
    txt.classList.add('name');
    txt.innerHTML = autor;

    var ye = document.createElement('p');
    ye.classList.add('year');
    ye.innerHTML = years;

    var zmist = document.createElement('p');
    zmist.classList.add('contents');
    zmist.innerHTML = text;


    container.appendChild(imag);
    container.appendChild(titl);
    container.appendChild(txt);
    container.appendChild(ye);
    container.appendChild(zmist);

    return container;
}

function render(list) {
    let container = document.querySelector('.list');
    list.forEach(function (elem) {
        container.appendChild(createItem(elem.id, elem.autor, elem.title, elem.years, elem.image, elem.text));
    });
    return container;
}




