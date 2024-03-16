/**
 * Dodaje klasę 'loaded' do elementu o identyfikatorze 'searchText' po załadowaniu strony.
 * Wykorzystuje zdarzenie 'DOMContentLoaded' do wywołania funkcji po załadowaniu strony.
 * Wykorzystuje funkcję 'setTimeout' do opóźnienia dodania klasy o 500 milisekund.
 */
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("searchText").classList.add("loaded");
  }, 500);
});

/**
* Funkcja pomocnicza do wyboru elementu na stronie.
* @param {string} element - Selektor CSS elementu do wyboru.
* @returns {Element} Zwraca pierwszy element pasujący do podanego selektora.
*/
const selectElement = (element) => document.querySelector(element);

/**
* Dodaje lub usuwa klasę 'active' do/z nagłówka po kliknięciu w element o klasie 'mobile-menu'.
* Wykorzystuje zdarzenie 'click' do wywołania funkcji po kliknięciu.
*/
selectElement('.mobile-menu').addEventListener('click',() => {
  selectElement('header').classList.toggle('active');
});


/**
             * Modal Dialog Script
             * 
             * Ten skrypt obsługuje wyświetlanie i ukrywanie modala.
             */
                
            /**
             * Pobiera modal i przycisk zamykania modalu.
             */
            var modal = document.getElementById("myModal");
            var span = document.getElementsByClassName("close")[0];
                
            /**
             * Wyświetla modal po załadowaniu strony.
             * 
             * Wykorzystuje zdarzenie 'onload' do wywołania funkcji po załadowaniu strony.
             */
            window.onload = function() {
              modal.style.display = "block";
            }
            
            /**
             * Ukrywa modal po kliknięciu w przycisk zamykania.
             * 
             * Wykorzystuje zdarzenie 'onclick' do wywołania funkcji po kliknięciu.
             */
            span.onclick = function() {
              modal.style.display = "none";
            }
            
            /**
             * Ukrywa modal po kliknięciu poza obszarem modalu.
             * 
             * Wykorzystuje zdarzenie 'onclick' do wywołania funkcji po kliknięciu.
             */
            window.onclick = function(event) {
              if (event.target == modal) {
                modal.style.display = "none";
              }
            }