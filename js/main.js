/**
 * OGGETTI
 * 
 * Creare un oggetto che descriva uno studente.
 * Lo studente avrà  le seguenti proprietà: nome, cognome e età.
 * Stampare attraverso il for..in tutte le proprietà (chiavi e valori).
 */


$(document).ready(function () {
    var studente = {
        nome: 'Pinco',
        cognome: 'Pallino',
        èta: 55
    };

    for(var key in studente) {
        console.log(key + ': ' + studente[key]);
    }

}); // <-- End doc ready