import {Person, SuperPerson} from './person';
const bob = new Person('Bob');
console.log(bob.speak('My name is Bob!'))

const superSarah = new SuperPerson('Sarah', 'Tip to real quiet');
superSarah.speak('Hi I\'m super Sarah');
superSarah.saySuperPower();
// class Person {
//     constructor(name){
//         this.name=name
//     }
//     speak(text){
//         return `${this.name} Says: ${text}`
//     }
// }


// import elementToBody from './add_to_dom';

// elementToBody('h1', 'Something Different');

// elementToBody('p', 'Here is a second element added to Body');
// $('body').append('<h1>I came from jQuery!</h1>');

// const header = document.createElement('h1');
// header.innerText = 'This was dynamically created';
// document.body.appendChild(header);
