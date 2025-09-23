// Cuentas válidas
const cuentasValidas = [
    {
        email: "Sergio123@cesde.net",
        password: "Acceso123*"
    },
    {
        email: "Alison123@cesde.net",
        password: "Acceso123*"
    },
    {
        email: "Andres123@cesde.net",
        password: "Acceso123*"
    }
];

// Función para validar credenciales
function validarCredenciales(email, password) {
    return cuentasValidas.some(cuenta =>
        cuenta.email === email && cuenta.password === password
    );
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
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');

    // Prevenir el envío normal del formulario
    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que se envíe el formulario normalmente

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

        // Validar credenciales
        if (validarCredenciales(email, password)) {
            // Credenciales correctas - redirigir
            mostrarMensajeExito();
            setTimeout(() => {
                window.location.href = 'navBarNew.html';
            }, 1500);
        } else {
            // Credenciales incorrectas
            mostrarError('Correo electrónico o contraseña incorrectos.');

            // Limpiar campos por seguridad
            inputPassword.value = '';
        }
    });

    // Limpiar errores cuando el usuario empiece a escribir
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