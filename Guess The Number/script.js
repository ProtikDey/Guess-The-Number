'use strict';

const randomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = randomNumber;


document.querySelector('.check').addEventListener('click', function(){

    //take input from input box
    const input = Number(document.querySelector('.guess').value) ;
    
    //check wheather number or not
    if(!input){
        document.querySelector('.message').textContent = 'Not a number!!!! Input a number';
    }

    //check wheather the input is correct
    else if(input == randomNumber){
        document.querySelector('.message').textContent = 'Correct number!!!';
    }

    //check wheather the input is too high
    else if(input > randomNumber){
        document.querySelector('.message').textContent = 'Too high!!!';
    }

    else {
        document.querySelector('.message').textContent = 'Too low!!!';
    }

});