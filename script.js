document.addEventListener('DOMContentLoaded', () => {
  const ramos = document.querySelectorAll('.ramo');

  ramos.forEach(ramo => {
    // Si no tiene "bloqueado", está disponible desde el inicio
    if (!ramo.classList.contains('bloqueado')) {
      ramo.disabled = false;
    } else {
      ramo.disabled = true;
    }

    ramo.addEventListener('click', () => {
      if (ramo.classList.contains('bloqueado') || ramo.classList.contains('aprobado')) return;

      // Marcar como aprobado
      ramo.classList.add('aprobado');
      ramo.disabled = true;

      // Desbloquear cursos siguientes
      const unlocks = ramo.dataset.unlocks;
      if (unlocks) {
        unlocks.split(',').forEach(id => {
          const siguiente = document.getElementById(id.trim());
          if (siguiente && siguiente.classList.contains('bloqueado')) {
            siguiente.classList.remove('bloqueado');
            siguiente.disabled = false;
          }
        });
      }
    });
  });
});
