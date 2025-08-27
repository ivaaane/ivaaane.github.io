const toggle = document.getElementById('theme');
const body = document.body;

function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  // Set theme and checkbox state
  if (savedTheme === 'dark' || 
      (savedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    body.classList.add('dark-mode');
    if (toggle) toggle.checked = true;
  } else {
    body.classList.remove('dark-mode');
    if (toggle) toggle.checked = false;
  }
}

// Only run JS if toggle exists
if (toggle) {
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });
}

loadTheme();