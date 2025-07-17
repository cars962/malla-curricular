document.addEventListener('DOMContentLoaded', () => {
  const ramos = document.querySelectorAll('.ramo');
  const aprobado = new Set();

  // Mapear materias por semestre
  const semestres = document.querySelectorAll('.semestre');
  const semestreMap = {}; // ID de ramo -> semestre contenedor

  semestres.forEach(sem => {
    const botones = sem.querySelectorAll('.ramo');
    botones.forEach(btn => {
      semestreMap[btn.id] = sem;
    });
  });

  ramos.forEach(ramo => {
    ramo.disabled = ramo.classList.contains('bloqueado');

    ramo.addEventListener('click', () => {
      if (ramo.classList.contains('bloqueado') || ramo.classList.contains('aprobado')) return;

      // Marcar como aprobado
      ramo.classList.add('aprobado');
      ramo.disabled = true;
      aprobado.add(ramo.id);

      // Desbloquear sus cursos dependientes
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

      // Revisar si puede desbloquear otras materias del mismo semestre
      const semestreActual = semestreMap[ramo.id];
      if (semestreActual) {
        const materias = semestreActual.querySelectorAll('.ramo');
        const total = materias.length;
        const aprobadas = Array.from(materias).filter(m => m.classList.contains('aprobado')).length;

        if (aprobadas / total >= 0.6) {
          materias.forEach(m => {
            if (m.classList.contains('bloqueado') && !m.dataset.unlocks) {
              m.classList.remove('bloqueado');
              m.disabled = false;
            }
          });
        }
      }
    });
  });
});
