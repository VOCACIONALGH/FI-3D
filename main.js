if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

const btnRegistro = document.getElementById('btnRegistro');

if (btnRegistro) {
  btnRegistro.addEventListener('click', () => {
    window.location.href = 'registro.html';
  });
}
