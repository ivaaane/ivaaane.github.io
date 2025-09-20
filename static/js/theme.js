(function() {
  if (localStorage.getItem('theme') === 'dark' || (
      localStorage.getItem('theme') === null
        && (window.matchMedia('(prefers-color-scheme: dark)').matches))
    ) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
})();

function changeTheme() {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
}