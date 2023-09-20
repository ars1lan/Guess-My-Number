'use strict';
/*
document.querySelector(".message").textContent="Correct Number";

document.querySelector(".number").textContent="?";
document.querySelector(".score").textContent="10";

document.querySelector(".guess").value=20;
*/
let secretNumber = Math.trunc(Math.random()*20+1);
let score=20;

document.querySelector(".check").addEventListener
('click', function(){
    const guess = Number(document.querySelector(".guess").value);
    document.querySelector(".number").textContent='?';
    if(score>1){
        if(!guess){
            document.querySelector(".message").textContent="No Number 😒";
        }
        else if(secretNumber===guess){
            score++;
            document.querySelector(".message").textContent="Yaaa! Correct Number ❤️";
            document.querySelector(".number").textContent=secretNumber;
            document.querySelector("body").style.backgroundColor='#60b347';
            document.querySelector(".number").style.width='30rem';
        }
        else if(secretNumber>guess){
            document.querySelector(".message").textContent="Guess is too Low";
            score--;
        }
        else if(secretNumber<guess){
            document.querySelector(".message").textContent="Guess is too Heigh";
            score--;
        }
        document.querySelector(".score").textContent=score;
    }
    else{
        document.querySelector(".message").textContent="You Lost the Game 😒";
        document.querySelector(".score").textContent=0;
    }
});
document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random()*20+1);
    score=20;
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").style.width='15rem';
    document.querySelector("body").style.backgroundColor="#eee";
    document.querySelector(".message").textContent="start Guessing Number....";
    document.querySelector(".number").textContent='?';
});