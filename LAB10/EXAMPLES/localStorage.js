// Zapisanie danych w localStorage
localStorage.setItem('userName', 'JohnDoe');
localStorage.setItem('userAge', '25');
// Pobranie danych z localStorage
const name = localStorage.getItem('userName');
const age = localStorage.getItem('userAge');
console.log(`Nazwa użytkownika: ${name}, Wiek: ${age}`);
// Usunięcie danych z localStorage
localStorage.removeItem('userName');
// Sprawdzenie ilości danych w localStorage
const dataCount = localStorage.length;
console.log(`Liczba zapisanych danych w localStorage: ${dataCount}`);
// Wyczyszczenie wszystkich danych w localStorage
localStorage.clear();