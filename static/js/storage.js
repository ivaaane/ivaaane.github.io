// theme
document.getElementById('theme').checked = localStorage.getItem('dark') === 'true';
document.getElementById('theme').addEventListener('change', function() {
    localStorage.setItem('dark', this.checked);
});

// font
document.getElementById('font').value = localStorage.getItem('font');
document.getElementById('font').addEventListener('change', function() {
    localStorage.setItem('font', this.value);
});
