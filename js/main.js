/**
 * Griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
 * Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
 * Il numero ottenuto appare al centro del quadrato
 * DevTools console e network sono nostri amici :wink:
 */

$(document).ready(function () {
    //Ref
    var randomNumberAPI = 'https://flynn.boolean.careers/exercises/api/random/int';
    var numBoxes = $('.box');

    numBoxes.click(function() {
        var self = $(this);
        $.ajax({
            url: randomNumberAPI,
            method: 'GET',
            success: function(data) {
                var number = data.response;
                self.text(number);

                if(number <= 5) {
                    self.addClass('background-yellow');
                    self.removeClass('background-green');
                } else {
                    self.addClass('background-green');
                    self.removeClass('background-yellow');
                }
            },
            error: function() {
                console.log('Errore chiamata API')
            }
        });
    })
});