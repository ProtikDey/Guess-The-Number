'use strict';

//display the textcontent of the 'between' class of the html
//console.log(document.querySelector('.between').textContent);

//taking the value of input box
//document.querySelector('.guess').value;


function clickEvent(){

    const input = Number(document.querySelector('.guess').value) ;

    if(!input){
        document.querySelector('.message').textContent = 'Not a number!!!! Input a number';
    }
}


document.querySelector('.check').addEventListener('click', clickEvent());