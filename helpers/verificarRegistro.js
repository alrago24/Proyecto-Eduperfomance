import { expresiones } from "./expresiones.js";


export const camposValidos = {
    inputName: false,
    inputlastName: false,
    inputDocument: false,
    inputPhone: false,
    inputemail: false,
    inputPassword: false,
    genero: false
};

export function validateForm() {
    let inputs = document.querySelectorAll('.formulario__entrada'); //Se seleccionan todos los inputs
    /*Se convierte a arreglo*/
    let arregloInputs = [...inputs]; //Convertir a un arreglo - expansion iterable

    arregloInputs.map((input) => {
        input.addEventListener("keyup", (e) => {
            switch (e.target.id) {
                case "inputName":
                    camposValidos.inputName = expresiones.text.test(e.target.value);
                    e.target.style.borderColor = camposValidos.inputName ? "green" : "red";
                    break;
                case "inputlastName":
                    camposValidos.inputlastName = expresiones.text.test(e.target.value);
                    e.target.style.borderColor = camposValidos.inputlastName ? "green" : "red";
                    break;
                case "inputDocument":
                    camposValidos.inputDocument = expresiones.numbers.test(e.target.value);
                    e.target.style.borderColor = camposValidos.inputDocument ? "green" : "red";
                    document.getElementById("documentMessage").style.display = camposValidos.inputDocument ? "none" : "block";
                    break;
                case "inputPhone":
                    camposValidos.inputPhone = expresiones.numbers.test(e.target.value);
                    e.target.style.borderColor = camposValidos.inputPhone ? "green" : "red";
                    document.getElementById("phoneMessage").style.display = camposValidos.inputPhone ? "none" : "block";
                    break;
                case "inputemail":
                    camposValidos.inputemail = expresiones.email.test(e.target.value);
                    e.target.style.borderColor = camposValidos.inputemail ? "green" : "red";
                    document.getElementById("mailMessage").style.display = camposValidos.inputemail ? "none" : "block";
                    break;
                case "password":
                    camposValidos.inputPassword = expresiones.password.test(e.target.value);
                    e.target.style.borderColor = camposValidos.inputPassword ? "green" : "red";
                    document.getElementById("passwordMessage").style.display = camposValidos.inputPassword ? "none" : "block";
                    break;
            }
        });
    });

    let lista = document.querySelector('#genero');
    lista.addEventListener('change', (e) => {
        camposValidos.genero = e.target.value !== "";
        if (camposValidos.genero) {
            e.target.classList.add("correcto");
            e.target.classList.remove("incorrecto");
        } else {
            e.target.classList.add("incorrecto");
            e.target.classList.remove("correcto");
        }
    });
}

export function todosLosCamposValidos() {
    return Object.values(camposValidos).every(valor => valor === true);
}