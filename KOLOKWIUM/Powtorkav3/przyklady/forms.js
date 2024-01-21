const elems = document.forms[0].elements;
const input = document.forms[0].elements[0];

function submitForm(event) {
    // załóżmy że chcemy wymusić, aby
    // pole tekstowe zawierało znak @
    if (!input.value.includes('@')) {
        // przerywamy domyślne zachowanie zdarzenia
        event.preventDefault();
        // rzucamy wyjątek
        throw new Error('The value of this input must contains @.');
    }
    // Jeżeli wszystko jest w porządku zasadniczo formularz zostanie wysłany
    // wtedy zaobserwujemy w domyślnym ustawieniu że do adresy URL dopisano
    // wartość pola tekstowego
}