// function addTea() {
//     // DOM API
//     var newTr = document.createElement('tr');

//     var newTdId = document.createElement('td');
//     var textNodeId = document.createTextNode('16');
//     newTdId.appendChild(textNodeId);
//     newTr.appendChild(newTdId);

//     var newTdName = document.createElement('td');
//     var textNodeName = document.createTextNode('Rooibos');
//     newTdName.appendChild(textNodeName);
//     newTr.appendChild(newTdName);


//     var newTdPhoto = document.createElement('td');
//     var photo = document.createElement('img');
//     photo.setAttribute('src', 'https://www.pickwick.nl/siteassets/thee/_new/packshots/rooibos/original-rooibos2x.png?preset=infocolumn-mobile');
//     newTdPhoto.appendChild(photo);
//     newTr.appendChild(newTdPhoto);

//     document.querySelector('table tbody').appendChild(newTr);
// }

function addTea() {
    // DOM API
    var newTr = $('<tr>');

    $('<td>').text('16').appendTo(newTr);
    $('<td>').text('Rooibos 8').appendTo(newTr);

    var url = 'https://www.pickwick.nl/siteassets/thee/_new/packshots/rooibos/original-rooibos2x.png?preset=infocolumn-mobile';
    var newTdPhoto = $('<td>');
    $('<img>').attr('src', url).appendTo(newTdPhoto);
    newTdPhoto.appendTo(newTr);

    $('table tbody').append(newTr);
}

// Sneak preview: Angular
// class HomeComponent {
//     teas = [...];

//     addTea() {
//         this.teas.push({
//             id: 16,
//             name: 'Rooibos',
//             photo: 'hugeurl'
//         });
//     }
// }



// karma + jasmine
// mocha + chai + sinon
// jest

// "the assembly of the web"    MVC

// frameworks

// Angular
// Vue
// React
// Aurelia
// LitElement