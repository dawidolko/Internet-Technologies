/**
 * Aplikacja Quiz - główny skrypt.
 * Rejestruje obsługę zdarzeń dla elementów UI i zarządza logiką quizu.
 */

/**
 * Inicjuje grę: ukrywa elementy startowe, wyświetla kontener z pytaniami i ładuje pierwsze pytanie.
 * Restartuje wynik i indeks bieżącego pytania.
 * @function
 * @public
 * @example
 * startButton.addEventListener('click', startGame);
 * restartButton.addEventListener('click', startGame);
 */
async function startGame() {
  score = 0;
  currentQuestionIndex = 0;
  startButton.classList.add('hidden');
  introductionElement.classList.add('hidden');
  resultContainer.classList.add('hidden');
  questionContainerElement.classList.remove('hidden');
  await loadAndDisplayQuestions();
}

/**
 * Ładuje pytania z pliku JSON i wyświetla je losowo.
 * Obsługuje wyjątki w przypadku błędów ładowania pytań.
 * @function
 * @public
 * @example
 * await loadAndDisplayQuestions();
 */
async function loadAndDisplayQuestions() {
  try {
    const response = await fetch('json/questions.json');
    const questions = await response.json();
    currentQuestions = selectRandomQuestions(questions, 10);
    displayQuestion(currentQuestions[currentQuestionIndex]);
  } catch (error) {
    console.error("Failed to load questions:", error);
  }
}

/**
 * Wybiera losowe pytania z dostępnych, aby zapewnić różnorodność quizu.
 * @function
 * @public
 * @param {Array} questions - Lista wszystkich dostępnych pytań.
 * @param {number} numQuestions - Ilość pytań do wyświetlenia w quizie.
 * @returns {Array} Lista wybranych pytań do wykorzystania w quizie.
 */
function selectRandomQuestions(questions, numQuestions) {
  let questionsCopy = questions.slice();
  let selectedQuestions = [];

  for (let i = questionsCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Losowy indeks od 0 do i
    [questionsCopy[i], questionsCopy[j]] = [questionsCopy[j], questionsCopy[i]]; // Zamiana miejscami
  }

  selectedQuestions = questionsCopy.slice(0, numQuestions);
  return selectedQuestions;
}

/**
 * Wyświetla pytanie i odpowiedzi na ekranie, umożliwiając użytkownikowi dokonanie wyboru.
 * Resetuje stan UI przed wyświetleniem nowego pytania, w tym ukrywa przycisk potwierdzenia odpowiedzi
 * oraz kontenery z informacjami zwrotnymi o poprawności odpowiedzi i poprawną odpowiedzią, jeśli były wcześniej wyświetlone.
 * Każda odpowiedź jest prezentowana jako radio button z etykietą, umożliwiając jednoznaczny wybór.
 * 
 * @function
 * @public
 * @param {Object} question - Obiekt pytania, zawierający treść pytania i tablicę możliwych odpowiedzi.
 * Każda odpowiedź w tej tablicy jest reprezentowana przez ciąg znaków.
 * Funkcja tworzy dla każdej odpowiedzi element input typu radio oraz etykietę (label) z tekstem odpowiedzi.
 * Po przygotowaniu wszystkich odpowiedzi, funkcja ukrywa niepotrzebne elementy UI i wyświetla aktualne pytanie.
 */
function displayQuestion(question) {
  resetState();
  questionElement.innerText = question.question;
  question.answers.forEach((answer, index) => {
    const answerElement = document.createElement('div');
    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.id = 'answer' + index;
    radioInput.name = 'answer';
    radioInput.value = index;
    radioInput.classList.add('answer-radio');

    const label = document.createElement('label');
    label.htmlFor = 'answer' + index;
    label.innerText = answer;
    label.classList.add('answer-label');

    answerElement.appendChild(radioInput);
    answerElement.appendChild(label);
    answerButtonsElement.appendChild(answerElement);
  });

  confirmAnswerBtn.classList.remove('hidden');
  
  // Ukrywanie kontenerów z feedbackiem i poprawną odpowiedzią
  document.getElementById('feedback-container').classList.add('hidden');
  document.getElementById('correct-answer-container').classList.add('hidden');
}


/**
 * Resetuje stan UI odpowiedzi, ukrywając przycisk potwierdzenia i usuwając istniejące opcje odpowiedzi.
 * @function
 * @public
 */
function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
  confirmAnswerBtn.classList.add('hidden');
}

