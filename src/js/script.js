// util
const $ = (sel) => document.querySelector(sel);

// Ano no footer
const ano = $('#ano');
if (ano) ano.textContent = new Date().getFullYear();

// Validação simples do formulário (sem back-end)
const form = document.querySelector('.contact-form');
const nome = $('#nome');
const email = $('#email');
const mensagem = $('#mensagem');
const erroNome = $('#erro-nome');
const erroEmail = $('#erro-email');
const erroMensagem = $('#erro-mensagem');
const feedback = $('#form-feedback');

function isEmailOk(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

if (form) {
  form.addEventListener('submit', (e) => {
    // limpa mensagens
    erroNome.textContent = '';
    erroEmail.textContent = '';
    erroMensagem.textContent = '';
    feedback.textContent = '';

    let ok = true;

    if (!nome.value.trim()) {
      erroNome.textContent = 'Informe seu nome.';
      ok = false;
    }
    if (!email.value.trim() || !isEmailOk(email.value.trim())) {
      erroEmail.textContent = 'Informe um email válido.';
      ok = false;
    }
    // mensagem é opcional, mas você pode exigir:
    // if (!mensagem.value.trim()) { erroMensagem.textContent = 'Digite sua mensagem.'; ok = false; }

    if (!ok) {
      e.preventDefault();
      // foco no primeiro erro
      if (erroNome.textContent) nome.focus();
      else if (erroEmail.textContent) email.focus();
      else if (erroMensagem.textContent) mensagem.focus();
      return;
    }

    // Sem back-end: apenas mostra feedback e impede recarregar
    e.preventDefault();
    feedback.textContent = 'Mensagem enviada! (demonstração)';
    form.reset();
    nome.focus();
  });
}
