export function saveLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function consultLocalStorage(key) {
    let users = JSON.parse(localStorage.getItem(key));
}

export function deleteLocalStorage(key) {
    localStorage.removeItem(key);
}