const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");
const btnCalc = document.querySelector("#btnCalc");

const modalWrapper = document.querySelector(".modal-wrapper");
const modalMessage = document.querySelector(".modal .title span");
const modalBtnClose = document.querySelector(".modal .title button.close");

/* modalBtnClose.addEventListener("click", () => {modalAlert()}); // maneira 1*/
modalBtnClose.onclick = modalAlert;

form.onsubmit = handleSubmit;

function IMC(weight, height) {
    const result = weight / ((height / 100)**2);
    return result.toFixed(2);
}

//Maneira 2 
function modalAlert(result) {
    modalMessage.innerText = `Seu IMC é de ${result}`;
    modalWrapper.classList.toggle("open");
}

function handleSubmit (event) {
    event.preventDefault();
    const weight = inputWeight.value;
    const height = inputHeight.value;
    
    const result = IMC(weight, height);
    
    modalAlert(result); //maneira 2
};





