import { Users } from "../models/userModel.js";

export function registerUser() {
    let registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(registerForm)
        let user = Object.fromEntries(formData)
        Users.push(user)
        // guardarLocalStorage("users", Users)
        console.log(Users)
        // window.location.href = "./navBarNew.html"

    })
}