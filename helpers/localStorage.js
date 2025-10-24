export function saveLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function consultLocalStorage(key) {
    let users = JSON.parse(localStorage.getItem(key));
    return users;
}

export function deleteLocalStorage(key) {
    localStorage.removeItem(key);
}