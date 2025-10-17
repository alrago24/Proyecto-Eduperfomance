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
        // window.location.href = "./navBarNew.html"

    })
}