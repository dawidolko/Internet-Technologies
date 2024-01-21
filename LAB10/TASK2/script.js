document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    fetchWeatherData(city);
});

function fetchWeatherData(city) {
    // Przykładowe współrzędne dla popularnych miast
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

    const coords = cityCoordinates[city];

    if (!coords) {
        alert('Nie znaleziono miasta');
        return;
    }

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&daily=temperature_2m_max&timezone=auto`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const dates = data.daily.time;
            const temperatures = data.daily.temperature_2m_max;
            displayWeatherData(dates, temperatures);
        })
        .catch(error => {
            console.error('Błąd:', error);
            alert('Wystąpił błąd podczas pobierania danych pogodowych');
        });
}

function displayWeatherData(dates, temperatures) {
    const tableBody = document.getElementById('weatherTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Czyści poprzednie wyniki
    for (let i = 0; i < dates.length; i++) {
        const row = tableBody.insertRow();
        const dateCell = row.insertCell(0);
        const tempCell = row.insertCell(1);
        dateCell.textContent = dates[i];
        tempCell.textContent = `${temperatures[i]} °C`;
        tempCell.className = getTemperatureClass(temperatures[i]);
    }
}

function getTemperatureClass(temperature) {
    if (temperature <= 0) return 'cold';
    if (temperature > 0 && temperature < 15) return 'moderate';
    if (temperature >= 15 && temperature < 25) return 'warm';
    return 'hot';
}
