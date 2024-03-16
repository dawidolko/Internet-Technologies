

const gamesBoardContainer =  document.querySelector('#gamesboard-container') // kontener na plansze do gry
const optionContainer = document.querySelector('.option-container') // kontener z opcjami
const flipShip = document.querySelector('#flip-ship') // przycisk i zmienna odpowiedzialna za obracanie statków
const startButton = document.querySelector('#start-button') // przycisk start i rozpoczecie gry
const infoDisplay = document.querySelector('#info') // wyswietlanie informacji w trakcie gry
const turnDisplay = document.querySelector('#turn-display') 
const playerNameBoard = document.querySelector('#player-board-name') // nazwa planszy gracza
const bodyHtml = document.querySelector('#body-main')
const infoBoard = document.querySelector('#game-info')



var playerName
var theme

window.onload = function() {

    /**
 * @function window.onload
 * @description Ta funkcja jest wywoływana, gdy strona jest ładowana. 
 * Pobiera nazwę gracza i wybrany motyw z pamięci lokalnej przeglądarki, a następnie aktualizuje interfejs użytkownika zgodnie z tymi danymi. 
 * Ustawia tło strony i elementy interfejsu użytkownika zgodnie z wybranym motywem. 
 * Wyświetla również alert z instrukcjami dla gracza na początek gry.
 * @param {Event} e - Obiekt zdarzenia ładowania strony.
 */

    var playerNameJSON = localStorage.getItem('playerData')
    var themeChoiceJSON = localStorage.getItem('themeData')

    playerName = JSON.parse(playerNameJSON)
    theme = JSON.parse(themeChoiceJSON)

    playerNameBoard.textContent = `Plansza gracza: ${playerName.name}`
    console.log(theme.theme)

    // załadowanie odpowiedniego motywu za pomocą instrukcji warunkowych oraz ustawienie odpowiednich styli

    if (theme.theme == "black") {
        bodyHtml.style.background = "url(https://images.unsplash.com/photo-1529753253655-470be9a42781?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";

    } else if (theme.theme == "blue") {
        bodyHtml.style.background = "url(https://images.unsplash.com/photo-1568145675395-66a2eda0c6d7?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
        gamesBoardContainer.style.backgroundColor = "rgb(0,60,179,0.3)"
        optionContainer.style.backgroundColor = "rgb(0,60,179,0.3)"
        infoBoard.style.backgroundColor = "rgb(0,60,179,0.3)"
    } else if (theme.theme == "white") {
        bodyHtml.style.background = "url(https://images.unsplash.com/photo-1492931307820-62fa5a68e0df?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
        gamesBoardContainer.style.backgroundColor = "rgb(255,255,255,0.75)"
        optionContainer.style.backgroundColor = "rgb(255,255,255,0.75)"
        infoBoard.style.backgroundColor = "rgb(255,255,255,0.75)"
        infoBoard.style.color = "rgb(0,0,0)"
    }

    //wyświetlenie alertu odnośnie rozpoczęcia gry

    alert("Rozłóż statki na swojej planszy, następni kliknij przycisk 'Start' aby rozpocząć grę.");

}

// obracanie statku
let angle = 0
function flip(){

/**
 * @function flip
 * @description Ta funkcja obraca statki w kontenerze opcji (`optionContainer`). 
 * Jeżeli kąt obrotu (`angle`) wynosi 0, zmienia go na 90. W przeciwnym razie, resetuje go do 0. 
 * Następnie, dla każdego statku w kontenerze opcji, zmienia jego transformację CSS na `rotate(${angle}deg)`, 
 * co powoduje obrócenie statku o określony kąt.
 */

    
    const optionShips = Array.from(optionContainer.children)
        if(angle === 0){
            angle = 90
        } 
        else {
            angle = 0
        }
        optionShips.forEach(optionShip => optionShip.style.transform = `rotate(${angle}deg)`)
}

