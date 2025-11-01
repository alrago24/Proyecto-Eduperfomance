
import { consultLocalStorage, saveLocalStorage } from "./localStorage.js";

// Arreglo estático de docentes
const docentes = [
    {
        correo: "carlos.rodriguez@eduperformance.com",
        password: "12345",
        nombre: "Carlos Rodríguez",
        especialidad: "Ingeniería de Software",
        experiencia: "6 años",
    },
    {
        correo: "maria.gomez@eduperformance.com",
        password: "12345",
        nombre: "María Gómez",
        especialidad: "Matemáticas",
        experiencia: "8 años",
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const formularioLogin = document.getElementById("formLogin")

    if (!formularioLogin) {
        console.warn("No se encontró el formulario de login");
        return;
    }

    formularioLogin.addEventListener("submit", (e) => {
        e.preventDefault();

        // Obtener datos del formulario
        const correo = document.getElementById("inputemail").value.trim();
        const password = document.getElementById("inputPassword").value.trim();
        const rol = document.getElementById("rol").value.trim(); // 👈 Nuevo campo de rol

        if (!correo || !password) {
            alert("Por favor completa todos los campos.");
            return;
        }

        // 🧩 Si el usuario selecciona 'Estudiante'
        if (rol === "estudiante") {
            const usuarios = consultLocalStorage("users") || [];
            const auth = usuarios.find(
                (u) =>
                    u.inputemail?.toLowerCase() === correo.toLowerCase() &&
                    u.inputPassword === password
            );

            if (auth) {
                saveLocalStorage("usuarioActivo", auth);
                mostrarMensajeExito();
                setTimeout(() => {
                    window.location.href = "../views/perfil.html";
                }, 500);
            } else {
                alert("Credenciales de estudiante incorrectas");
            }
        }

        // 👨‍🏫 Si el usuario selecciona 'Docente'
        if (rol === "docente") {
            const authDocente = docentes.find(
                (d) => d.correo === correo && d.password === password
            );

            if (authDocente) {
                mostrarMensajeExito()
                saveLocalStorage("docenteActivo", authDocente);
                setTimeout(() => {
                    window.location.href = "../views/perfilDocente.html";
                }, 1000);
            } else {
                alert("Credenciales de docente incorrectas");
            }
        }
    })
});

export function cerrarSesion() {
    localStorage.removeItem("usuarioActivo");
    localStorage.removeItem("docenteActivo");
    window.location.href = "./login.html";
}


// Función para mostrar mensajes de error
function mostrarError(mensaje) {
    // Remover mensaje de error anterior si existe
    const errorAnterior = document.querySelector('.mensaje-error');
    if (errorAnterior) {
        errorAnterior.remove();
    }

    // Crear nuevo mensaje de error
    const mensajeError = document.createElement('div');
    mensajeError.className = 'alert alert-danger mensaje-error mt-3';
    mensajeError.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${mensaje}`;

    // Insertar el mensaje después del botón
    const boton = document.querySelector('.btn-iniciar-sesion');
    boton.parentNode.insertBefore(mensajeError, boton.nextSibling);

    // Remover el mensaje después de 5 segundos
    setTimeout(() => {
        if (mensajeError.parentNode) {
            mensajeError.remove();
        }
    }, 5000);
}

// Función para limpiar mensajes de error
function limpiarErrores() {
    const errorAnterior = document.querySelector('.mensaje-error');
    if (errorAnterior) {
        errorAnterior.remove();
    }
}

// Evento que se ejecuta cuando el DOM está cargado
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('form');
    const inputEmail = document.getElementById('inputemail');
    const inputPassword = document.getElementById('inputPassword');


    // Obtener valores de los campos
    const email = inputEmail.value.trim();
    const password = inputPassword.value;

    // Limpiar errores anteriores
    limpiarErrores();

    // Validar que los campos no estén vacíos
    if (!email || !password) {
        mostrarError('Por favor, completa todos los campos.');
        return;
    }

    // Validar formato de email básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mostrarError('Por favor, ingresa un formato de correo válido.');
        return;
    }


    inputEmail.addEventListener('input', limpiarErrores);
    inputPassword.addEventListener('input', limpiarErrores);
});




// Función para mostrar mensaje de éxito
function mostrarMensajeExito() {
    limpiarErrores();

    const mensajeExito = document.createElement('div');
    mensajeExito.className = 'alert alert-success mensaje-error mt-3';
    mensajeExito.innerHTML = '<i class="fas fa-check-circle"></i> ¡Inicio de sesión exitoso! Redirigiendo...';

    const boton = document.querySelector('.btn-iniciar-sesion');
    boton.parentNode.insertBefore(mensajeExito, boton.nextSibling);
}

// Funcionalidad para mostrar/ocultar contraseña

document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('inputPassword');
    const eyeIcon = document.getElementById('eyeIcon');

    togglePassword.addEventListener('click', function () {
        // Cambiar el tipo de input
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Cambiar el ícono
        if (type === 'text') {
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
            togglePassword.setAttribute('title', 'Ocultar contraseña');
        } else {
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
            togglePassword.setAttribute('title', 'Mostrar contraseña');
        }
    });
});