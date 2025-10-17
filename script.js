import { registerUser } from "./controllers/userController.js";
import { validateForm } from "./helpers/verificarRegistro.js";

validateForm();
registerUser();