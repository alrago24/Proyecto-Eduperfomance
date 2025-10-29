// DOCENTE CONTROLLER
document.addEventListener("DOMContentLoaded", () => {
    cargarInfoDocente();
    cargarAsignaturas();
    renderizarGraficoDesempeno();
    mostrarAlertas();
    cargarEvaluaciones();
});

function cargarInfoDocente() {
    const info = document.getElementById("infoDocente");
    if (!info) return;

    const docente = {
        nombre: "Carlos Rodríguez",
        correo: "carlos.rodriguez@eduperformance.com",
        especialidad: "Ingeniería de Software",
        experiencia: "8 años",
    };

    info.innerHTML = `
    <h4 class="fw-bold text-success">${docente.nombre}</h4>
    <p><strong>Correo:</strong> ${docente.correo}</p>
    <p><strong>Especialidad:</strong> ${docente.especialidad}</p>
    <p><strong>Experiencia:</strong> ${docente.experiencia}</p>
`;
}

function cargarAsignaturas() {
    const contenedor = document.getElementById("asignaturasDocente");
    if (!contenedor) return;

    const asignaturas = [
        { nombre: "Programación Web", grupo: "A1", estudiantes: 28 },
        { nombre: "Bases de Datos", grupo: "B2", estudiantes: 32 },
        { nombre: "Algoritmos", grupo: "C3", estudiantes: 30 },
    ];

    contenedor.innerHTML = asignaturas.map(a => `
    <div class="col-md-4 mb-3">
      <div class="card border-0 shadow-sm p-3 h-100">
        <h6 class="fw-bold text-success">${a.nombre}</h6>
        <p class="mb-1"><strong>Grupo:</strong> ${a.grupo}</p>
        <p><strong>Estudiantes:</strong> ${a.estudiantes}</p>
      </div>
    </div>
  `).join("");
}

function renderizarGraficoDesempeno() {
    const ctx = document.getElementById("graficoDesempeno");
    if (!ctx) return;

    const data = {
        labels: ["Aprobados", "En riesgo", "Reprobados"],
        datasets: [{
            data: [75, 15, 10],
            backgroundColor: ["#198754", "#ffc107", "#dc3545"],
        }]
    };

    new Chart(ctx, { type: "doughnut", data, options: { plugins: { legend: { position: "bottom" } } } });
}

function mostrarAlertas() {
    const alertas = [
        "2 estudiantes con bajo rendimiento en Bases de Datos.",
        "Entrega de calificaciones del módulo 3 pendiente.",
        "Nueva solicitud de revisión enviada por un estudiante."
    ];
    const lista = document.getElementById("alertasDocente");
    lista.innerHTML = alertas.map(a => `<li class="list-group-item">${a}</li>`).join("");
}

function cargarEvaluaciones() {
    const cont = document.getElementById("listaEvaluaciones");
    if (!cont) return;

    cont.innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Evaluación Parcial 1 - Programación Web</li>
        <li class="list-group-item">Taller 2 - Algoritmos</li>
        <li class="list-group-item">Examen Final - Bases de Datos</li>
    </ul>`;
}