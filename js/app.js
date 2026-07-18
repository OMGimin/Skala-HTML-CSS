import { subjects, getDelayTime } from './data.js';

const loadButton = document.getElementById('loadButton');
const dataList = document.getElementById('dataList');

loadButton.addEventListener('click', function() {
  dataList.textContent = '데이터를 불러오는 중입니다...';

  setTimeout(function() {
    dataList.innerHTML = '';

    for (let i = 0; i < subjects.length; i++) {
      const li = document.createElement('li');
      li.textContent = subjects[i];
      dataList.appendChild(li);
    }
  }, getDelayTime());
});