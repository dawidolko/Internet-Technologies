// pobieramy referencję do canvas
const canvas = document.getElementById('canvas');
let position = {x: 100, y:140};

function drawCircleInPosition(ctx, position) {
    ctx.beginPath();
    // rysujemy okrąg o średnicy 50 pikseli, o środku
    // w position.x, position.y. Okrąg jest pełny, tj.
    // rysowany od 0 do 2PI radianów
    ctx.arc(position.x, position.y, 50, 0, Math.PI * 2);
    ctx.stroke();
}

function drawFigure(ctx, position) {
    // chcemy narysować dwa trójkąty, które
    // są złączone jednym bokiem

    // poglądowo rysujemy gdzie znajduje się
    // pozycja początkowa, lewy dolny róg figury
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.rect(position.x, position.y, 3, 3);
    ctx.fill();


    ctx.fillStyle = 'black';
    ctx.beginPath();
    // rozpoczynamy rysowanie w pozycji wyjściowej
    ctx.moveTo(position.x , position.y);
    // kolejny wierzchołek znajduje się 30 pikseli na prawo od pozycji wyjściowej
    ctx.lineTo(position.x + 30, position.y);
    // kolejny wierzchołek znajduje się 30 pikseli na prawo i 60 w górę od pozycji wyjściowej
    ctx.lineTo(position.x + 30, position.y - 60);
    ctx.fill();

    ctx.beginPath();
    // tutaj rozpoczynamy rysowanie 30 pikseli na prawo od pozycji wyjściowej
    ctx.moveTo(position.x + 30, position.y);
    ctx.lineTo(position.x + 60, position.y);
    ctx.lineTo(position.x + 30, position.y - 60);
    ctx.stroke();

}

function drawAllCanvas() {
// kiedy canvas jest już "gotowe", tj. załadowane w pełni
    if (canvas.getContext) {
        // pobieramy contekst do rysowania w 2D
        const ctx = canvas.getContext("2d"); 

        // usuwa dotychczasową zawartość płótna
        ctx.reset();

        // rysujemy wypełniony prostokąt
        ctx.fillStyle = "red";
        ctx.beginPath();
        // 0 - lewy górny róg prostokąta na osi x
        // 0 - lewy górny róg prostokąta na osi y
        // 300 - szerokość prostokąta w px
        // 20 - wysokość prostokątaw w px
        ctx.rect(0, 0, 300, 20);
        ctx.fill();

        // Możemy wywoływać rysowanie okręgów tak
        drawCircleInPosition(ctx, {x: 50, y:70});
        drawCircleInPosition(ctx, {x: 30, y:70});

        // Możemy również tak:
        // Wtedy pozycja drugiego jest zależna od pierwszego
        const first = {x: 50, y:70};
        drawCircleInPosition(ctx, first);
        drawCircleInPosition(ctx, {x: first.x-20, y: first.y});

        drawFigure(ctx, position);

    }
}

document.body.addEventListener('mouseup', (e) => {
    // wciśnięto lewy przycisk myszy
    if (e.button === 0) {
        position.y++;
        // przerysowujemy canvas
        drawAllCanvas();
    }

    // wciśnięto prawy przycisk myszy
    if (e.button === 2) {
        position.y--;
        drawAllCanvas();
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        position.y++;
        drawAllCanvas();
    }
});


// narysowanie canvas po raz pierwszy
drawAllCanvas();
