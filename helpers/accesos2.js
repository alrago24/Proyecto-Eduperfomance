// ✅ accesos.js — Versión corregida sin cambiar tu estructura original

import { saveLocalStorage, consultLocalStorage } from "../helpers/localStorage.js";

document.addEventListener("DOMContentLoaded", () => {
    const btnLogin = document.getElementById("btnLogin");
    if (btnLogin) {
        btnLogin.addEventListener("click", loginUser);
    }
});

function loginUser(e) {
    e.preventDefault();

    // Obtener valores del formulario
    const usuario = {
        inputEmail: document.getElementById("inputEmail").value.trim(),
        inputPassword: document.getElementById("inputPassword").value.trim()
    };

    // Validar campos vacíos
    if (!usuario.inputEmail || !usuario.inputPassword) {
        mostrarMensajeError("Por favor, ingresa tu correo y contraseña.");
        return;
    }

    // 🔹 Consultar usuarios guardados en localStorage
    let Users = consultLocalStorage("users") || [];

    // 🔹 Buscar usuario que coincida (ajuste clave: inputemail y password en minúsculas)
    let auth = Users.find(
        (u) => u.inputemail === usuario.inputEmail && u.password === usuario.inputPassword
    );

    if (auth) {
        // ✅ Guardar usuario activo con clave correcta
        saveLocalStorage("usuarioActivo", auth);

        // ✅ Mostrar mensaje de éxito
        mostrarMensajeExito("Inicio de sesión exitoso. Redirigiendo...");

        // ✅ Redirigir al perfil
        setTimeout(() => {
            window.location.href = "../views/navBarNew.html";
        }, 1000);
    } else {
        mostrarMensajeError("Correo o contraseña incorrectos. Inténtalo nuevamente.");
    }
}

// 🔸 Mensaje de éxito
function mostrarMensajeExito(mensaje = "Operación exitosa") {
    const alerta = document.createElement("div");
    alerta.className = "alert alert-success mt-3 text-center";
    alerta.textContent = mensaje;
    document.getElementById("loginForm").appendChild(alerta);
    setTimeout(() => alerta.remove(), 2500);
}

// 🔸 Mensaje de error
function mostrarMensajeError(mensaje = "Error al iniciar sesión") {
    const alerta = document.createElement("div");
    alerta.className = "alert alert-danger mt-3 text-center";
    alerta.textContent = mensaje;
    document.getElementById("loginForm").appendChild(alerta);
    setTimeout(() => alerta.remove(), 2500);
}
