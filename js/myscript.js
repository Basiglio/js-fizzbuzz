// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


// CREO UN CICLO FOR
var submit = document.getElementById("submit");
 submit.addEventListener('click',
 function () {
   for (var i = 1; i <= 100; i++) {
     // FACCIO STAMPARE I NUMERI DA 1 A 100
     if(i % 3 == 0 && i % 5 == 0) {
       // SE I(IL NUMERO) è MULTIPLO DI 3 ED ANCHE MULTIPLO DI 5 STAMPA FIZZBUZZ
      document.getElementById('elenco_numeri').innerHTML += "<li class=red>" + "FizzBuzz" + "</li>";
    } else if (i % 3 == 0) {
      // ALTRIMENTI SE IL NUMERO è SOLO MULTIPLO DI 3 STAMPA BUZZ
      document.getElementById('elenco_numeri').innerHTML += "<li class=green>" + "Fizz" + "</li>";
    } else if (i % 5 == 0) {
      // ALTRIMENTI SE IL NUMERO è SOLO MULTIPLO DI 5 STAMPA FIZZ
      document.getElementById('elenco_numeri').innerHTML += "<li class=blue>" + "Buzz" + "</li>";
    } else {
      // ALTRIMENTI STAMPA IL NUMERO
      document.getElementById('elenco_numeri').innerHTML += "<li>" + (i) + "</li>";
    }
  }
});
