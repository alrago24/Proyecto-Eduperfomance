import { Users } from "../models/userModel.js";
import { saveLocalStorage } from "../helpers/localStorage.js";

export function registerUser() {
    let registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(registerForm)
        let user = Object.fromEntries(formData)
        Users.push(user)
        saveLocalStorage("users", Users)
        console.log(Users)
        window.location.href = "./perfil.html"

    })
}

function listUsers() {
    let listUsers = document.getElementById("listUsers")
    Users.forEach((user) => {
        let card = document.createElement("article")
        let nombre = document.createElement("h3")
        let documento = document.createElement("p")
        let correo = document.createElement("p")
        let telefono = document.createElement("p")
        let genero = document.createElement("p")
        let hobbies = document.createElement("p")
        let editar = document.createElement("button")
        let eliminar = document.createElement("button")
        card.classList.add("card_usuario")
        nombre.textContent = user.nombre
        documento.textContent = user.documento
        correo.textContent = user.correo
        telefono.textContent = user.telefono
        genero.textContent = user.genero
        editar.textContent = "Editar perfil"
        eliminar.textContent = "Eliminar perfil"
        card.append(nombre, documento, correo, telefono, genero, editar, eliminar)
        listUsers.append(card)
    });
}
listUsers();
/*                                    <h5 class="fw-bold">Datos del estudiante</h5>
                                    <p>Alsion Rafael Diaz Toloza</p>
                                    <p><strong>Correo:</strong> adiazra@cesde.net</p>
                                    <p><strong>Telefono:</strong> 310-657-64-49</p>
                                    <p><strong>Dirección:</strong> Calle 42 # 83 - 20 </p>*/