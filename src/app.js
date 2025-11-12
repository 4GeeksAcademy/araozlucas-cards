import "bootstrap";
import "./style.css";

let palos = ['heart','spade','club','diamond'];
let numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

function RandomElement(array) {
  return array[Math.floor( Math.random()* array.length)];
}

const palo = RandomElement(palos)
const numero = RandomElement(numbers)

const simbols = {
  heart: '♥',
  spade: '♠',
  club: '♣',
  diamond: '♦'
};

window.onload = () => {
  const numE1 = document.getElementById("number");
  const topE1 = document.getElementById("paloSuperior");
  const bottomE1 = document.getElementById("paloInferior");
  const cardE1 = document.querySelector(".card");

  numE1.textContent = numero;
  topE1.textContent = simbols[palo];
  bottomE1.textContent = simbols[palo];

  cardE1.classList.add(palo);
};


