const tablica = ['Jan', 'Maria', 'Adam'];

const tablica2 = [-10, 20, 5, 5]

// domyślnie zdefiniowany jest dość nieoczywisty
// sposób sortowania:  elements are sorted by converting them to strings and comparing strings in UTF-16 code units order.
// co w przypadku sortowania liczb daje dość nieoczekiwany rezultat
console.log(tablica.sort());
console.log(tablica2.sort());

// Chcąc mieć większą kontrolę nad sortowaniem należy podać funkcję porównującą
// tj. compareFunction, tutaj sortujemy liczby rosnąco
console.log(tablica2.sort((a,b) => {
    if (a > b) {
        return -1; // -1 ustaw a przed b
    }
    if (b > a) {
        return 1; // 1 ustaw b przed a
    }
    return 0; // nie zmieniaj położenia a i b
}));

// Sortowanie malejące jest możliwe do uzyskania
// np. poprzez odwrócenie wartości zwracanej przez funkcję  
console.log(tablica2.sort((a,b) => {
    if (a > b) {
        return 1; // -1 ustaw a przed b
    }
    if (b > a) {
        return -1; // 1 ustaw b przed a
    }
    return 0; // nie zmieniaj położenia a i b
}));

// Możliwe jest napisanie sortowania liczb "skrócony", korzystając
// z własności, że wartość funkcji porównującej może wykraczać poza
// -1 i 1. Zatem zwykłe odejmowanie sprawi, że jeżeli różnica będzie
// dodatnia, to będzie to równoważne 1, a jeżeli ujemna -1
console.log(tablica2.sort((a,b) => a-b));

// Na tej samej zasadzie można zdefiniować sortowanie malejące
console.log(tablica2.sort((a,b) => b-a));

// W przypadku łańcuchów znaków niekoniecznie
// możliwe jest zastosowanie skróconej postaci
// nie uzyskujemy ani alfabetycznego sortowania malejącego
// ani rosnącego
console.log(['Jan', 'Maria', 'Adam'].sort((a,b) => a-b));
console.log(['Jan', 'Maria', 'Adam'].sort((a,b) => b-a));

// Wykorzystanie konstrukcji takiej jak do do sortowania
// liczb spełnia jednak swoją rolę
console.log(tablica.sort((a,b) => {
    if (a > b) {
        return 1; // -1 ustaw a przed b
    }
    if (b > a) {
        return -1; // 1 ustaw b przed a
    }
    return 0; // nie zmieniaj położenia a i b
}));
console.log(tablica.sort((a,b) =>{
if (a > b) {
    return -1;
}
if (b > a) {
    return 1;
}
return 0;
} ));

// CO WAŻNE wywołanie metody sort MUTUJE oryginalną tablicę.
// Zatem tablica ma teraz taką kolejność elementów, jak wynik
// ostatniego sortowania na niej wywołanego
console.log(tablica);
console.log(tablica2);

// Przeglądanie elementów tablicy

// za pomocą klasyczego indeksu
for (let i=0; i < tablica.length; i++) {
    console.log(tablica[i]);
}

// za pomocą pętli w typie for each
for (let elem of tablica) {
    console.log(elem);
}

// Wyszukiwanie elementu tablicy

console.log(tablica2.find((elem) => elem === 1));
console.log(tablica2.find((elem) => elem === 5));
// żeby stwiedzić, że element występuje w tablicy
// porównujemy wynik z undefined
if (tablica2.find((elem) => elem === 5) !== undefined) {
    console.log('Tablica tablica2 zawiera 5');
}
if (tablica2.find((elem) => elem === 1) === undefined) {
    console.log('Tablica tablica2 nie zawiera 1');
}

// alternatywnie można zastosować metodę indexOf
console.log(tablica2.indexOf(5));
console.log(tablica2.indexOf(1));
if (tablica2.indexOf(5) !== -1) {
    console.log('Tablica tablica2 zawiera 5');
}

if (tablica2.indexOf(1) === -1) {
    console.log('Tablica tablica2 nie zawiera 1');
}

// reduce jest rodzajem odwzorowania tablicy, które
// zmniejsza ją o jeden wymiar

// policzenie sumy tablicy za pomocą reduce
// konstrukcja ta działa w ten sposób, że do wartości
// początkowej, ustawionej na 0, dodawany jest bieżący element
// tablicy, po czym wartość ta jest zapamiętywana w tzw. akumulatorze,
// który zostanie zwrócony jako wynik działania reduce 
console.log(tablica2.reduce((accumulator, elem) => accumulator + elem, 0));

// Tutaj pokazano kod działający równoważnie do reduce
let accumulator = 0;
for (let elem of tablica2) {
    accumulator += elem;
}
console.log(accumulator);


