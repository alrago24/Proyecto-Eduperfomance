import { Users } from "../models/userModel.js";
import { saveLocalStorage, consultLocalStorage } from "../helpers/localStorage.js";
import { todosLosCamposValidos } from "../helpers/verificarRegistro.js";

const usuarioActivo = consultLocalStorage("usuarioActivo");

export function registerUser() {
    let registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        if (todosLosCamposValidos()) {
            const formData = new FormData(registerForm);
            let user = Object.fromEntries(formData);
            Users.push(user);
            saveLocalStorage("users", Users);
            window.location.href = "../views/login.html";
        } else {
            mostrarError('Por favor, completa todos los campos correctamente');
            return false;
        }
    });
}

function agregarSaludo() {
    let saludo = document.getElementById("saludoUsuario")
    const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
    if (!saludo || !usuarioActivo) return;
    saludo.innerHTML = "";
    let division = document.createElement("div")
    let saludoUsuario = document.createElement("h2")
    division.classList.add("d-flex", "col-md-12", "justify-content-center", "bg-success-subtle", "text-center", "rounded-3")
    saludoUsuario.textContent = "¡Hola, " + usuarioActivo.inputName + "!"
    division.style.padding = "15px"
    division.append(saludoUsuario)
    saludo.append(division)
}


document.addEventListener("DOMContentLoaded", () => {
    agregarSaludo();
    const usuarioActivoLocal = JSON.parse(localStorage.getItem("usuarioActivo"));
    if (usuarioActivoLocal) {
        listUsers(usuarioActivoLocal);
    }
    cargarResumen();
    mostrarMaterias();
    renderizarGrafico();
    manejarEdicionPerfil();
    mostrarActividades();
    cargarHistorial();
    graficoHistorial();

    let botonCerrarSesion = document.getElementById("closeSession");
    if (botonCerrarSesion) {
        botonCerrarSesion.addEventListener("click", () => {
            localStorage.removeItem("usuarioActivo");
            window.location.href = "./noticias.html";
            console.log("Sesión cerrada");
        });
    } else {
        console.log("Botón de cerrar sesión no encontrado");
    }
});

// if (usuarioActivo) {
//     listUsers(usuarioActivo);
// }

function listUsers(user) {
    let listUsers = document.getElementById("listUsers")
    listUsers.innerHTML = "";
    let card = document.createElement("div")
    let nombre = document.createElement("h3")
    let documento = document.createElement("p")
    let correo = document.createElement("p")
    let telefono = document.createElement("p")
    let genero = document.createElement("p")
    let editar = document.createElement("button")
    let eliminar = document.createElement("button")
    card.classList.add("card_usuario")
    editar.setAttribute("data-bs-toggle", "modal");
    editar.setAttribute("data-bs-target", "#modalEditarPerfil");
    editar.classList.add("btn", "btn-outline-success", "m-2")
    eliminar.classList.add("btn", "btn-outline-danger", "m-2")
    nombre.innerHTML = "<strong>Nombre:</strong> <br>" + user.inputName + " " + user.inputlastName
    documento.innerHTML = "<strong>Documento:</strong> <br>" + user.inputDocument
    correo.innerHTML = "<strong>Correo:</strong> <br>" + user.inputemail
    telefono.innerHTML = "<strong>Telefono:</strong> <br>" + user.inputPhone
    genero.innerHTML = "<strong>Genero:</strong> <br>" + user.genero
    editar.textContent = "Editar perfil"
    eliminar.textContent = "Eliminar perfil"
    card.append(nombre, documento, correo, telefono, genero, editar, eliminar)
    listUsers.append(card)
    // });
}



