import { expresiones } from "./expresiones.js";


export function validateForm() {
    let inputs = document.querySelectorAll('.formulario__entrada'); //Se seleccionan todos los inputs
    /*Se convierte a arreglo*/
    let arregloInputs = [...inputs]; //Convertir a un arreglo - expansion iterable

    arregloInputs.map((input) => {
        input.addEventListener("keyup", (e) => {
            switch (e.target.id) {
                case "inputName":
                    if (expresiones.text.test(e.target.value)) {
                        e.target.style.borderColor = "green"
                    } else {
                        document.getElementById("inputName").style.borderColor = "red"
                    }
                    break;
                case "inputlastName":
                    if (expresiones.text.test(e.target.value)) {
                        e.target.style.borderColor = "green"
                    } else {
                        e.target.style.borderColor = "red"
                    }
                    break;
                case "inputDocument":
                    if (expresiones.numbers.test(e.target.value)) {
                        e.target.style.borderColor = "green"
                        document.getElementById("documentMessage").style.display = "none"
                    } else {
                        e.target.style.borderColor = "red"
                        document.getElementById("documentMessage").style.display = "block"
                    }
                    break;
                case "inputPhone":
                    if (expresiones.numbers.test(e.target.value)) {
                        e.target.style.borderColor = "green"
                        document.getElementById("phoneMessage").style.display = "none"
                    } else {
                        e.target.style.borderColor = "red"
                        document.getElementById("phoneMessage").style.display = "block"
                    }
                    break;
                case "inputemail":
                    if (expresiones.email.test(e.target.value)) {
                        e.target.style.borderColor = "green"
                        document.getElementById("mailMessage").style.display = "none"
                    } else {
                        document.getElementById("mailMessage").style.display = "block"
                    }
                    break;
                case "inputUsername":
                    if (expresiones.text.test(e.target.value)) {
                        e.target.style.borderColor = "green"
                    } else {
                        e.target.style.borderColor = "red"
                    }
                    break;
                case "password":
                    if (expresiones.password.test(e.target.value)) {
                        e.target.style.borderColor = "green"
                    } else {
                        e.target.style.borderColor = "red"
                    }
                    break;
                case "confirmPassword":
                    if (expresiones.password.test(e.target.value)) {
                        e.target.style.borderColor = "green"
                    } else {
                        e.target.style.borderColor = "red"
                    }
                    break;
            }

        })
    })

    let lista = document.querySelector('#genero');
    lista.addEventListener('change', (e) => {
        if (e.target.value !== "") {
            e.target.classList.add("correcto")
            e.target.classList.remove("incorrecto")
        } else {
            e.target.classList.add("incorrecto")
            e.target.classList.remove("correcto")
        }
    })
}