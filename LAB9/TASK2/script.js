// Sposób 1: Definicja funkcji
function mojaFunkcja1() {
    console.log('Wywołano mojaFunkcja1');
  }
  
  // Sposób 2: Wyrażenie funkcyjne
  const mojaFunkcja2 = function() {
    console.log('Wywołano mojaFunkcja2');
  };
  
  // Sposób 3: Funkcja strzałkowa (Arrow function)
  const mojaFunkcja3 = () => {
    console.log('Wywołano mojaFunkcja3');
  };
  
  // Sposób 4: Konstruktor Function
  const mojaFunkcja4 = new Function('console.log("Wywołano mojaFunkcja4")');
  
  // Funkcje jako obiekty:
  let mojaFunkcja5 = function() {
    console.log('Funkcja została wywołana');
  };
  
  // Wywołanie funkcji
  mojaFunkcja5();
  
  // Funkcje mogą być przekazywane jako argumenty do innych funkcji
  function wykonajFunkcje(funkcja) {
    funkcja();
  }
  
  wykonajFunkcje(mojaFunkcja5);
  
  // Funkcje mogą być zwracane przez inne funkcje
  function stworzFunkcje() {
    return function() {
      console.log('Funkcja zwrócona przez inną funkcję');
    };
  }
  
  const nowaFunkcja = stworzFunkcje();
  nowaFunkcja();
  
  // Funkcje mogą posiadać właściwości i metody
  function mojaFunkcja6() {}
  mojaFunkcja6.nazwa = 'Funkcja testowa';
  console.log(mojaFunkcja6.nazwa); // "Funkcja testowa"
  
  // Funkcje przyjmujące nieograniczoną liczbę argumentów
  function przyklad(...params) {
    console.log(params);
  }
  
  przyklad(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  
  // Funkcja obliczająca średnią arytmetyczną
  function arithmeticMean(...numbers) {
    return numbers.reduce((a, b) => a + b, 0) / numbers.length;
  }
  
  console.log(arithmeticMean(1, 2, 3, 4, 5)); // Zwróci średnią arytmetyczną
  