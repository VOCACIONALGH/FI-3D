if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

const btnRegistro = document.getElementById('btnRegistro');
if (btnRegistro) {
  btnRegistro.addEventListener('click', () => {
    window.location.href = 'registro.html';
  });
}

const btnHistorico = document.getElementById('btnHistorico');
if (btnHistorico) {
  btnHistorico.addEventListener('click', () => {
    window.location.href = 'historico.html';
  });
}
