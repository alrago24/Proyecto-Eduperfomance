import { expresiones } from "./expresiones.js";



let inputs = document.querySelectorAll('.formulario__entrada'); //Se seleccionan todos los inputs
/*Se convierte a arreglo*/
let arregloInputs = [...inputs]; //Convertir a un arreglo - expansion iterable

arregloInputs.map((input) => {
    input.addEventListener("keyup", (e) => {
        switch (e.target.id) {
            case "inputName":
                if (expresiones.texto.test(e.target.value)) {
                    e.target.style.borderColor = "green"
                } else {
                    document.getElementById("inputName").style.borderColor = "red"
                }
                break;
            case "inputlastName":
                if (expresiones.texto.test(e.target.value)) {
                    e.target.style.borderColor = "green"
                } else {
                    e.target.style.borderColor = "red"
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
                if (expresiones.texto.test(e.target.value)) {
                    e.target.style.borderColor = "green"
                } else {
                    e.target.style.borderColor = "red"
                }
                break;
            case "password":
                if (expresiones.texto.test(e.target.value)) {
                    e.target.style.borderColor = "green"
                } else {
                    e.target.style.borderColor = "red"
                }
                break;
            case "confirmPassword":
                if (expresiones.texto.test(e.target.value)) {
                    e.target.style.borderColor = "green"
                } else {
                    e.target.style.borderColor = "red"
                }
                break;
        }

    })
})