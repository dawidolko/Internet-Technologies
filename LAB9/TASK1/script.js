// script.js

// Deklaracje zmiennych
let zmiennaLet = 'wartość let';
const zmiennaConst = 'wartość const';
var zmiennaVar = 'wartość var';

// Przypisanie i operacje
zmiennaLet = 10; // zmiana wartości zmiennej let
zmiennaVar = true; // zmiana wartości zmiennej var

// Operacje arytmetyczne
let a = "3.45";
let b = 4;
let c = true;
let d;
let e = [];

// Wykonanie operacji arytmetycznych
let wynik1 = a + b; // Konkatenacja stringu z liczbą, wynik będzie stringiem "3.454"
let wynik2 = b * c; // Mnożenie liczby przez boolean, true jest traktowane jako 1, wynik to 4
let wynik3 = a * b; // Mnożenie stringu przez liczbę, JavaScript próbuje przekonwertować string na liczbę, wynik to 13.8

console.log(wynik1); // "3.454"
console.log(wynik2); // 4
console.log(wynik3); // 13.8

// Sprawdzenie typu danych
console.log(typeof zmiennaLet); // number
console.log(typeof zmiennaVar); // boolean
