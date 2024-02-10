import { Modal } from "./modal.js";
import { alertError } from "./alertError.js";
import { calculateIMC, notNumber } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = handleSubmit;
inputHeight.oninput = () => alertError.close();

inputWeight.oninput = () => alertError.close();


function handleSubmit (event) {
    event.preventDefault();
    const weight = inputWeight.value;
    const height = inputHeight.value;
    
    const weightOrHeightIsNaN = notNumber(weight) || notNumber(height);

    if (weightOrHeightIsNaN) {
        alertError.open();
    }
    else {
        alertError.close();
        const result = calculateIMC(weight, height);
        Modal.message.innerText = `Seu IMC é de ${result}`;
        Modal.open();
    }
};







