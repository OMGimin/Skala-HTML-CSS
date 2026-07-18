const TODO_KEY = 'skalaTodos';

export function loadTodos() {
  const savedTodos = localStorage.getItem(TODO_KEY);

  if (savedTodos === null) {
    return [];
  }

  return JSON.parse(savedTodos);
}

export function saveTodos(todos) {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}
