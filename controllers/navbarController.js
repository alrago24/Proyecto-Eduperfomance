import { consultLocalStorage } from "../helpers/localStorage.js";

export function configurarPerfilLink() {
    const perfilLink = document.getElementById("perfilLink");
    if (!perfilLink) return;

    const usuarioActivo = consultLocalStorage("usuarioActivo");
    const docenteActivo = consultLocalStorage("docenteActivo");

    if (usuarioActivo) perfilLink.href = "../views/perfil.html";
    else if (docenteActivo) perfilLink.href = "../views/perfilDocente.html";
    else perfilLink.href = "../views/login.html";
}