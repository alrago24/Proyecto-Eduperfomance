import { consultLocalStorage } from "../helpers/localStorage.js";

export let Users = consultLocalStorage("users") || [];