//deklaracja stałych i innych zmiennych
const stała = 10;
let zmienna = 20;

//deklaracja pętli for while
for (let i = 0; i < 5; i++) { /* kod */ }
let j = 0; while (j < 5) { /* kod */ j++; }

//tablice i jej funkcje wbudowane
let tablica = [1, 2, 3];
let długość = tablica.length;
let filtr = tablica.filter(x => x > 1);
let sort = tablica.sort();
let zawiera = tablica.includes(2);

//obiekty document i operacje na DOM
let element = document.getElementById('id');
let tags = document.getElementsByTagName('div');
document.body; document.forms;
element.append(child); element.replaceChildren();
let newEl = document.createElement('div');
newEl.setAttribute('class', 'klasa');
newEl.innerText = 'Tekst';

//tworzenie zewnetrznych skryptow
<script src="sciezka_do_skryptu.js"></script>

//pisanie funckji
function bezArgumentów() { /* kod */ }
function zArgumentami(a, b) { /* kod */ }

//tworzenie obiektów (object literal)
let obiekt = {
    właściwość: 'wartość',
    metoda: function() { return this.właściwość; },
    innyObiekt: { klucz: 'wartość' }
  };

//rzucanie wyjątków 
throw new Error('Komunikat błędu');

//API Canvas
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 100, 100); // Prostokąt

//operacje na łańcuchach znaków
let string = 'tekst';
string.includes('te'); // true
string.split('e'); // ['t', 'kst']
string.startsWith('te'); // true

//Tworzenie tabeli z danych tablicy
let dane = [['A', 'B'], ['C', 'D']];
let tabela = document.createElement('table');
dane.forEach(row => {
  let tr = document.createElement('tr');
  row.forEach(cell => {
    let td = document.createElement('td');
    td.innerText = cell;
    tr.appendChild(td);
  });
  tabela.appendChild(tr);
});
document.body.appendChild(tabela);

//zapytanie REST z fech
fetch('url_api')
  .then(response => response.json())
  .then(data => { /* operacje na danych */ });

//konwersja typów 
let num = 123;
let str = num.toString();
let int = Number.parseInt(str);
let float = Number.parseFloat(str);

//zdarzenia 
element.onclick = function() { /* kod */ };
element.addEventListener('keydown', (e) => { /* kod */ });

//Sortowanie i filtrowanie elementów DOM

//Walidacje formularza
form.onsubmit = function() {
    // logika walidacji
    return false; // zatrzymuje wysyłanie formularza
};  