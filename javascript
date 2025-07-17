document.addEventListener('DOMContentLoaded', () => {
  const ramos = document.querySelectorAll('.ramo');
  const aprobado = new Set();

  const semestres = document.querySelectorAll('.semestre');
  const semestreMap = {};

  semestres.forEach(sem => {
    const botones = sem.querySelectorAll('.ramo');
    botones.forEach(btn => {
      semestreMap[btn.id] = sem;
      if (btn.classList.contains('bloqueado')) {
        btn.disabled = true;
      }
    });
  });

  ramos.forEach(ramo => {
    ramo.addEventListener('click', () => {
      if (ramo.disabled || ramo.classList.contains('aprobado')) return;

      ramo.classList.add('aprobado');
      ramo.disabled = true;
      aprobado.add(ramo.id);

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

      // Desbloqueo por mayoría del semestre
      const semestreActual = semestreMap[ramo.id];
      if (semestreActual) {
        const materias = semestreActual.querySelectorAll('.ramo');
        const aprobadas = Array.from(materias).filter(m => m.classList.contains('aprobado')).length;
        if (aprobadas / materias.length >= 0.6) {
          materias.forEach(m => {
            if (m.classList.contains('bloqueado') && !m.dataset.unlocks) {
              m.classList.remove('bloqueado');
              m.disabled = false;
            }
          });
