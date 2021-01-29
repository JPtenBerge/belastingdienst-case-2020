function addTea() {
    // read form values
    let newTea = {
        flavor: document.querySelector('#input-flavor').value,
        photo: document.querySelector('#input-photo').value
    };

    var newTr = document.createElement('tr');

    var newTdId = document.createElement('td');
    var textNodeId = document.createTextNode('16');
    newTdId.appendChild(textNodeId);
    newTr.appendChild(newTdId);

    var newTdName = document.createElement('td');
    var textNodeName = document.createTextNode(newTea.flavor);
    newTdName.appendChild(textNodeName);
    newTr.appendChild(newTdName);


    var newTdPhoto = document.createElement('td');
    var photo = document.createElement('img');
    photo.setAttribute('src', newTea.photo);
    newTdPhoto.appendChild(photo);
    newTr.appendChild(newTdPhoto);

    document.querySelector('table tbody').appendChild(newTr);
}

document.querySelector('#tea-form').addEventListener('submit', event => {
    event.preventDefault();
    event.stopPropagation();
    addTea();
});