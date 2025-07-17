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
        document.addEventListener("DOMContentLoaded", () => {
  const cursosAprobados = new Set();

  // Cargar botones
  const botones = document.querySelectorAll(".ramo");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      if (boton.classList.contains("bloqueado") || boton.classList.contains("aprobado")) return;

      boton.classList.add("aprobado");
      cursosAprobados.add(boton.id);

      const desbloquea = boton.dataset.unlocks;
      if (!desbloquea) return;

      const ids = desbloquea.split(",");

      ids.forEach(id => {
        const cursoDestino = document.getElementById(id);
        if (!cursoDestino) return;

        // Revisar si todos sus prerequisitos están aprobados
        const requisitos = getRequisitos(id);
        const todosAprobados = requisitos.every(req => cursosAprobados.has(req));

        if (todosAprobados) {
          cursoDestino.classList.remove("bloqueado");
        }
      });
    });
  });

  function getRequisitos(id) {
    // Puedes definir todos los requisitos aquí (ID de curso => [requisitos])
    const prerequisitos = {
      estadistica: ["matematica"],
      fisicoquimica: ["fisica"],
      quimica_inorganica: ["quimica_general"],
      quimica_organica1: ["quimica_general"],
      ingles2: ["ingles1"],
      quimica_analitica_cualitativa: ["quimica_inorganica"],
      quimica_organica2: ["quimica_organica1"],
      fisiologia: ["biologia"],
      genetica: ["biologia"],
      enzimologia: ["biologia"],
      salud: ["estadistica"],
      investigacion: ["estadistica"],
      // y continúa con el resto de prerequisitos...
    };
    return prerequisitos[id] || [];
  }
});

      }
    });
  });
});
