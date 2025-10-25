(function () {
  const $ = (sel) => document.querySelector(sel);
  const root = document.documentElement;

  // Persistência
  const setPref = (k, v) => localStorage.setItem(k, v);
  const getPref = (k) => localStorage.getItem(k);

  // Ano no rodapé
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  // Toggles
  const btnDark = $('#btn-dark');
  const btnContrast = $('#btn-contrast');
  const btnFont = $('#btn-font');

  // Estados salvos
  const savedDark = getPref('theme-dark') === 'true';
  const savedContrast = getPref('theme-contrast') === 'true';
  const savedFont = getPref('font-large') === 'true';

  if (savedDark) { root.classList.add('theme-dark'); btnDark?.setAttribute('aria-pressed', 'true'); }
  if (savedContrast) { root.classList.add('theme-contrast'); btnContrast?.setAttribute('aria-pressed', 'true'); }
  if (savedFont) { root.style.setProperty('--font-size', '1.125rem'); btnFont?.setAttribute('aria-pressed', 'true'); }

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

  // Skip-link foca no main
  const main = document.getElementById('conteudo');
  document.querySelectorAll('.skip-link').forEach((link) => {
    link.addEventListener('click', () => main?.focus());
  });

  // Validação básica de email
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
