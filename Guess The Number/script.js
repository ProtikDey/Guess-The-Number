'use strict';

const randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
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
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
    }

    //check wheather the input is too high
    else if(input > randomNumber){
        //if score is greater than 1, then score--
        if(score > 1){
            document.querySelector('.message').textContent = 'Too high!!!';
            score -- ;
            document.querySelector('.score').textContent = score;

        }
        //if score is 0 then fix the score at 0 and game lost
        else{
            document.querySelector('.message').textContent = 'Game Lost!!!';
            document.querySelector('.score').textContent = 0;
        }
    }

    else {
        //if score is greater than 1, then score--
        if(score > 1){
            document.querySelector('.message').textContent = 'Too high!!!';
            score -- ;
            document.querySelector('.score').textContent = score;
    
        }
        //if score is 0 then fix the score at 0 and game lost
        else{
            document.querySelector('.message').textContent = 'Game Lost!!!';
            document.querySelector('.score').textContent = 0;
        }
    }

});