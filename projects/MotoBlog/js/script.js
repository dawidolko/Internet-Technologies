/**
 * Obsługuje wyświetlanie i ukrywanie wyskakującego okienka (popup).
 * Po załadowaniu strony pokazuje popup, który można zamknąć na dwa sposoby: klikając 'X' lub klikając w dowolne miejsce na ekranie.
 * Dodatkowo obsługuje formularz zapisu do newslettera.
 * @example
 * // Załadowanie DOM i inicjalizacja popupa
 * document.addEventListener("DOMContentLoaded", function() {
 *     // ...inicjalizacja i obsługa...
 * });
 */
document.addEventListener("DOMContentLoaded", function() {
  // Inicjalizacja elementów popup i przycisku zamknięcia
  var popup = document.getElementById("popup");
  var closeBtn = document.getElementsByClassName("close")[0];

  // Wyświetla popup po 1 sekundzie
  setTimeout(function() {
    popup.style.display = "block";
  }, 1000);

  // Zamyka popup po kliknięciu w 'X'
  closeBtn.onclick = function() {
    popup.style.display = "none";
  };

  // Zamyka popup klikając gdziekolwiek poza nim
  window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  };

  // Obsługa formularza newslettera
  document.getElementById("newsletter-form").onsubmit = function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    alert("Dziękujemy za zapisanie się do newslettera: " + email);
    popup.style.display = "none";
  };
});

  

/**
 * Obsługuje menu typu 'hamburger' na urządzeniach mobilnych.
 * Po kliknięciu na ikonę hamburgera, menu się rozwija lub zwija.
 * @example
 * // Inicjalizacja menu hamburger po załadowaniu DOM
 * document.addEventListener("DOMContentLoaded", function() {
 *     // ...inicjalizacja i obsługa...
 * });
 */
document.addEventListener("DOMContentLoaded", function() {
  var hamburger = document.querySelector('.hamburger-menu');
  var mobileNav = document.querySelector('.navigation ul');

  hamburger.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
  });
});


/**
 * Skaluje formularz kontaktowy po załadowaniu strony.
 * @example
 * // Skalowanie formularza kontaktowego
 * window.addEventListener('DOMContentLoaded', (event) => {
 *     // ...skalowanie...
 * });
 */
window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('contactForm').style.transform = 'scale(1)';
});

  
/**
 * Funkcje do obsługi slidera.
 * Pozwalają na przełączanie slajdów oraz ustawianie obecnego slajdu.
 * @example
 * // Używanie funkcji slidera
 * let slideIndex = 1;
 * showSlides(slideIndex);
 * changeSlide(1);
 * currentSlide(2);
 */

// Ustawia początkowy indeks slajdu
let slideIndex = 1;
showSlides(slideIndex);

/**
 * Zmienia slajd o daną liczbę pozycji.
 * @function
 * @public
 * @param {number} n - Liczba, o którą przesunąć slajd.
 */
function changeSlide(n) {
  showSlides(slideIndex += n);
}

/**
 * Ustawia bieżący slajd.
 * @function
 * @public
 * @param {number} n - Indeks wybranego slajdu.
 */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/**
 * Wyświetla slajd o danym indeksie.
 * Ukrywa pozostałe slajdy i aktualizuje kropki nawigacyjne.
 * @function
 * @public
 * @param {number} n - Indeks slajdu do wyświetlenia.
 */
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


/**
 * Obsługuje zakładki na stronie.
 * Kliknięcie na etykietę zakładki rozszerza ją, pokazując zawartość.
 * Ponowne kliknięcie zamyka zakładkę.
 * @example
 * // Inicjalizacja obsługi zakładek
 * document.querySelectorAll('.tab-label').forEach((label) => {
 *     label.addEventListener('click', () => {
 *         // ...obsługa zakładek...
 *     });
 * });
 */
document.querySelectorAll('.tab-label').forEach((label) => {
  label.addEventListener('click', () => {
    const content = label.nextElementSibling;

    // Otwiera lub zamyka zakładkę
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      // Zamyka wszystkie inne zakładki
      document.querySelectorAll('.tab .tab-content').forEach((otherContent) => {
        otherContent.style.maxHeight = null;
      });
      // Otwiera wybraną zakładkę
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});