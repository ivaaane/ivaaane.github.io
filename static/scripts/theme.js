let theme = localStorage.getItem('theme')
    || window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
document.documentElement.dataset.theme = theme;

document.getElementById('theme').onclick = () => {
    theme = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', theme);
    document.documentElement.dataset.theme = theme;
}

