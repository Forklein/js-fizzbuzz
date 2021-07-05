console.log('Ciao Peppe')


//! TRACK

/*Scrivi un programma che stampi i numeri da 1 a 100.
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

var multiple3;
var multiple5;
var doublemultiple;

for(var i = 1; i < 101; i++){
    if(i % 3 === 0 && i % 5 === 0){
        doublemultiple = 'FizzBuzz';
        console.log(doublemultiple);
    }else if(i % 3 === 0){
        multiple3 = 'Fizz';
        console.log(multiple3);
    }else if(i % 5 === 0){
        multiple5 = 'Buzz';
        console.log(multiple5);
    }
    else{
        console.log(i);
    }
}















