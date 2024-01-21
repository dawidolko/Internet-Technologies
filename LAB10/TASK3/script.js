let weatherData = {};
let searchedCities = {};


const cityCoordinates = {
    'Warszawa': { lat: 52.237049, lon: 21.017532 },
    'Kraków': { lat: 50.049683, lon: 19.944544 },
    'Rzeszów': { lat: 50.041187, lon: 21.999121 },
    'Gdańsk': { lat: 54.372158, lon: 18.638306 },
    'Poznań': { lat: 52.409538, lon: 16.931992 },
    'Wrocław': { lat: 51.107883, lon: 17.038538 },
    'Szczecin': { lat: 53.428544, lon: 14.552812 },
    'Łódź': { lat: 51.759248, lon: 19.455983 },
    'Katowice': { lat: 50.270908, lon: 19.039993 },
    'Bydgoszcz': { lat: 53.123482, lon: 18.008438 },
    'Lublin': { lat: 51.246454, lon: 22.568446 },
    'Białystok': { lat: 53.13333, lon: 23.16433 },
    'Kielce': { lat: 50.866077, lon: 20.628568 },
    'Olsztyn': { lat: 53.770226, lon: 20.490189 },
    'Opole': { lat: 50.675107, lon: 17.921298 },
    'Gorzów Wielkopolski': { lat: 52.73679, lon: 15.22878 },
    'Zielona Góra': { lat: 51.935619, lon: 15.506186 }
};

document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    if (cityCoordinates[city] && !searchedCities[city]) {
        fetchWeatherData(city);
        searchedCities[city] = true;
    } else if (searchedCities[city]) {
        alert('Dane dla tego miasta zostały już wcześniej wyszukane.');
    } else {
        alert('Nie znaleziono miasta.');
    }
});

function fetchWeatherData(city) {
    const coords = cityCoordinates[city];
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&daily=temperature_2m_max&timezone=auto`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            weatherData[city] = {
                dates: data.daily.time.slice(0, 7),
                temperatures: data.daily.temperature_2m_max.slice(0, 7),
                color: getRandomColor()
            };
            drawChart();
        })
        .catch(error => {
            console.error('Błąd:', error);
            alert('Wystąpił błąd podczas pobierania danych pogodowych');
        });
}


function drawChart() {
    const canvas = document.getElementById('temperatureChart');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const margin = 40;
        ctx.clearRect(0, 0, width, height); // Czyści poprzedni wykres

        // Znajdowanie maksymalnych i minimalnych wartości temperatur dla skali
        const allTemperatures = Object.values(weatherData).flatMap(data => data.temperatures);
        const maxTemp = Math.max(...allTemperatures);
        const minTemp = Math.min(...allTemperatures);
        const tempRange = maxTemp - minTemp;

        // Rysowanie legendy
        drawLegend(ctx, width, margin);

        // Rysowanie osi i etykiet
        Object.keys(weatherData).forEach((city, index) => {
            const data = weatherData[city];
            const stepX = (width - margin * 2) / (data.dates.length - 1);
            ctx.strokeStyle = data.color;

            // Rysowanie linii wykresu
            drawLines(ctx, data, maxTemp, minTemp, tempRange, height, margin, stepX);

            // Etykiety dla osi X - daty
            if (index === 0) { // Tylko raz rysujemy etykiety dla dat
                drawXAxisLabels(ctx, data, height, margin, stepX);
            }
        });

        // Etykiety dla osi Y - temperatury
        drawYAxisLabels(ctx, maxTemp, minTemp, height, margin);
    }
}

function drawLegend(ctx, width, margin) {
    const legendX = width - 150;
    let legendY = margin;
    ctx.font = '12px Arial';
    ctx.fillText('Legenda:', legendX, legendY);

    Object.keys(weatherData).forEach(city => {
        legendY += 20;
        ctx.fillStyle = weatherData[city].color;
        ctx.fillText(city, legendX, legendY);
    });
}

function drawLines(ctx, data, maxTemp, minTemp, tempRange, height, margin, stepX) {
    ctx.beginPath();
    ctx.moveTo(margin, getYPosition(data.temperatures[0], maxTemp, minTemp, tempRange, height, margin));
    data.temperatures.forEach((temp, tempIndex) => {
        const x = margin + tempIndex * stepX;
        const y = getYPosition(temp, maxTemp, minTemp, tempRange, height, margin);
        ctx.lineTo(x, y);
        ctx.arc(x, y, 3, 0, Math.PI * 2); // Rysowanie punktów
    });
    ctx.stroke();
}

function drawXAxisLabels(ctx, data, height, margin, stepX) {
    ctx.font = '12px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    data.dates.forEach((date, dateIndex) => {
        const x = margin + dateIndex * stepX;
        const y = height - margin + 20;
        // Formatowanie daty
        const formattedDate = new Date(date).toLocaleDateString('en-GB', {
            day: 'numeric', month: 'short'
        });
        ctx.fillText(formattedDate, x, y);
    });
}

function drawYAxisLabels(ctx, maxTemp, minTemp, height, margin) {
    const stepY = (height - 2 * margin) / 10; // Podziałka osi Y
    const tempInterval = (maxTemp - minTemp) / 10; // Interwał temperatury
    ctx.font = '12px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'right';
    for (let i = 0; i <= 10; i++) {
        const tempLabel = (minTemp + tempInterval * i).toFixed(1);
        const y = height - margin - stepY * i;
        ctx.fillText(`${tempLabel}°C`, margin - 10, y + 3);
    }
}

function getYPosition(temp, maxTemp, minTemp, tempRange, height, margin) {
    const relativeTemp = (temp - minTemp) / tempRange;
    return height - margin - relativeTemp * (height - 2 * margin);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}