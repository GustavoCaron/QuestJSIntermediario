const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validarCampo(nome);
  validarCampo(email);
  validarCampo(telefone);
  validarCampo(mensagem);
});

function validarCampo(campo) {
  if (campo.value.trim() === '') {
    campo.style.borderColor = 'red';
    campo.nextElementSibling.style.display = 'block';
  } else {
    campo.style.borderColor = 'green';
    campo.nextElementSibling.style.display = 'none';
  }
}