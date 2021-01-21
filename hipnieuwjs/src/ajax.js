// Asynchronous JavaScript And XML
// Asynchronous JavaScript And JSON
// AJAJ

// AJAX:
// - voetbalteam
// - schoonmaakmiddel
// - brandblusser
// - griekse held
// - die dude uit Deadpool  "Francis"

// gebruiker => browser => HTTP-requests => server

// gebruiker (button click) => javascript => HTTP-requests => server

// 2005: GMail [opstellen] blabla [send]

function getData() {
    fetch('src/bestand.json').then(x => x.json()).then(data => {
        console.log('data:', data);
    });
}
