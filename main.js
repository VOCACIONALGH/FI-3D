if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

const menu = document.getElementById('app');
const telaRegistro = document.getElementById('telaRegistro');

const btnRegistro = document.getElementById('btnRegistro');
const btnMenu = document.getElementById('btnMenu');

btnRegistro.addEventListener('click', () => {
  menu.classList.add('hidden');
  telaRegistro.classList.remove('hidden');
});

btnMenu.addEventListener('click', () => {
  telaRegistro.classList.add('hidden');
  menu.classList.remove('hidden');
});
