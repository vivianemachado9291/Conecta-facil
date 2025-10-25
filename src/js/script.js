(function () {
const btnFont = $('#btn-font');


// Aplicar estado salvo
const savedThemeDark = getPref('theme-dark') === 'true';
const savedThemeContrast = getPref('theme-contrast') === 'true';
const savedFont = getPref('font-large') === 'true';


if (savedThemeDark) { root.classList.add('theme-dark'); btnDark.setAttribute('aria-pressed', 'true'); }
if (savedThemeContrast) { root.classList.add('theme-contrast'); btnContrast.setAttribute('aria-pressed', 'true'); }
if (savedFont) { root.style.setProperty('--font-size', '1.125rem'); btnFont.setAttribute('aria-pressed', 'true'); }


btnDark?.addEventListener('click', () => {
const on = root.classList.toggle('theme-dark');
btnDark.setAttribute('aria-pressed', String(on));
setPref('theme-dark', on);
});


btnContrast?.addEventListener('click', () => {
const on = root.classList.toggle('theme-contrast');
btnContrast.setAttribute('aria-pressed', String(on));
setPref('theme-contrast', on);
});


btnFont?.addEventListener('click', () => {
const large = btnFont.getAttribute('aria-pressed') !== 'true';
root.style.setProperty('--font-size', large ? '1.125rem' : '1rem');
btnFont.setAttribute('aria-pressed', String(large));
setPref('font-large', large);
});


// Acessibilidade: focar no main quando navegar por skip-link
const main = document.getElementById('conteudo');
document.querySelectorAll('.skip-link').forEach((link) => {
link.addEventListener('click', () => main?.focus());
});


// Validação básica do email (exemplo)
const form = document.querySelector('form');
const email = document.getElementById('email');
const emailErro = document.getElementById('email-erro');


form?.addEventListener('submit', (e) => {
emailErro.textContent = '';
if (!email?.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
e.preventDefault();
emailErro.textContent = 'Por favor, insira um email válido.';
email?.focus();
}
});
})();
