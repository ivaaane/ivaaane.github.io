function getTheme() { return localStorage.getItem('theme') || 'light'; }
function saveTheme(theme) { localStorage.setItem('theme', theme); }
function applyTheme(theme) { document.documentElement.dataset.theme = theme; }
function rotateTheme(theme) {
  if (theme === 'light') return 'dark';
  return 'light';
}

const themeDisplay = document.getElementById('theme');
const themeToggler = document.getElementById('theme-toggler');

let theme = getTheme();
applyTheme(theme);

themeToggler.onclick = () => {
  const newTheme = rotateTheme(theme);
  applyTheme(newTheme);
  saveTheme(newTheme);

  theme = newTheme;
}