flipShip.addEventListener('click', flip)

// creating board

const width = 10

function createBoard(color, user){

    /**
 * @function createBoard
 * @description Ta funkcja tworzy planszę gry. Tworzy kontener dla planszy, nadaje mu odpowiedni kolor i identyfikator, 
 * a następnie wypełnia go blokami. Każdy blok reprezentuje jedno pole na planszy.
 * @param {string} color - Kolor tła dla planszy gry.
 * @param {string} user - Identyfikator użytkownika, który będzie używany jako identyfikator dla kontenera planszy gry.
 */


    const gameBoardContainer = document.createElement('div') // stworzenie planszy
    gameBoardContainer.classList.add('game-board')
    gameBoardContainer.style.backgroundColor = color
    gameBoardContainer.id = user

    for(let i = 0; i < width * width; i++){ // wypelnienie plansz blokami
        const block = document.createElement('div')
        block.classList.add('block')
        block.id = i
        gameBoardContainer.append(block)
    }

    gamesBoardContainer.append(gameBoardContainer)
}

createBoard('lightblue', 'player') // wywolanie funckcji do tworzenia plansz
createBoard('darkblue', 'computer')

// dodawanie statkow

class Ship{

    /**
 * @class Ship
 * @description Klasa reprezentująca statek w grze. Każdy statek ma określoną nazwę i długość.
 * @param {string} name - Nazwa statku.
 * @param {number} length - Długość statku, określająca liczbę pól, które statek zajmuje na planszy.
 */

    constructor(name, length){
        this.name = name
        this.length = length
    }
}
// stworzenie statkow
const dest = new Ship('dest', 2)
const sub = new Ship('sub', 3)
const cru = new Ship('cru', 3)
const batt = new Ship('batt', 4)
const carr = new Ship('carr', 5)

//tablica ze statkami
const ships = [dest, sub, cru, batt, carr]
let notDropped


function getValidity(allBoardBlocks, isHorizontal, startIndex, ship){

    /**
 * @function getValidity
 * @description Ta funkcja sprawdza poprawność rozmieszczenia statków w grze w statki. 
 * Sprawdza, czy statek nie wychodzi poza obszar planszy oraz czy nie nachodzi na inny statek.
 * @param {Array} allBoardBlocks - Wszystkie bloki na planszy.
 * @param {boolean} isHorizontal - Określa, czy statek jest rozmieszczony poziomie.
 * @param {number} startIndex - Indeks początkowy, od którego zaczyna się statek.
 * @param {Object} ship - Obiekt reprezentujący statek, który ma być rozmieszczony.
 * @returns {Object} Zwraca obiekt zawierający bloki statku, informację czy rozmieszczenie jest prawidłowe oraz czy bloki nie są już zajęte.
 */

    let validStart = isHorizontal ? startIndex <= width * width - ship.length ? startIndex : 
        width * width - ship.length : 
        startIndex <= width * width - width * ship.length ? startIndex : 
            startIndex - ship.length * width + width

    let shipBlocks = []

    for(let i = 0; i < ship.length; i++){
        if(isHorizontal) { 
            shipBlocks.push(allBoardBlocks[Number(validStart) + i])
        }
        else {
            shipBlocks.push(allBoardBlocks[Number(validStart) + i * width]);
        }
    }

    let valid

    if(isHorizontal) {
        shipBlocks.every((_shipBlock, index) => 
            valid = shipBlocks[0].id % width !== width - (shipBlocks.length - (index + 1)))
    } else {
        shipBlocks.every((_shipBlock, index) => 
            valid = shipBlocks[0].id < 90 + (width * index + 1)
        )
    }

    const notTaken = shipBlocks.every(shipBlock => !shipBlock.classList.contains('taken'))

    return {shipBlocks, valid, notTaken}
}

