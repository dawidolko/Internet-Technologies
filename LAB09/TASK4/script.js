// Funkcja do walidacji wartości
function validateValue(value) {
    return !isNaN(value) && Number(value) > 0;
  }
  
  // Funkcja do obliczania ceny za cm2 pizzy
  function calculatePricePerCm2(price, diameter) {
    const radius = diameter / 2;
    const area = Math.PI * radius * radius;
    return price / area;
  }
  
  document.getElementById('calculate').addEventListener('click', function() {
    const smallPrice = document.getElementById('smallPizzaPrice').value;
    const smallDiameter = document.getElementById('smallPizzaDiameter').value;
    const largePrice = document.getElementById('largePizzaPrice').value;
    const largeDiameter = document.getElementById('largePizzaDiameter').value;
  
    if (!validateValue(smallPrice) || !validateValue(smallDiameter) ||
        !validateValue(largePrice) || !validateValue(largeDiameter)) {
      alert('Proszę wprowadzić poprawne wartości dodatnie.');
      return;
    }
  
    const smallPricePerCm2 = calculatePricePerCm2(parseFloat(smallPrice), parseFloat(smallDiameter));
    const largePricePerCm2 = calculatePricePerCm2(parseFloat(largePrice), parseFloat(largeDiameter));
  
    let resultText = `Cena za cm2:<br>
                      Mała pizza: ${smallPricePerCm2.toFixed(2)}<br>
                      Duża pizza: ${largePricePerCm2.toFixed(2)}<br>`;
  
    if (smallPricePerCm2 < largePricePerCm2) {
      resultText += 'Mała pizza jest bardziej opłacalna.';
    } else if (smallPricePerCm2 > largePricePerCm2) {
      resultText += 'Duża pizza jest bardziej opłacalna.';
    } else {
      resultText += 'Obie pizze mają taką samą opłacalność.';
    }
  
    document.getElementById('result').innerHTML = resultText;
  });