/**
 * Sprawdza, która odpowiedź została wybrana przez użytkownika, i ocenia, czy jest poprawna.
 * W zależności od poprawności odpowiedzi, wyświetla stosowny komunikat w kontenerze informacji zwrotnej.
 * Jeśli odpowiedź jest niepoprawna, pokazuje także poprawną odpowiedź w dedykowanym kontenerze.
 * Następnie ukrywa przycisk potwierdzenia odpowiedzi i pokazuje przycisk, który pozwala przejść do następnego pytania,
 * umożliwiając użytkownikowi kontrolę nad tempem quizu. Po wybraniu odpowiedzi i wyświetleniu odpowiednich komunikatów,
 * funkcja przygotowuje interfejs do przejścia do kolejnego pytania lub, jeśli to ostatnie pytanie, do wyświetlenia wyników quizu.
 * @function
 * @public
 */
function selectAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (!selectedAnswer) {
    alert("Proszę wybrać odpowiedź!");
    return;
  }
  const answerIndex = Number(selectedAnswer.value);
  const correctAnswerIndex = currentQuestions[currentQuestionIndex].correctAnswer;
  const correctAnswerText = currentQuestions[currentQuestionIndex].answers[correctAnswerIndex];

  document.getElementById('feedback-container').classList.remove('hidden');
  document.getElementById('correct-answer-container').classList.add('hidden');
  confirmAnswerBtn.classList.add('hidden'); // Ukrywa przycisk potwierdzenia odpowiedzi
  document.getElementById('next-question-btn').classList.remove('hidden'); // Pokazuje przycisk "Przejdź do następnego pytania"

  if (answerIndex === correctAnswerIndex) {
    document.getElementById('feedback-header').innerText = "Dobra robota!";
    document.getElementById('feedback-text').innerText = "Twoja odpowiedź jest poprawna.";
    score++;
  } else {
    document.getElementById('feedback-header').innerText = "Niestety, to nie jest poprawna odpowiedź.";
    document.getElementById('feedback-text').innerText = "Spróbuj jeszcze raz!";
    document.getElementById('correct-answer-container').classList.remove('hidden');
    document.getElementById('correct-answer').innerText = correctAnswerText;
  }
}

/**
 * Przechodzi do następnego pytania quizu lub wyświetla wyniki, jeśli to było ostatnie pytanie.
 * Funkcja ta zarządza indeksem bieżącego pytania, inkrementując go, aby przejść do następnego pytania w tablicy `currentQuestions`.
 * Jeżeli użytkownik znajduje się przy ostatnim pytaniu, funkcja wywoła `showResult` do prezentacji końcowego wyniku quizu.
 * Dodatkowo, funkcja ta resetuje interfejs użytkownika do stanu początkowego dla nowego pytania, ukrywając przycisk
 * "Przejdź do następnego pytania" oraz kontenery z informacjami zwrotnymi o poprawności odpowiedzi i poprawną odpowiedzią,
 * co zapewnia, że użytkownik otrzymuje czysty stan UI przy każdym nowym pytaniu.
 * @function
 * @public
 */
function goToNextQuestion() {
  if (currentQuestionIndex < currentQuestions.length - 1) {
    currentQuestionIndex++;
    displayQuestion(currentQuestions[currentQuestionIndex]);
  } else {
    showResult();
  }

  document.getElementById('next-question-btn').classList.add('hidden'); 
  document.getElementById('feedback-container').classList.add('hidden');
  document.getElementById('correct-answer-container').classList.add('hidden');
}

/**
 * Wyświetla wynik quizu, dynamicznie dostosowując komunikat do liczby zdobytych punktów.
 * Funkcja ta ukrywa kontener z pytaniami i pokazuje kontener wyników, prezentując użytkownikowi informacje
 * o liczbie poprawnie udzielonych odpowiedzi w kontekście całkowitej liczby pytań. Komunikat wynikowy jest
 * dostosowany do polskiej gramatyki liczby pojedynczej i mnogiej, zapewniając poprawną formę językową
 * w zależności od uzyskanego wyniku.
 * 
 * Dla wyniku 0 oraz liczb większych niż 4 i mniejszych niż 11 stosowana jest forma mnoga "pytań".
 * Dla wyniku 1 używana jest forma pojedyncza "pytanie".
 * Dla wyników od 2 do 4 stosowana jest forma mnoga "pytania".
 * 
 * Funkcja oferuje również możliwość restartu gry, umożliwiając użytkownikowi ponowne rozpoczęcie quizu
 * bez konieczności odświeżania strony.
 * @function
 * @public
 */
