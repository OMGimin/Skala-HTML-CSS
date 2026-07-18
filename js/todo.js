import { loadTodos, saveTodos } from './storage.js';

const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodoButton');
const todoList = document.getElementById('todoList');
const filterButtons = document.querySelectorAll('.filter-button');
const totalCount = document.getElementById('totalCount');
const activeCount = document.getElementById('activeCount');
const doneCount = document.getElementById('doneCount');
const quoteText = document.getElementById('quoteText');

let todos = loadTodos();
let currentFilter = 'all';

function makeTodo(text) {
  return {
    id: Date.now(),
    text: text,
    done: false
  };
}

function addTodo() {
  const text = todoInput.value.trim();

  if (text === '') {
    alert('할 일을 입력하세요.');
    return;
  }

  todos.push(makeTodo(text));
  saveTodos(todos);
  todoInput.value = '';
  render();
}

function getFilteredTodos() {
  if (currentFilter === 'active') {
    return todos.filter(function(todo) {
      return todo.done === false;
    });
  }

  if (currentFilter === 'done') {
    return todos.filter(function(todo) {
      return todo.done === true;
    });
  }

  return todos;
}

function renderSummary() {
  const doneTodos = todos.filter(function(todo) {
    return todo.done === true;
  });

  totalCount.textContent = '전체 ' + todos.length + '개';
  activeCount.textContent = '진행중 ' + (todos.length - doneTodos.length) + '개';
  doneCount.textContent = '완료 ' + doneTodos.length + '개';
}

function render() {
  const filteredTodos = getFilteredTodos();
  todoList.innerHTML = '';

  for (let i = 0; i < filteredTodos.length; i++) {
    const todo = filteredTodos[i];
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.dataset.id = todo.id;

    if (todo.done) {
      li.classList.add('done');
    }

    li.innerHTML =
      '<label>' +
      '<input type="checkbox" class="todo-check" ' + (todo.done ? 'checked' : '') + '>' +
      '<span>' + todo.text + '</span>' +
      '</label>' +
      '<button type="button" class="delete-button">X</button>';

    todoList.appendChild(li);
  }

  renderSummary();
}

todoInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});

addTodoButton.addEventListener('click', addTodo);

todoList.addEventListener('click', function(event) {
  const item = event.target.closest('.todo-item');

  if (item === null) {
    return;
  }

  const id = Number(item.dataset.id);

  if (event.target.classList.contains('todo-check')) {
    todos = todos.map(function(todo) {
      if (todo.id === id) {
        return {
          id: todo.id,
          text: todo.text,
          done: !todo.done
        };
      }

      return todo;
    });
  }

  if (event.target.classList.contains('delete-button')) {
    todos = todos.filter(function(todo) {
      return todo.id !== id;
    });
  }

  saveTodos(todos);
  render();
});

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener('click', function() {
    currentFilter = filterButtons[i].dataset.filter;

    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove('active');
    }

    filterButtons[i].classList.add('active');
    render();
  });
}

async function loadQuote() {
  try {
    const response = await fetch('data/quotes.json');
    const data = await response.json();
    quoteText.textContent = data.message;
  } catch (error) {
    quoteText.textContent = '오늘도 하나씩 해보자.';
  }
}

loadQuote();
render();
