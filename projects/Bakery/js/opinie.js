/**
 * Nasłuchuje na załadowanie całego modelu DOM, a następnie wykonuje funkcję.
 */
document.addEventListener('DOMContentLoaded', function () {
    // Wywołuje funkcję `pobierzLosowyCytat` trzy razy.
    for (let i = 0; i < 3; i++) {
        pobierzLosowyCytat();
    }
});

/**
 * Wywołuje asynchroniczne żądanie HTTP do API w celu pobrania losowego cytatu
 * i wyświetlenia go na stronie. Wykorzystuje `fetch` do pobrania danych i
 * obsługuje potencjalne błędy.
 */
function pobierzLosowyCytat() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            wyswietlCytat(data.content);
        })
        .catch(error => console.error('Error:', error));
}

/**
 * Wyświetla pobrany cytat w kontenerze w nowym paragrafie na stronie "O nas".
 * @param {string} cytat - Tekst cytatu do wyświetlenia.
 */
function wyswietlCytat(cytat) {
    // Znajduje kontener na stronie, w którym zostanie wyświetlony cytat.
    const container = document.querySelector('.container');

    // Tworzy element <p> i ustawia jego styl oraz zawartość.
    const cytatParagraf = document.createElement('p');
    cytatParagraf.style.fontStyle = "italic";
    cytatParagraf.style.borderTopColor = "black";
    cytatParagraf.style.borderTopWidth = "1px";
    cytatParagraf.style.borderTopStyle = "dashed";
    cytatParagraf.textContent = cytat;

    // Dodaje stworzony element <p> z cytatem do kontenera.
    container.appendChild(cytatParagraf);
}
