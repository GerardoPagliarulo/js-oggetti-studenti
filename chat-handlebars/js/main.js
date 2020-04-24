$(document).ready(function () {
    // References
    var newMessage = $('input');
    var displayChat = $('.chat');
    
    
    var source = $('#message-template').html();

    var template = Handlebars.compile(source);

    // Messaggi presenti al caricamento della pagina
    var initialMessage = [
        {
            text: 'Ciao!',
            time: exactTime(),
            user: 'sent'
        },
        {
            text: 'Ehi! Ciao!',
            time: exactTime(),
            user: 'received'
        }
    ];

    for (var i = 0; i < initialMessage.length; i++) {
        var item = initialMessage[i];

        var defaultMessage = template(item);

        displayChat.append(defaultMessage);
    }

    // Invio messaggi con bottone
    $('body').on('click', 'button' , function () {
        var textMessage = newMessage.val().trim();
        //console.log(textMessage);

        if (textMessage !== '') {
            var data = {
                text: textMessage,
                time: exactTime(),
                user: 'sent'
            };

            var messageNow = template(data);

            displayChat.append(messageNow);

            // Messaggio di risposta automatico dopo in secondo
            setTimeout (reply, 1000);
        }
    });


    /***** FUNZIONI *****/
    // Funzione: Orario
    function exactTime() {
        var data = new Date();
        var ora = addZero( data.getHours() );
        var minuti = addZero( data.getMinutes() );
        return orario = ora + ':' + minuti;
    }

    // Funzione: Aggiungere zero iniziale a numeri inferiori a 10
    function addZero(numero) {
        if(numero < 10) {
            numero = '0' + numero;
        }
        return numero;
    }

    // Funzione: Messaggio di risposta
    function reply() {
        var data = {
            text: 'Ok.',
            time: exactTime(),
            user: 'received'
        };

        var messageNow = template(data);

        displayChat.append(messageNow);
    }

}); // <-- End doc ready
