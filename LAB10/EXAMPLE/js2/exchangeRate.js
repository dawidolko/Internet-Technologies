    const exchangeRate = [{"currency":"dolar amerykański","code":"USD","mid":3.9432},
    {"currency":"dolar australijski","code":"AUD","mid":2.6897},
    {"currency":"dolar Hongkongu","code":"HKD","mid":0.5046},
    {"currency":"dolar kanadyjski","code":"CAD","mid":2.9752},
    {"currency":"dolar nowozelandzki","code":"NZD","mid":2.4884},
    {"currency":"dolar singapurski","code":"SGD","mid":2.9809}];

const HTMLTable = document.createElement('table');
const header = document.createElement('tr');
const currency = document.createElement('th');
currency.innerText = 'Waluta';
const currencyCode = document.createElement('th');
currencyCode.innerText = 'Kod waluty';
const meanExchangeRate = document.createElement('th');
meanExchangeRate.innerText = 'Kurs średni';
header.appendChild(currency);
header.appendChild(currencyCode);
header.appendChild(meanExchangeRate);
HTMLTable.appendChild(header);
for (let curr of exchangeRate) {
    const row = document.createElement('tr');
    const currency = document.createElement('td');
    currency.innerText = curr.currency;
    const currencyCode = document.createElement('td');
    currencyCode.innerText = curr.code;
    const meanExchangeRate = document.createElement('td');
    meanExchangeRate.innerText = curr.mid;
    row.append(currency);
    row.append(currencyCode);
    row.append(meanExchangeRate);
    HTMLTable.appendChild(row);
}
document.body.append(HTMLTable);

HTMLTable.style.borderCollapse = 'collapse';
for (let child of HTMLTable.children) {
child.style.border = '1px solid black';
for (let grandchild of child.children) {
grandchild.style.border = '1px solid black';
}}

const HTMLTable2 = HTMLTable.cloneNode(true); // tworzymy kopię elementu zanim potem zmodyfikujemy mu style, true oznacza, że kopiujemy element z potomkami
HTMLTable.style.borderCollapse = 'collapse';
for (let child of HTMLTable.children) {
child.style.border = '1px solid black';
for (let grandchild of child.children) {
grandchild.style.border = '1px solid black';
}
}
HTMLTable2.setAttribute('class', 'my-table');

document.body.append(HTMLTable);
document.body.append(HTMLTable2);

// .my-table {
// border-collapse: collapse;
// }
// .my-table * {
// border: 1px solid black;
// }