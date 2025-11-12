import "bootstrap";
import "./style.css";

let palo = ['heart','spade','club','diamond'];
let numbers = ['1','2','3','4','5','6','7','8','9','10','J','Q','K'];
let cards = [];

function RandomElement(array) {
  return [Math.floor( Math.random()* array.length)];
}

window.onload = () => {
  document.getElementById("card").innerHTML =
    `${RandomElement(numbers)}`;
    //write your code here
};