function addShipPiece(user, ship, startId){
    
    /**
 * @function addShipPiece
 * @description Ta funkcja jest odpowiedzialna za dodawanie statków do planszy gry. 
 * Działa zarówno dla gracza, jak i dla komputera. Dla komputera, rozmieszczenie statków jest losowe, 
 * natomiast dla gracza, statki są rozmieszczane na podstawie interakcji użytkownika.
 * @param {string} user - Określa, czy funkcja jest wywoływana dla gracza czy dla komputera.
 * @param {Object} ship - Obiekt reprezentujący statek, który ma być rozmieszczony.
 * @param {number} startId - Opcjonalny parametr określający indeks początkowy, od którego zaczyna się statek.
 */

    const allBoardBlocks = document.querySelectorAll(`#${user} div`)
    let randomBoolean = Math.random() < 0.5
    let isHorizontal = user === 'player' ? angle === 0 : randomBoolean
    let randomStartIndex = Math.floor(Math.random() * width * width)
    
    // 1;07
    let startIndex = startId ? startId : randomStartIndex 

    
    const { shipBlocks, valid, notTaken} = getValidity(allBoardBlocks, isHorizontal, startIndex, ship)

    if(valid && notTaken) {
        shipBlocks.forEach(shipBlock => {
            shipBlock.classList.add(ship.name)
            shipBlock.classList.add('taken')
        })
    } else {
        if (user === 'computer') addShipPiece(user, ship, startId)
        if (user === 'player') notDropped = true
    }
    
}
ships.forEach(ship => addShipPiece('computer', ship))


// przesuwanie statkow gracza
let draggedShip
const optionShips = Array.from(optionContainer.children)
optionShips.forEach(optionShip => optionShip.addEventListener('dragstart', dragStart))

const allPlayerBlocks = document.querySelectorAll('#player div')
allPlayerBlocks.forEach(playerBlock => {
    playerBlock.addEventListener('dragover', dragOver)
    playerBlock.addEventListener('drop', dropShip)
})

function dragStart(e) {

    /**
 * @function dragStart
 * @description Ta funkcja jest wywoływana, gdy gracz zaczyna przeciągać statek. 
 * Ustawia zmienną `draggedShip` na statek, który jest aktualnie przeciągany.
 * @param {Event} e - Obiekt zdarzenia przeciągania.
 */

    notDropped = false
    draggedShip = e.target
}

function dragOver(e) {

    /**
 * @function dragOver
 * @description Ta funkcja jest wywoływana, gdy gracz przeciąga statek nad planszą. 
 * Zapobiega domyślnemu zachowaniu przeglądarki i podświetla obszar, na który statek może zostać upuszczony.
 * @param {Event} e - Obiekt zdarzenia przeciągania.
 */

    e.preventDefault()
    const ship = ships[draggedShip.id]
    highLightArea(e.target.id, ship)
}

function dropShip(e) {

    /**
 * @function dropShip
 * @description Ta funkcja jest wywoływana, gdy gracz upuszcza statek na planszy. 
 * Wywołuje funkcję `addShipPiece` z identyfikatorem bloku, na którym statek został upuszczony (`startId`), 
 * oraz statkiem, który został upuszczony (`ship`). Jeżeli statek został prawidłowo umieszczony na planszy, 
 * jest on usuwany z listy statków do rozmieszczenia.
 * @param {Event} e - Obiekt zdarzenia upuszczenia.
 */

    const startId = e.target.id
    const ship = ships[draggedShip.id]
    addShipPiece('player', ship, startId)
    if(!notDropped){
        draggedShip.remove()
    }
}

// dodanie cienia