function mostrarError(mensaje) {
    // Remover mensaje de error anterior si existe
    const errorAnterior = document.querySelector('.mensaje-error');
    if (errorAnterior) {
        errorAnterior.remove();
    }

    const mensajeError = document.createElement('div');
    mensajeError.className = 'alert alert-danger mensaje-error mt-3';
    mensajeError.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${mensaje}`;

    const boton = document.querySelector('.BtnRegister');
    boton.parentNode.insertBefore(mensajeError, boton.nextSibling);
}


const name = document.getElementById('inputName');
const inputLastName = document.getElementById('inputLastName');
const inputDocument = document.getElementById('inputDocument');
const inputPhone = document.getElementById('inputPhone');
const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');
const genero = document.getElementById('genero');


// 🔹 Cargar resumen académico
function cargarResumen() {
    const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo")) || {
        promedio: 4.2,
        semestre: 2,
        materiasActivas: 5,
        avance: 65
    };

    document.getElementById("promedioGeneral").textContent = usuarioActivo.promedio;
    document.getElementById("semestreActual").textContent = usuarioActivo.semestre + "°";
    document.getElementById("materiasActivas").textContent = usuarioActivo.materiasActivas;
    document.getElementById("avancePorcentaje").textContent = usuarioActivo.avance + "%";
    document.getElementById("progresoCarrera").style.width = usuarioActivo.avance + "%";
    document.getElementById("progresoCarrera").textContent = usuarioActivo.avance + "%";
}



// 🔹 Mostrar materias inscritas dinámicamente
function mostrarMaterias() {
    const materias = JSON.parse(localStorage.getItem("materias")) || [
        { nombre: "Bases de Datos", nota: 4.3, progreso: 80 },
        { nombre: "Programación Web", nota: 4.7, progreso: 90 },
        { nombre: "Matemáticas Discretas", nota: 3.9, progreso: 60 },
    ];

    const contenedor = document.getElementById("materiasInscritas");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    materias.forEach((m) => {
        const div = document.createElement("div");
        div.classList.add("col-md-4");
        div.innerHTML = `<div class="card shadow-sm p-3">
        <h5 class="text-success">${m.nombre}</h5>
        <p>Nota actual: <strong>${m.nota}</strong></p>
        <div class="progress">
        <div class="progress-bar bg-success" style="width:${m.progreso}%">${m.progreso}%</div>
        </div>
    </div>`;
        contenedor.appendChild(div);
    });
}

// 🔹 Renderizar gráfico de rendimiento
function renderizarGrafico() {
    const ctx = document.getElementById("graficoNotas");
    if (!ctx) return;

    // 🔹 Crear degradado moderno (verde → azul)
    const gradient = ctx.getContext("2d").createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "#0d5942ff");
    gradient.addColorStop(1, "#91d6b6ff");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Momento 1", "Momento 2", "Momento 3"],
            datasets: [{
                label: "Notas promedio",
                data: [3.8, 4.2, 4.5],
                backgroundColor: gradient,
                borderRadius: 5,        // 🔹 Bordes redondeados
                barThickness: 100,        // 🔹 Grosor equilibrado
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }, // 🔹 Sin leyenda
                tooltip: {
                    backgroundColor: "#198754",
                    titleColor: "#fff",
                    bodyColor: "#fff",
                    cornerRadius: 8
                },
                // 🔹 Mostrar etiquetas encima de cada barra
                datalabels: {
                    color: "#ebeff5ff",
                    anchor: "end",
                    align: "start",
                    font: { weight: "bold", size: 14 },
                    formatter: (value) => value.toFixed(1)
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { display: false }
                },
                y: {
                    grid: { display: false },
                    ticks: { display: false },
                    beginAtZero: true,
                    max: 5
                }
            }
        },
        plugins: [ChartDataLabels] // 🔹 Activar etiquetas
    });
}

function mostrarActividades() {
    const actividades = [
        { materia: "Bases de Datos", entrega: "Proyecto SQL", fecha: "25 Oct 2025" },
        { materia: "Programación Web", entrega: "Landing Page HTML/CSS", fecha: "30 Oct 2025" }
    ];

    const lista = document.getElementById("proximasActividades");
    if (!lista) return;

    lista.innerHTML = "";
    actividades.forEach(a => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = `<strong>${a.materia}</strong>: ${a.entrega} <span class="badge bg-success float-end">${a.fecha}</span>`;
        lista.appendChild(li);
    });
}



// 🔹 Editar perfil con modal
function manejarEdicionPerfil() {
    const guardarBtn = document.getElementById("guardarCambios");
    if (!guardarBtn) return;

    guardarBtn.addEventListener("click", () => {
        const telefono = document.getElementById("editarTelefono").value;
        const correo = document.getElementById("editarCorreo").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];
        let usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo")) || {};

        // Actualizar datos del usuario activo
        usuarioActivo.inputPhone = telefono;
        usuarioActivo.inputemail = correo;

        // Actualizar en el array de usuarios
        const index = users.findIndex(
            u => u.inputDocument === usuarioActivo.inputDocument
        );
        if (index !== -1) {
            users[index].inputPhone = telefono;
            users[index].inputemail = correo;
        }

        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("usuarioActivo", JSON.stringify(usuarioActivo));
        // Refrescar la interfaz
        listUsers(usuarioActivo);
        // Cerrar modal
        const modal = bootstrap.Modal.getInstance(
            document.getElementById("modalEditarPerfil")
        );
        modal.hide();
        alert("Perfil actualizado correctamente ✅");

    });
}

function cargarHistorial() {
    const materiasCursadas = [
        { semestre: 1, materia: "Fundamentos de Programación", nota: 4.3, estado: "Aprobada" },
        { semestre: 1, materia: "Matemáticas Discretas", nota: 3.9, estado: "Aprobada" },
        { semestre: 2, materia: "Bases de Datos", nota: 4.5, estado: "Aprobada" },
        { semestre: 2, materia: "Diseño Web", nota: 4.7, estado: "Aprobada" },
        { semestre: 3, materia: "Estadística", nota: 3.8, estado: "Aprobada" },
    ];

    const tabla = document.getElementById("tablaHistorial");
    tabla.innerHTML = "";

    materiasCursadas.forEach(m => {
        const fila = document.createElement("tr");
        const color = m.nota >= 4.0 ? "text-success" : m.nota >= 3.0 ? "text-warning" : "text-danger";
        fila.innerHTML = `
        <td class="text-center">${m.semestre}</td>
        <td>${m.materia}</td>
        <td class="text-center ${color} fw-bold">${m.nota}</td>
        <td class="text-center">${m.estado}</td>
    `;
        tabla.appendChild(fila);
    });

    // Calcular promedio
    const promedio = (materiasCursadas.reduce((acc, m) => acc + m.nota, 0) / materiasCursadas.length).toFixed(2);
    document.getElementById("promedioAcumulado").textContent = promedio;
}

// Gráfico de evolución
function graficoHistorial() {
    const ctx = document.getElementById("graficoHistorial");
    if (!ctx) return;

    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Semestre 1", "Semestre 2", "Semestre 3"],
            datasets: [{
                label: "Promedio por semestre",
                data: [4.1, 4.4, 3.9],
                borderColor: "#198754",
                fill: true,
                tension: 0.3,
                backgroundColor: "rgba(21, 86, 56, 0.5)",
                pointBackgroundColor: "#20c997",
                pointRadius: 5,
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: "#198754",
                    titleColor: "#fff",
                    bodyColor: "#fff",
                    cornerRadius: 6
                }
            },
            scales: {
                x: { grid: { display: false }, title: { display: true, text: "" } },
                y: {
                    beginAtZero: true,
                    max: 5,
                    title: { display: true, text: "Promedio" },
                    ticks: { stepSize: 1 }
                }
            }
        }
    });
}