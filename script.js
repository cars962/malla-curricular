document.addEventListener('DOMContentLoaded', () => {
  const ramos = document.querySelectorAll('.ramo');
  const semestreMap = {};

  document.querySelectorAll('.semestre').forEach(sem => {
    sem.querySelectorAll('.ramo').forEach(ramo => {
      semestreMap[ramo.id] = sem;
    });
  });

  ramos.forEach(ramo => {
    if (!ramo.classList.contains('bloqueado')) {
      ramo.disabled = false;
    } else {
      ramo.disabled = true;
    }

    ramo.addEventListener('click', () => {
      if (ramo.disabled || ramo.classList.contains('aprobado')) return;

      ramo.classList.add('aprobado');
      ramo.disabled = true;

      const unlocks = ramo.dataset.unlocks;
      if (unlocks) {
        unlocks.split(',').forEach(id => {
          const target = document.getElementById(id.trim());
          if (target && target.classList.contains('bloqueado')) {
            target.classList.remove('bloqueado');
            target.disabled = false;
          }
        });
      }

      // Desbloqueo por mayoría del semestre
      const semestreActual = semestreMap[ramo.id];
      const materias = semestreActual.querySelectorAll('.ramo');
      const aprobadas = Array.from(materias).filter(m => m.classList.contains('aprobado')).length;
      if (aprobadas / materias.length >= 0.6) {
        materias.forEach(m => {
          if (m.classList.contains('bloqueado') && !m.dataset.unlocks) {
            m.classList.remove('bloqueado');
            m.disabled = false;
          }
        });
      }
    });
  });
});
