const darkModeButton = document.getElementById('darkModeButton');

darkModeButton.addEventListener('click', function() {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    darkModeButton.textContent = '라이트모드';
  } else {
    darkModeButton.textContent = '다크모드';
  }
});
