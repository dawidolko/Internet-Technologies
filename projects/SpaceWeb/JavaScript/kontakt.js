/**
 * Dodaje nasłuchiwacz do dokumentu, który wykonuje funkcję po załadowaniu zawartości strony.
 */
document.addEventListener('DOMContentLoaded', function () {
    /**
     * Znajduje formularz kontaktowy w dokumencie za pomocą jego identyfikatora.
     * @type {HTMLFormElement}
     */
    const form = document.getElementById("contactForm");

    // Dodaje nasłuchiwacz zdarzenia wysyłania formularza.
    form.addEventListener("submit", processForm);
});

/**
 * Funkcja przetwarzająca formularz i wyświetlająca wiadomość z podziękowaniem.
 * @function processForm
 * @param {Event} e - Obiekt zdarzenia przesłanego przez nasłuchiwacz.
 */
function processForm(e) {
    // Zapobiega domyślnej akcji wysyłania formularza.
    e.preventDefault();

    /**
     * Pobiera wartość wprowadzoną w pole imienia.
     * @type {string}
     */
    var name = document.getElementById('field-name').value;

    /**
     * Pobiera wartość wprowadzoną w pole e-mail.
     * @type {string}
     */
    var email = document.getElementById('field-email').value;

    /**
     * Pobiera wartość wprowadzoną w pole wiadomości.
     * @type {string}
     */
    var message = document.getElementById('field-message').value;

    /**
     * Tworzy obiekt zawierający dane z formularza.
     * @type {Object}
     */
    const wiadomosc = {
        "imie": name,
        "email": email,
        "message": message
    };
    
    // Wyświetla alert z podziękowaniem i imieniem użytkownika.
    alert("Dziękujemy za wiadomość, " + wiadomosc.imie);
}
