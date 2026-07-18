const scoreInput = document.getElementById('scoreInput');
const checkButton = document.getElementById('checkButton');
const resultText = document.getElementById('resultText');

const name = '김지민';

let subjects = ['HTML', 'CSS', 'JavaScript'];

const student = {
  name: name,
  age: 26,
  course: 'SKALA'
};

function checkScore() {
  let score = Number(scoreInput.value);

  console.log('학생 정보:', student);
  console.log('현재 과목 목록:', subjects);

  subjects.push('GitHub');
  console.log('추가 후 과목 목록:', subjects);

  if (score >= 80) {
    resultText.textContent = name + '님의 점수는 ' + score + '점입니다. 잘했습니다!';
  } else if (score >= 60) {
    resultText.textContent = name + '님의 점수는 ' + score + '점입니다. 조금만 더 연습하면 좋겠습니다.';
  } else {
    resultText.textContent = name + '님의 점수는 ' + score + '점입니다. 복습이 필요합니다.';
  }

  for (let i = 0; i < subjects.length; i++) {
    console.log(i + 1 + '번째 과목: ' + subjects[i]);
  }
}

checkButton.addEventListener('click', checkScore);