const text = 'This is an example string';

// wyszukanie czy tekst zawiera frazę
console.log(text.includes('example'));

// łańcuch znaków można przeglądać jak tablicę
for (let ch of text) {
    console.log(ch);
}

// wykorzystując in zamiast of iterujemy po indeksach a nie wartościach
for (let i in text) {
    console.log(text[i]);
}

// chcąc przykładowo wypisać tekst bez ostatniej litery, ale jako jedno słowo
// można wykorzystać taką instrukcję:
let newText = '';
for (let ch in text) {
    if (ch < text.length - 1) {
        newText += text[ch];
    }
}
console.log(newText);


// Podział łańcucha znaków stosując odpowiedni separator
// tutaj jest to spacja
for (let word of text.split(' ')) {
    console.log(word);
}

// wynikiem split jest tablica łańcuchów znaków
console.log(text.split(' '));

// tworzymy akapit, który
// będzie składał sie ze złożenia tekstu
// i znacznika span
const pElem = document.createElement('p');


for (let word of text.split(' ')) {
    // z jakiegoś powodu chcemy zaznaczyć słowo is na czerowono
    // wszystkie inne słowa dodajemy jako zwykły tekst
    if (word !== 'is') {
        pElem.append(document.createTextNode(word + ' '));
    } else {
        // słowo 'is' dodajemy jako span, z odpowiednim stylem
        const span = document.createElement('span');
        span.style.color = 'blue';
        span.innerText = word + ' ';
        pElem.append(span);
    }
    document.body.append(pElem);
}




