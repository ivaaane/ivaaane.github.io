let theme = localStorage.getItem('theme') || 'light';
document.documentElement.dataset.theme = theme;

document.getElementById('theme').onclick = () => {
    theme = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', theme);
    document.documentElement.dataset.theme = theme;
}

