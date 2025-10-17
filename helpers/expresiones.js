export let expresiones = {
    text: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜñÑ\s]{5,50}$/,
    numbers: /^\d{5,10}$/,
    phone: /^3\d{9}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
}