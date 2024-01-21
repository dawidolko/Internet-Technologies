// Ciasteczko o nazwie "user" i wartości "John Doe" z datą ważności za 30 dni, dla konkretnej domeny "example.com"
const expirationDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString(); // Data wygaśnięcia za 30 dni
document.cookie = "user=John Doe; expires=" + expirationDate + "; domain=example.com; path=/";
// Ciasteczko o nazwie " darkMode" i wartości "true" z datą wygaśnięcia za 365 dni, dla domeny "anotherdomain.com"
const anotherExpirationDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString(); // Data wygaśnięcia za 365 dni
document.cookie = "darkMode=true; expires=" + anotherExpirationDate + "; domain=anotherdomain.com; path=/";