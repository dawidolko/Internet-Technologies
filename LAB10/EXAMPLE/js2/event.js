{/* <button id="btn" onclick="handler(event)">przycisk</button> */}
function handler(event) {
    console.log(event.target);
    console.log('Został wciśnięty przycisk');
    event.target.innerText = 'Zmieniono napis';
}

// <button onclick="this.innerText = 'zmieniony tekst'">przycisk2</button>

// <button id="btn2" onclick="handler2()">przycisk2</button>
function handler2() {
document.getElementById('btn2').innerText = 'zmieniony';
}