/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //Acá va todo!!!
  let who = [
    "El papa Francisco",
    "Samuel",
    "El Diegote",
    "Un vagabundo",
    "Bob Esponja",
    "Un Otaku con exceso de cafeína en sangre"
  ];
  let action = [
    "me comió",
    "orinó sobre",
    "lloró sobre",
    "me rompió",
    "vomitó sobre",
    "hizo caca sobre"
  ];
  let what = [
    "mis medias",
    "mi dignidad",
    "mi teléfono",
    "mis ideas",
    "mi castidad",
    "un tarrito"
  ];
  let when = [
    "en la madrugada",
    "cuando dormía",
    "en mi luna de miel",
    "mientras esperaba el bus",
    "mientras estaba en el water",
    "durante un examen"
  ];

  function getRandom(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
  }

  let excusa = `
  ${getRandom(who)} ${getRandom(action)} ${getRandom(what)} ${getRandom(when)}
  `;
  console.log(excusa);
  document.getElementById("excuse").innerHTML = excusa;
};