function highLightArea(startIndex, ship){

    /**
 * @function highLightArea
 * @description Ta funkcja jest odpowiedzialna za podświetlanie obszaru na planszy gracza, 
 * gdzie statek może zostać umieszczony. Obszar jest podświetlany tylko wtedy, gdy rozmieszczenie statku jest prawidłowe 
 * i żadne z pól nie jest już zajęte.
 * @param {number} startIndex - Indeks początkowy, od którego zaczyna się statek.
 * @param {Object} ship - Obiekt reprezentujący statek, który ma być rozmieszczony.
 */


    const allBoardBlocks = document.querySelectorAll('#player div')
    let isHorizontal = angle === 0

    const { shipBlocks, valid, notTaken } = getValidity(allBoardBlocks, isHorizontal, startIndex, ship)
    
    if(valid && notTaken){
        shipBlocks.forEach(shipBlock => {
            shipBlock.classList.add('hover')
            setTimeout(() =>  shipBlock.classList.remove('hover'), 500)
        })
    }
}

let gameOver = false
let playerTurn

//zliczanie poszczególnych strzałów

var playerHitsNumber = document.querySelector('#hits')
var shotsNumber = document.querySelector('#shoots')
var missedShots = document.querySelector('#missed')

let missedShotsNumber = 0
let playerHitsNumberNumber = 0
let shotsNumberNumber = 0


// start

function startGame(){

    /**
 * @function startGame
 * @description Ta funkcja jest odpowiedzialna za rozpoczęcie gry. 
 * Sprawdza, czy wszystkie statki gracza zostały rozmieszczone na planszy. 
 * Jeżeli tak, gra się rozpoczyna i tura przechodzi do gracza. 
 * W przeciwnym razie, gracz jest proszony o rozmieszczenie wszystkich swoich statków.
 */

    if(playerTurn === undefined){
        if(optionContainer.children.length != 0){
            infoDisplay.textContent = 'Rozłóż wszystkie swoje statki na planszy!'
        } else{
            const allBoardBlocks = document.querySelectorAll('#computer div')
            allBoardBlocks.forEach(block => block.addEventListener('click', handleClick))
            playerTurn = true
            turnDisplay.textContent = 'Twoja tura!'
            infoDisplay.textContent = 'Gra się zaczęła!'
            startButton.style.animation = "none"
            flipShip.style.animation = "none"
        }
        
    }

}

startButton.addEventListener('click', startGame)

//przechowywanie trafien oraz zatopionych statków

let playerHits = []
let computerHits = []
const playerSunkShips = []
const computerSunkShips = []

function handleClick(e){

    /**
 * @function handleClick
 * @description Ta funkcja obsługuje ruchy gracza w grze w statki. 
 * Gracz wykonuje ruch, klikając na pole na planszy komputera. 
 * Funkcja sprawdza, czy pole jest już trafione, czy jest zajęte przez statek i czy jest puste. 
 * Na podstawie tych informacji, funkcja aktualizuje stan gry i przygotowuje grę na ruch komputera.
 * @param {Event} e - Obiekt zdarzenia kliknięcia.
 */

    if(!gameOver){

        if(e.target.classList.contains('boom') && e.target.classList.contains('taken')){
            infoDisplay.textContent = "Przcież ten statek został trafiony! Utrata tury!"
            shotsNumberNumber++
            missedShotsNumber++
        }
        if(e.target.classList.contains('taken') && !e.target.classList.contains('boom')){
            e.target.classList.add('boom')
            infoDisplay.textContent = "Trafiłeś wrogi statek!"
            boomAUDIO.play()
            shotsNumberNumber++
            playerHitsNumberNumber = shotsNumberNumber - missedShotsNumber
            let classes = Array.from(e.target.classList)
            classes = classes.filter(className => className !== 'block')
            classes = classes.filter(className => className !== 'boom')
            classes = classes.filter(className => className !== 'taken')
            playerHits.push(...classes)
            checkScore('player', playerHits, playerSunkShips)
        }
        if(!e.target.classList.contains('taken') && !e.target.classList.contains('boom')) {
            infoDisplay.textContent = "Pudło!"
            missAUDIO.play()
            e.target.classList.add('empty')
            shotsNumberNumber++
            missedShotsNumber++
        }
        
        playerTurn = false
        const allBoardBlocks = document.querySelectorAll('#computer div')
        allBoardBlocks.forEach(block => block.replaceWith(block.cloneNode(true)))
        setTimeout(computerGo, 3000)

        shotsNumber.textContent = ` ${shotsNumberNumber}`
        playerHitsNumber.textContent = `${playerHitsNumberNumber}`
        missedShots.textContent = `${missedShotsNumber}`
    }
    
}

