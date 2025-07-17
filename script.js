document.addEventListener('DOMContentLoaded', () => {
  const ramos = document.querySelectorAll('.ramo');

  ramos.forEach(ramo => {
    ramo.addEventListener('click', () => {
      if (ramo.classList.contains('bloqueado')) return;

      // Marcar como aprobado
      ramo.classList.add('aprobado');
      ramo.style.backgroundColor = '#228B22'; // Verde aprobado
      ramo.disabled = true;

      // Desbloquear ramos dependientes
      const unlocks = ramo.dataset.unlocks;
      if (unlocks) {
        unlocks.split(',').forEach(id => {
          const siguiente = document.getElementById(id.trim());
          if (siguiente) siguiente.classList.remove('bloqueado');
        });
      }
    });
  });
});
