const menu=document.querySelector('.menu');const nav=document.querySelector('nav');menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('open',!expanded)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}});document.getElementById('year').textContent=new Date().getFullYear();

const themeButton = document.querySelector('.theme-toggle');
function syncThemeButton() {
 const dark = document.documentElement.dataset.theme === 'dark';
 themeButton.setAttribute('aria-pressed', String(dark));
 themeButton.setAttribute('aria-label', 'Dark theme');
 themeButton.title = dark ? 'Switch to light theme' : 'Switch to dark theme';
 themeButton.querySelector('.theme-label').textContent = dark ? 'Light' : 'Dark';
 themeButton.querySelector('[aria-hidden]').textContent = dark ? '☀' : '◐';
 document.querySelector('meta[name="theme-color"]').content = dark ? '#111513' : '#ffffff';
}
syncThemeButton();
themeButton.addEventListener('click', () => {
 const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
 document.documentElement.dataset.theme = theme;
 try { localStorage.setItem('shaik-asif-theme', theme); } catch {}
 syncThemeButton();
});
