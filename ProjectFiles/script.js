'use strict';
/*
document.querySelector(".message").textContent="Correct Number";

document.querySelector(".number").textContent="?";
document.querySelector(".score").textContent="10";

document.querySelector(".guess").value=20;
*/
const secretNumber = Math.trunc(Math.random()*20+1);
document.querySelector(".number").textContent=secretNumber;
document.querySelector(".check").addEventListener
('click', function(){
    const guess = Number(document.querySelector(".guess").value);
    if(!guess){
        document.querySelector(".message").textContent="No Number 😒";
    }
    else if(secretNumber===guess){
        document.querySelector(".message").textContent="Yaaa! Correct Number ❤️";
    }
    else if(secretNumber>guess){
        document.querySelector(".message").textContent="Guess is too Heigh";
    }
    else if(secretNumber<guess){
        document.querySelector(".message").textContent="Guess is too low";
    }
});