import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { calculateIMC,notNumber } from "./utils.js"

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
// const modalWrapper = document.querySelector('.modal-wrapper');
// const modalMessage = document.querySelector('.modal .title span');
// const modalBtnClose = document.querySelector('.modal button.close');

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = parseFloat(inputWeight.value);
  const height = parseFloat(inputHeight.value);
  const weightOrHeightIsNotNumber = notNumber(weight) || notNumber(height);

  if (weightOrHeightIsNotNumber) {
    AlertError.open();
    return;
  }

  const result = calculateIMC(weight, height);
  displayResultMessage(result)
};



function displayResultMessage(result){
  const messagem = `Seu IMC é de ${result}`;
  Modal.message.innerText = messagem;
  Modal.open();
}


