const messageText = document.getElementById('messageText');
const changeButton = document.getElementById('changeButton');
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

changeButton.addEventListener('click', function() {
  messageText.textContent = '버튼을 클릭해서 문구를 변경했습니다.';
  messageText.classList.add('highlight');
});

addButton.addEventListener('click', function() {
  const inputValue = itemInput.value;

  if (inputValue === '') {
    alert('내용을 입력하세요.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = inputValue + ' ';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '삭제';

  deleteButton.addEventListener('click', function() {
    li.remove();
  });

  li.appendChild(deleteButton);
  itemList.appendChild(li);

  itemInput.value = '';
});