
function startGame() {

  /**
 * @function startGame
 * @description Ta funkcja jest odpowiedzialna za rozpoczęcie gry. 
 * Pobiera nazwę gracza i wybrany motyw z formularza, a następnie zapisuje te dane w pamięci lokalnej przeglądarki. 
 * Jeżeli pole z nazwą gracza jest puste, wyświetla alert i zatrzymuje dalsze działanie funkcji. 
 * Po zapisaniu danych, przekierowuje gracza do strony gry.
 */

    var playerName = document.getElementById("playerName").value
    
     // Sprawdzenie, czy pole jest puste
    if (playerName == "") {
      alert("Proszę podać nazwę gracza")
      return false; // Zatrzymuje dalsze działanie funkcji
    }

    var themeChoice = document.querySelector('input[name="themeChoice"]:checked').value;

    // tworzenie obiektów JSON
    var playerData = {
      name: playerName
    };

    var themeData = {
        theme: themeChoice
    };
    
    // konwersja z JSON na string
    var playerDataJSON = JSON.stringify(playerData);
    var themeDataJSON = JSON.stringify(themeData);
    
    console.log(playerDataJSON);
    console.log(themeDataJSON);

    localStorage.setItem('playerData', playerDataJSON);
    localStorage.setItem('themeData', themeDataJSON);

    window.location.href = 'game.html'
  }