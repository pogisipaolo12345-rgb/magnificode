const quizForm = document.getElementById('quizForm');
const submitQuiz = document.getElementById('submitQuiz');
const resetQuiz = document.getElementById('resetQuiz');
const quizResult = document.getElementById('quizResult');

const ANSWERS = { 
  q1: 'a', 
  q2: 'a', 
  q3: 'c', 
  q4: 'c', 
  q5: 'a', 
  q6: 'a', 
  q7: 'a', 
  q8: 'a', 
  q9: 'c', 
  q10: 'b' 
};


submitQuiz?.addEventListener('click', () => {
  const data = new FormData(quizForm);
  let score = 0;
  const total = Object.keys(ANSWERS).length;

  for (const [key, correct] of Object.entries(ANSWERS)) {
    const user = data.get(key);
    if (user === correct) score++;
  }

  quizResult.textContent = `You scored ${score} / ${total}.`;

  if (score === total) {
    quizResult.textContent += ' Excellent! You got all the answers right. 🎉';
  } else if (score >= total - 2) {
    quizResult.textContent += ' Great job — you almost nailed it!';
  } else if (score >= total / 2) {
    quizResult.textContent += ' Nice try — keep practicing!';
  } else {
    quizResult.textContent += ' Keep studying — you’ll get better!';
  }
});


resetQuiz?.addEventListener('click', () => {
  quizForm.reset();
  quizResult.textContent = '';
});