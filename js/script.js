console.log('Ciao Peppe')


//! TRACK

/*Scrivi un programma che stampi i numeri da 1 a 100.
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

var result = document.getElementById('result');
var listItem = '';


for (var i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
        listItem += '<li> FizzBuzz </li>';
    } else if (i % 3 === 0) {
        console.log('Fizz');
        listItem += '<li> Fizz </li>';
    } else if (i % 5 === 0) {
        console.log('Buzz');
        listItem += '<li> Buzz </li>';
    }
    else {
        console.log(i);
        listItem += `<li> ${i} </li>`;
    }
}

result.innerHTML = listItem;


















