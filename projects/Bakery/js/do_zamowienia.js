// Globalna tablica do przechowywania danych zamówień
let tablicaZamowien = [];

// Zmienna do iteracji po tablicy zamówień
let i = 0;

/**
 * Główna funkcja inicjująca, która jest wywoływana po załadowaniu całego dokumentu.
 * Dodaje nasłuchiwacze zdarzeń do elementów formularza, umożliwiając obsługę zdarzeń.
 */
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("formularz-zamowienia");
    form.addEventListener("submit", obsluzFormularz);
});

/**
 * Funkcja obsługująca zdarzenie wysłania formularza. Zapobiega domyślnej akcji przeglądarki,
 * zbiera dane z formularza, tworzy obiekt zamówienia, dodaje go do tablicy zamówień,
 * aktualizuje tabelę zamówień na stronie i wyświetla powiadomienie.
 * 
 * @param {Event} e - Obiekt zdarzenia przekazywany do funkcji obsluzFormularz, aby zapobiec domyślnej akcji.
 */
function obsluzFormularz(e) {
    e.preventDefault();

    // Zbieranie danych z formularza
    const imie = document.getElementById("imie").value;
    const nazwisko = document.getElementById("nazwisko").value;
    const email = document.getElementById("email").value;
    const telefon = document.getElementById("telefon").value;
    const miasto = document.getElementById("miasto").value;
    const kodPocztowy = document.getElementById("kod-pocztowy").value;
    const ulica = document.getElementById("ulica").value;
    const numer = document.getElementById("nr-budynku").value;
    const pieczywo = document.getElementById("pieczywo").value;
    const ilosc = document.getElementById("ilosc").value;
    const maka = document.querySelector("input[name='maka']:checked").value;

    // Tworzenie obiektu zamówienia z zebranych danych
    const zamowienie = {
        "imie": imie,
        "nazwisko": nazwisko,
        "email": email,
        "telefon": telefon,
        "miasto": miasto,
        "kodPocztowy": kodPocztowy,
        "ulica": ulica,
        "numer": numer,
        "pieczywo": pieczywo,
        "ilosc": ilosc,
        "maka": maka
    };

    // Dodawanie zamówienia do globalnej tablicy zamówień
    tablicaZamowien.push(zamowienie);

    // Aktualizacja tabeli zamówień na stronie
    dodajZamowienieDoTabeli();

    // Wyświetlenie powiadomienia dla użytkownika
    alert("Dziękujemy za złożenie zamówienia, " + zamowienie.imie + "!");
}


/**
 * Funkcja dodająca ostatnie zamówienie z tablicy zamówień do tabeli na stronie.
 * Iteruje przez tablicę zamówień i dodaje nowy wiersz do tabeli dla każdego zamówienia.
 */
function dodajZamowienieDoTabeli() {
    const tabela = document.getElementById("tabela-zamowien").getElementsByTagName('tbody')[0];

    // Tworzenie nowego wiersza w tabeli dla zamówienia
    const wiersz = tabela.insertRow();

    // Tworzenie komórek w wierszu i przypisanie im wartości z obiektu zamówienia
    const imieKomorka = wiersz.insertCell(0);
    const nazwiskoKomorka = wiersz.insertCell(1);
    const pieczywoKomorka = wiersz.insertCell(2);
    const iloscKomorka = wiersz.insertCell(3);

    // Przypisanie wartości do komórek
    imieKomorka.innerHTML = tablicaZamowien[i].imie;
    nazwiskoKomorka.innerHTML = tablicaZamowien[i].nazwisko;
    pieczywoKomorka.innerHTML = tablicaZamowien[i].pieczywo;
    iloscKomorka.innerHTML = tablicaZamowien[i].ilosc;

    // Inkrementacja indeksu dla kolejnych zamówień
    i++;
}