// Adres URL z danymi do prognozy pogody
const weatherForecastURL = 'https://api.open-meteo.com/v1/forecast?latitude=50.0413&longitude=21.999&hourly=temperature_2m,cloud_cover&timezone=auto&past_days=7';
// Wykorzystanie fetch do pobrania danych
fetch(weatherForecastURL)
.then(response => {
// Sprawdzenie, czy odpowiedź ma status ok (kod 200)
if (!response.ok) {
throw new Error('Network response was not ok.');
}
return response.json(); // Parsowanie odpowiedzi do formatu JSON
}).then(data => {
// Obsługa danych z odpowiedzi
console.log('Odebrane dane:', data);
// Tutaj można wykonać operacje na danych pogodowych
}).catch(error => {
// Obsługa błędów
console.error('Wystąpił błąd:', error);
});