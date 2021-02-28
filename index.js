let numerosCard = [ "A",1,2,3,4,5,6,7,8,9,10,"J","Q","K"];
let numerosCardIndex = Math.floor(Math.random()*numerosCard.length);
let carValue = document.getElementById("numero")

let num = document.createTextNode("10");
let numRamdom = document.createTextNode(  numerosCard[numerosCardIndex]  ) ;
carValue.appendChild(numRamdom);



let pintas = [ ]




