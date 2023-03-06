// Obtener el puntaje máximo del almacenamiento local
var highScore = localStorage.getItem('highScore');
if (highScore === null) {
  highScore = 0;
}
document.getElementById('high-score').textContent = highScore;

function guessNumber() {
  // Generar un número aleatorio entre 1 y 5
  var randomNumber = Math.floor(Math.random() * 5) + 1;
  // Obtener la respuesta del usuario
  var userGuess = parseInt(document.getElementById('guess').value);
  // Verificar si la respuesta es correcta
  if (userGuess === randomNumber) {
    alert('¡Correcto!');
    // Aumentar la puntuación actual
    var score = parseInt(document.getElementById('score').textContent) + 1;
    document.getElementById('score').textContent = score;
    // Actualizar la puntuación máxima si es necesario
    if (score > highScore) {
      localStorage.setItem('highScore', score);
      document.getElementById('high-score').textContent = score;
    }
  } else {
    alert('Incorrecto. El número era ' + randomNumber);
    // Reiniciar la puntuación actual
    document.getElementById('score').textContent = 0;
  }
  // Limpiar el cuadro de texto
  document.getElementById('guess').value = '';
}