// tura komputera

//audio 
let boomAUDIO = new Audio('sounds/boom.mp3')
let missAUDIO = new Audio('sounds/miss.mp3')
let audioWIN = new Audio('sounds/win.mp3')
let audioLOSE = new Audio('sounds/lose.mp3')
let sinkShipAudio = new Audio('sounds/destroyed-ship.mp3')

let muteCheckbox = document.getElementById('mute');


muteCheckbox.addEventListener('change', function() {

/**
 * @function muteCheckbox.addEventListener
 * @description Ta funkcja jest wywoływana, gdy stan pola wyboru 'muteCheckbox' ulega zmianie. 
 * Jeżeli pole jest zaznaczone, wszystkie dźwięki w grze są wyciszane. 
 * Jeżeli pole jest odznaczone, wszystkie dźwięki w grze są odtwarzane.
 * 
 */

    if(this.checked) {
        boomAUDIO.muted = true
        missAUDIO.muted = true
        audioWIN.muted = true
        audioLOSE.muted = true
        sinkShipAudio.muted = true
    } else {
        boomAUDIO.muted = false
        missAUDIO.muted = false
        audioWIN.muted = false
        audioLOSE.muted = false
        sinkShipAudio.muted = false
    }
})

function computerGo(){

/**
 * @function computerGo
 * @description Ta funkcja symuluje ruch komputera w grze w statki. 
 * Komputer wybiera losowo pole na planszy gracza do strzału. 
 * Funkcja sprawdza, czy pole jest już trafione, czy jest zajęte przez statek i czy jest puste. 
 * Na podstawie tych informacji, funkcja aktualizuje stan gry i przygotowuje grę na ruch gracza.
 */


    if(!gameOver){
        turnDisplay.textContent = 'Tura bota.'
        infoDisplay.textContent = 'Bot celuje . . .'

        setTimeout(() => {
            let randomGo = Math.floor(Math.random() * width * width)
            const allBoardBlocks = document.querySelectorAll('#player div')

            if(allBoardBlocks[randomGo].classList.contains('taken') &&
               allBoardBlocks[randomGo].classList.contains('boom')
            ){
                computerGo()  
                return
            } else if (
                allBoardBlocks[randomGo].classList.contains('taken') &&
                !allBoardBlocks[randomGo].classList.contains('boom')
            ) {
                allBoardBlocks[randomGo].classList.add('boom')
                infoDisplay.textContent = 'Bot trafił w twój statek!'
                boomAUDIO.play()
                let classes = Array.from(allBoardBlocks[randomGo].classList)
                classes = classes.filter(className => className !== 'block')
                classes = classes.filter(className => className !== 'boom')
                classes = classes.filter(className => className !== 'taken')
                computerHits.push(...classes)
                checkScore('computer', computerHits, computerSunkShips)

            } else{
                infoDisplay.textContent = 'Pudło!'
                missAUDIO.play()
                allBoardBlocks[randomGo].classList.add('empty')
            }
        }, 3000)

        setTimeout(() => {
            playerTurn = true
            turnDisplay.textContent = `Tura gracza: ${playerName.name}`
            infoDisplay.textContent = 'Oddaj strzał!'
            const allBoardBlocks = document.querySelectorAll('#computer div')
            allBoardBlocks.forEach(block => block.addEventListener('click', handleClick))

        }, 6000)
    }
}

