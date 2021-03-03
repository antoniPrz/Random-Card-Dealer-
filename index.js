let numerosCard = [ "A",1,2,3,4,5,6,7,8,9,10,"J","Q","K"];
let numerosCardIndex = Math.floor(Math.random()*numerosCard.length);
let cardValue = document.getElementById("numero")

let num = document.createTextNode("10");
let numRamdom = document.createTextNode(  numerosCard[numerosCardIndex]  ) ;
cardValue.appendChild(numRamdom);



let pintas = ['♦','♥','♠','♣'];
let pintaIndx = Math.floor(Math.random()*pintas.length);

let pinta1 = document.getElementById("pinta-1") 
let pinta2 = document.getElementById("pinta-2") 



let pintaRandom = document.createTextNode(pintas[pintaIndx]);
let pintaRandom2 = document.createTextNode(pintas[pintaIndx]);

// pintaRandom = pintaRandom.style.color="red";

pinta1.appendChild(pintaRandom);
pinta2.appendChild(pintaRandom2);





