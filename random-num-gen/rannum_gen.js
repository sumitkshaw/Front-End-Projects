// RANDOM NUMBER GENERATOR

const myButton = document.getElementById('myButton');
const myLabel = document.getElementById('myLabel');
const min=1;
const max=100;
let randomNum=0;

myButton.onclick = function(){
    randomNum= Math.floor(Math.random() * (max-min)) + min;
    myLabel.textContent = randomNum;
}
