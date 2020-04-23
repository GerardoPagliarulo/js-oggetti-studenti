$(document).ready(function () {
    // References
    var newMessage = $('input');
    var buttonMessage = $('button');
    var displayChat = $('.chat');
    var time = exactTime();
    
    var source = $('#message-template').html();

    var template = Handlebars.compile(source);

    buttonMessage.click(function () {
        var textMessage = newMessage.val().trim();
        //console.log(textMessage);

        if (textMessage !== '') {
            var data = {
                text: textMessage,
                time: time,
                user: 'sent'
            };

            var messageNow = template(data);

            displayChat.append(messageNow);

            setTimeout (reply, 1000);

            scrollChat();
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
            time: time,
            user: 'received'
        };

        var messageNow = template(data);

        displayChat.append(messageNow);
    }

}); // <-- End doc ready
