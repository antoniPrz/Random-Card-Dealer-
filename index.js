let numerosCard = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let numerosCardIndex = Math.floor(Math.random() * numerosCard.length);
let cardValue = document.getElementById("numero");

let num = document.createTextNode("10");
let numRamdom = document.createTextNode(numerosCard[numerosCardIndex]);
cardValue.appendChild(numRamdom);

let pintas = ["♦", "♥", "♠", "♣"];
let pintaIndx = Math.floor(Math.random() * pintas.length);

let pinta1 = document.getElementById("pinta-1");
let pinta2 = document.getElementById("pinta-2");

let pintaRandom = pintas[pintaIndx];

function pintaR() {
  if (pintaRandom == "♦" || pintaRandom == "♥") {
    pintaRandom = document.getElementById("pinta-1").style.color = "red";
    pintaRandom = document.getElementById("pinta-2").style.color = "red";
  } else {
    pintaRandom = document.getElementById("pinta-1").style.color = "black";
    pintaRandom = document.getElementById("pinta-2").style.color = "black";
  }

  pintaRandom = pintas[pintaIndx];

  return pintaRandom;
}

pinta1.append(pintaR());
pinta2.append(pintas[pintaIndx]);
