const answerButtons = document.querySelectorAll('.answer-button');
const quizResult = document.getElementById('quizResult');

for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener('click', function() {
    const answer = answerButtons[i].dataset.answer;

    if (answer === 'correct') {
      quizResult.textContent = '정답입니다!';
      quizResult.classList.add('highlight');
    } else {
      quizResult.textContent = '오답입니다. 다시 선택해보세요.';
      quizResult.classList.remove('highlight');
    }
  });
}