function showResult() {
  questionContainerElement.classList.add('hidden');
  resultContainer.classList.remove('hidden');
  if(score === 0 || (score > 4 && score < 11)){
    const resultText = `Odpowiedziłaeś prawidłowo na ${score} pytań spośród ${currentQuestions.length}.`;
    document.getElementById('result').innerText = resultText;
  }else if(score === 1){
    const resultText = `Odpowiedziałeś prawidłowo na ${score} pytanie spośród ${currentQuestions.length}.`;
    document.getElementById('result').innerText = resultText;
  }else{
    const resultText = `Odpowiedziałeś prawidłowo na ${score} pytania spośród ${currentQuestions.length}.`;
    document.getElementById('result').innerText = resultText;
  }
}

/**
 * Przywraca stan początkowy aplikacji, umożliwiając rozpoczęcie nowej gry.
 * @function
 * @public
 */
function backToStart() {
  questionContainerElement.classList.add('hidden');
  resultContainer.classList.add('hidden');

  resetQuizState();

  introductionElement.classList.remove('hidden');
  startButton.classList.remove('hidden');
}

/**
 * Resetuje stan quizu do wartości początkowych.
 * Funkcja ta jest wywoływana podczas restartowania quizu lub kiedy użytkownik chce zacząć od nowa po ukończeniu quizu.
 * Resetuje wynik i indeks bieżącego pytania do zera.
 * @function
 * @public
 */
function resetQuizState() {
  score = 0;
  currentQuestionIndex = 0;
}

/**
 * Inicjalizuje aplikację quizową, ustawiając nasłuchiwanie zdarzeń dla kluczowych elementów interfejsu użytkownika.
 * Funkcja ta przygotowuje przyciski do interakcji z użytkownikiem, włączając przyciski start, restart, potwierdzenia odpowiedzi,
 * powrotu do ekranu startowego oraz przejścia do następnego pytania. Poprzez dodanie odpowiednich nasłuchiwaczy zdarzeń,
 * aplikacja staje się interaktywna, pozwalając użytkownikowi na rozpoczęcie quizu, wybór odpowiedzi, przejście między pytaniami,
 * oraz zobaczenie wyników po ukończeniu wszystkich pytań.
 * Jest wywoływana automatycznie po załadowaniu całego drzewa DOM strony, co zapewnia, że wszystkie elementy interfejsu są
 * dostępne i gotowe do interakcji. Dzięki temu, użytkownik może bezproblemowo nawigować przez różne etapy quizu,
 * od startu po wyświetlenie wyników końcowych.
 * @function
 * @public
 */
function initQuiz() {
  startButton.addEventListener('click', startGame);
  restartButton.addEventListener('click', startGame);
  confirmAnswerBtn.addEventListener('click', selectAnswer);
  document.getElementById('back-to-start-btn').addEventListener('click', backToStart);
  document.getElementById('next-question-btn').addEventListener('click', goToNextQuestion);
}

// Inicjalizacja globalnych zmiennych dla elementów UI oraz stanu quizu.
let startButton, questionContainerElement, questionElement, answerButtonsElement, introductionElement, resultContainer,
  restartButton, confirmAnswerBtn, currentQuestions, currentQuestionIndex, score;

/**
 * Przygotowuje aplikację quizową do działania po pełnym załadowaniu DOM.
 * Funkcja ta przypisuje elementy DOM do globalnych zmiennych i wywołuje `initQuiz` w celu ustawienia nasłuchiwania zdarzeń.
 * Zapewnia, że wszystkie manipulacje i rejestracje zdarzeń są wykonane po gotowości DOM.
 * @listens document#DOMContentLoaded - Zdarzenie, które jest wyzwalane, gdy dokument HTML został całkowicie załadowany i przetworzony.
 */
document.addEventListener('DOMContentLoaded', () => {
  startButton = document.getElementById('start-quiz-btn');
  questionContainerElement = document.getElementById('question-container');
  questionElement = document.getElementById('question');
  answerButtonsElement = document.getElementById('answer-buttons');
  introductionElement = document.getElementById('introduction');
  resultContainer = document.getElementById('result-container');
  restartButton = document.getElementById('restart-quiz-btn');
  confirmAnswerBtn = document.getElementById('confirm-answer-btn');

  initQuiz();
});

