function getFont() { return localStorage.getItem('font') || 'serif'; }
function saveFont(font) { localStorage.setItem('font', font); }
function applyFont(font) { document.body.style.fontFamily = font; }
function rotateFont(font) {
  if (font === 'serif') return 'sans';
  if (font === 'sans') return '"Courier New", monospace';
  return 'serif';
}

const fontToggler = document.getElementById('font-toggler');

let font = getFont();
applyFont(font);

fontToggler.onclick = () => {
  const newFont = rotateFont(font);
  applyFont(newFont);
  saveFont(newFont);
  font = newFont;
}