function checkScore(user, userHits, userSunkShips){

    /**
 * @function checkScore
 * @description Ta funkcja sprawdza, czy którykolwiek z graczy zatopił wszystkie statki przeciwnika.
 * Dla każdego rodzaju statku, sprawdza, czy wszystkie jego części zostały trafione. Jeżeli tak, statek jest zatopiony.
 * Jeżeli gracz zatopił wszystkie statki komputera, gracz wygrywa grę.
 * Jeżeli komputer zatopił wszystkie statki gracza, komputer wygrywa grę.
 * @param {string} user - Określa, czy funkcja jest wywoływana dla gracza czy dla komputera.
 * @param {Array} userHits - Tablica zawierająca wszystkie trafienia danego użytkownika.
 * @param {Array} userSunkShips - Tablica zawierająca wszystkie zatopione statki danego użytkownika.
 */
    
    function checkShip(shipName, shipLength) {
        if(userHits.filter(storedShipName => storedShipName === shipName).length === shipLength){
            let sinkedShip
            if(shipName === 'cru') { sinkedShip = "krążownik"} 
            if(shipName === 'sub') { sinkedShip = "łódź podwodna" }
            if(shipName === 'carr') { sinkedShip = "lotniskowiec" }
            if(shipName === 'dest') { sinkedShip = "niszczyciel" }
            if(shipName === 'batt') { sinkedShip = "okręt bojowy" }
            

            if(user === 'player'){
                infoDisplay.textContent = `Zatopiłeś/aś ${sinkedShip} bota!`
                sinkShipAudio.play()
                playerHits = userHits.filter(storedShipName => storedShipName !== shipName)
            }
            if(user === 'computer'){
                infoDisplay.textContent = `Bot zatopił twój ${sinkedShip}!`
                sinkShipAudio.play()
                computerHits = userHits.filter(storedShipName => storedShipName !== shipName)
            }
            userSunkShips.push(shipName)
        }
    }

    checkShip('dest', 2)
    checkShip('sub', 3)
    checkShip('cru', 3)
    checkShip('batt', 4)
    checkShip('carr', 5)

    console.log('playerHits', playerHits)
    console.log('playerSunkShips', playerSunkShips)



    if(playerSunkShips.length === 5){
        audioWIN.play();
        infoDisplay.textContent = 'WYGRANA! Zatopiłeś/aś wszystkie statki bota!';
        boomAUDIO.muted = true;
        audioWIN.play();
        setTimeout(function() {
            // Pusty blok kodu
        }, 3000);
        alert('WYGRANA! Zatopiłeś/aś wszystkie statki bota!', audioWIN.play());
        gameOver = true;
    }
    if(computerSunkShips.length === 5){
        audioLOSE.play();
        infoDisplay.textContent = 'PRZEGRANA! Bot zatopił wszystkie twoje statki!';
        boomAUDIO.muted = true;
        audioLOSE.play();
        setTimeout(function() {
            // Pusty blok kodu
        }, 3000);
        alert('PRZEGRANA! Bot zatopił wszystkie twoje statki!',  audioLOSE.play());
        gameOver = true;
    }

}

var slider = document.getElementById("myRange");

// Aktualizacja skali diva za każdym razem, gdy suwak jest przesuwany
slider.oninput = function() {

    /**
 * @function slider.oninput
 * @description Ta funkcja jest wywoływana, gdy suwak zmienia swoją wartość. 
 * Aktualizuje skalę i margines kontenera planszy gry (`gamesBoardContainer`) na podstawie wartości suwaka.
 * @param {Event} e - Obiekt zdarzenia zmiany wartości suwaka.
 */

    gamesBoardContainer.style.transform = "scale(" + this.value + ")"
    gamesBoardContainer.style.margin = this.value * 50 + "px";
}

function myFunction() {

    /**
 * @function myFunction
 * @description Ta funkcja odświeża stronę, co skutkuje zresetowaniem gry do stanu początkowego.
 */

    location.reload()
}
