/**
 * Funkcja `przejscie` odpowiada za cykliczne przełączanie obrazów w karuzeli.
 * Wykorzystuje prostą animację, w której każdy obraz jest wyświetlany po kolei.
 */
function przejscie() {
    /**
     * Zmienna `i` służy jako licznik w pętli `for`.
     * @type {number}
     */
    var i;
  
    /**
     * Zmienna `x` przechowuje kolekcję elementów DOM, które są zdjęciami do przejścia.
     * @type {HTMLCollection}
     */
    var x = document.getElementsByClassName("zdjęciaDoPrzejscia");
  
    // Ukrywanie wszystkich obrazów przed pokazaniem następnego.
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
  
    /**
     * Zmienna `idneks` przechowuje aktualny indeks obrazu do wyświetlenia.
     * Zostaje zwiększona o 1 przy każdym wywołaniu funkcji, 
     * a następnie zresetowana do 1, gdy osiągnie długość tablicy obrazów.
     * @type {number}
     */
    idneks++;
  
    // Resetowanie indeksu, jeśli przekroczył liczbę obrazów.
    if (idneks > x.length) { idneks = 1 }
  
    // Wyświetlanie obrazu o aktualnym indeksie.
    x[idneks - 1].style.display = "block";
  
    /**
     * Ustawienie opóźnienia przed następnym przejściem.
     * Wywołanie funkcji `przejscie` po upływie 3500 milisekund (3,5 sekundy).
     */
    setTimeout(przejscie, 3500);
  }
  
  // Inicjalizacja karuzeli przez wywołanie funkcji `przejscie`.
  var idneks = 0;
  przejscie();
  