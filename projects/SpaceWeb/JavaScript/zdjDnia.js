/**
 * Asynchroniczna funkcja pobierająca dane Astronomy Picture of the Day (APOD) z API NASA.
 * @async
 * @function fetchAPOD
 */
async function fetchAPOD() {
    try {
        /**
         * Klucz API do uwierzytelnienia żądania do API NASA.
         * @type {string}
         */
        const apiKey = 'WY1QbfQACxdGXRbDJflTWlNBmsZGzpgXuok1naaX'; 

        /**
         * Odpowiedź z serwera NASA, oczekuje na zakończenie żądania fetch.
         * @type {Response}
         */
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);

        // Sprawdza, czy odpowiedź serwera jest poprawna.
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        /**
         * Dane otrzymane z API, zawierające informacje o zdjęciu dnia.
         * @type {Object}
         */
        const data = await response.json();

        // Wywołanie funkcji wyświetlającej obrazek dnia.
        displayAPOD(data);
    } catch (error) {
        // Wyświetlenie komunikatu błędu, jeśli nie udało się pobrać danych.
        console.error('Could not fetch APOD data:', error);
    }
}

/**
 * Funkcja wyświetlająca zdjęcie dnia pobrane z API NASA na stronie.
 * @function displayAPOD
 * @param {Object} data - Dane zawierające URL i tytuł zdjęcia dnia.
 */
function displayAPOD(data) {
    /**
     * Element DOM reprezentujący obrazek, który zostanie zaktualizowany o pobrane dane.
     * @type {HTMLElement}
     */
    const imageElement = document.getElementById('apod-image');

    // Ustawienie źródła obrazu oraz alternatywnego tekstu.
    imageElement.src = data.url;
    imageElement.alt = data.title;
}

// Dodanie nasłuchiwacza na załadowanie treści dokumentu i wywołanie funkcji fetchAPOD.
document.addEventListener('DOMContentLoaded', fetchAPOD);
