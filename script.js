// Estructura de la malla: semestres, ramos y dependencias
const malla = [
  {
    titulo: "Primer Año — I Semestre",
    ramos: [
      { id: "matematica", nombre: "Matemática", abre: ["estadistica"] },
      { id: "fisica", nombre: "Física", abre: ["fisicoquimica"] },
      { id: "quimica_general", nombre: "Química General", abre: ["quimica_inorganica", "quimica_organica_I"] },
      { id: "biologia", nombre: "Biología", abre: ["fisiologia", "genetica", "enzimologia"] },
      { id: "expresion_oral", nombre: "Expresión Oral y Escrita", abre: [] },
      { id: "ingles_tecnico_I", nombre: "Inglés Técnico I", abre: ["ingles_tecnico_II"] },
      { id: "mayoria_I", nombre: "Aprobar mayoría de materias", abre: ["botanica", "anatomia_humana"] },
    ]
  },
  {
    titulo: "Primer Año — II Semestre",
    ramos: [
      { id: "quimica_inorganica", nombre: "Química Inorgánica", abre: ["quimica_analitica_cualitativa"] },
      { id: "quimica_organica_I", nombre: "Química Orgánica I", abre: ["quimica_organica_II"] },
      { id: "botanica", nombre: "Botánica", abre: ["farmacognosia_I"] },
      { id: "anatomia_humana", nombre: "Anatomía Humana", abre: [] },
      { id: "estadistica", nombre: "Estadística", abre: ["salud_publica", "metodologia_investigacion"] },
      { id: "ingles_tecnico_II", nombre: "Inglés Técnico II", abre: [] },
    ]
  },
  {
    titulo: "Segundo Año — III Semestre",
    ramos: [
      { id: "fisicoquimica", nombre: "Fisicoquímica", abre: [] },
      { id: "quimica_organica_II", nombre: "Química Orgánica II", abre: [] },
      { id: "quimica_analitica_cualitativa", nombre: "Química Analítica Cualitativa", abre: ["quimica_analitica_cuantitativa"] },
      { id: "fisiologia", nombre: "Fisiología", abre: ["fisiopatologia"] },
      { id: "salud_publica", nombre: "Salud Pública e Interculturalidad", abre: [] },
      { id: "metodologia_investigacion", nombre: "Metodología de la Investigación", abre: [] },
    ]
  },
  {
    titulo: "Segundo Año — IV Semestre",
    ramos: [
      { id: "quimica_analitica_cuantitativa", nombre: "Química Analítica Cuantitativa", abre: ["bioquimica_I"] },
      { id: "genetica", nombre: "Genética", abre: [] },
      { id: "farmacognosia_I", nombre: "Farmacognosia I", abre: ["farmacognosia_II"] },
      { id: "fisiopatologia", nombre: "Fisiopatología", abre: ["inmunologia"] },
      { id: "enzimologia", nombre: "Enzimología", abre: ["microbiologia_industrial"] },
      { id: "aprobado_IV", nombre: "Aprobado el semestre", abre: ["microbiologia_I", "bromatologia", "analisis_instrumental"] },
    ]
  },
  {
    titulo: "Tercer Año — V Semestre",
    ramos: [
      { id: "microbiologia_I", nombre: "Microbiología I", abre: ["microbiologia_II"] },
      { id: "bioquimica_I", nombre: "Bioquímica I", abre: ["bioquimica_II"] },
      { id: "farmacognosia_II", nombre: "Farmacognosia II", abre: ["farmacologia_I"] },
      { id: "bromatologia", nombre: "Bromatología", abre: [] },
      { id: "analisis_instrumental", nombre: "Análisis Instrumental", abre: [] },
      { id: "inmunologia", nombre: "Inmunología", abre: [] },
      { id: "aprobado_V", nombre: "Aprobado el semestre", abre: ["hematologia_I", "parasitologia_I", "citologia"] },
    ]
  },
  {
    titulo: "Tercer Año — VI Semestre",
    ramos: [
      { id: "microbiologia_II", nombre: "Microbiología II", abre: [] },
      { id: "bioquimica_II", nombre: "Bioquímica II", abre: ["nutricion"] },
      { id: "hematologia_I", nombre: "Hematología I", abre: ["hematologia_II"] },
      { id: "parasitologia_I", nombre: "Parasitología I", abre: ["parasitologia_II"] },
      { id: "citologia", nombre: "Citología", abre: [] },
      { id: "farmacologia_I", nombre: "Farmacología I", abre: ["toxicologia_I", "tecnologia_farmaceutica_I", "farmacologia_II"] },
      { id: "aprobado_VI", nombre: "Aprobado el semestre", abre: ["toxicologia_I"] },
    ]
  },
  {
    titulo: "Cuarto Año — VII Semestre",
    ramos: [
      { id: "toxicologia_I", nombre: "Toxicología I", abre: ["toxicologia_II"] },
      { id: "nutricion", nombre: "Nutrición", abre: [] },
      { id: "hematologia_II", nombre: "Hematología II", abre: ["analisis_clinico_I"] },
      { id: "parasitologia_II", nombre: "Parasitología II", abre: [] },
      { id: "tecnologia_farmaceutica_I", nombre: "Tecnología Farmacéutica I", abre: ["control_medicamentos_I"] },
      { id: "farmacologia_II", nombre: "Farmacología II", abre: ["electiva", "farmacia_clinica"] },
      { id: "microbiologia_industrial", nombre: "Microbiología Industrial", abre: [] },
      { id: "aprobado_VII", nombre: "Aprobado el semestre", abre: ["biologia_molecular"] },
    ]
  },
  {
    titulo: "Cuarto Año — VIII Semestre",
    ramos: [
      { id: "toxicologia_II", nombre: "Toxicología II", abre: [] },
      { id: "analisis_clinico_I", nombre: "Análisis Clínico I", abre: ["analisis_clinico_II"] },
      { id: "control_medicamentos_I", nombre: "Control de Medicamentos I", abre: ["control_medicamentos_II"] },
      { id: "biologia_molecular", nombre: "Biología Molecular", abre: [] },
      { id: "tecnologia_farmaceutica_II", nombre: "Tecnología Farmacéutica II", abre: [] },
      { id: "electiva", nombre: "Electiva", abre: [] },
      { id: "aprobado_VIII", nombre: "Aprobado el semestre", abre: ["deontologia_legislacion", "gestion_administracion", "practica_profesional"] }
    ]
  },
  {
    titulo: "Quinto Año — IX Semestre",
    ramos: [
      { id: "farmacia_clinica", nombre: "Farmacia Clínica", abre: ["internado_rotatorio"] },
      { id: "analisis_clinico_II", nombre: "Análisis Clínico II", abre: ["internado_rotatorio"] },
      { id: "control_medicamentos_II", nombre: "Control de Medicamentos II", abre: ["internado_rotatorio"] },
      { id: "deontologia_legislacion", nombre: "Deontología y Legislación", abre: ["internado_rotatorio"] },
      { id: "gestion_administracion", nombre: "Gestión de Administración", abre: ["internado_rotatorio"] },
      { id: "practica_profesional", nombre: "Práctica Profesional", abre: ["internado_rotatorio"] },
    ]
  },
  {
    titulo: "Quinto Año — X Semestre",
    ramos: [
      { id: "internado_rotatorio", nombre: "Internado Rotatorio Evaluado", abre: [] },
      { id: "laboratorio", nombre: "Laboratorio", abre: [] },
      { id: "farmacia", nombre: "Farmacia", abre: [] },
    ]
  }
];

// Calcula los ramos y sus requisitos inversos
const ramosMap = {};
const requisitosMap = {};
// Paso 1: Mapear todos los ramos
malla.forEach(semestre => {
  semestre.ramos.forEach(ramo => {
    ramosMap[ramo.id] = ramo;
    ramo.approved = false; // Estado inicial
    ramo.unlocked = false; // Si está unlocked para click
    requisitosMap[ramo.id] = requisitosMap[ramo.id] || [];
  });
});
// Paso 2: Calcular requisitos (ramos que necesitan este ramo para desbloquearse)
Object.values(ramosMap).forEach(ramo => {
  ramo.abre.forEach(depId => {
    requisitosMap[depId].push(ramo.id);
  });
});

// Paso 3: Definir los requisitos previos
const previosMap = {};
Object.keys(ramosMap).forEach(id => previosMap[id] = []);
Object.entries(requisitosMap).forEach(([ramoId, reqs]) => {
  reqs.forEach(reqId => {
    previosMap[ramoId].push(reqId);
  });
});

// Los ramos iniciales desbloqueados (primer semestre y algunas condiciones especiales)
function getIniciales() {
  // Aquellos que no tienen ningún requisito previo
  const iniciales = [];
  Object.keys(ramosMap).forEach(id => {
    // Si nadie lo desbloquea, es inicial
    if (previosMap[id].length === 0) iniciales.push(id);
  });
  return iniciales;
}

// Estado de la malla
let aprobado = {};
let unlocked = {};

// Inicializa el estado
function inicializarMalla() {
  aprobado = {};
  unlocked = {};
  Object.keys(ramosMap).forEach(id => {
    aprobado[id] = false;
    unlocked[id] = false;
  });
  getIniciales().forEach(id => unlocked[id] = true);
}

// Renderiza la malla
function renderMalla() {
  const container = document.getElementById('malla-container');
  container.innerHTML = '';
  malla.forEach(semestre => {
    const semestreDiv = document.createElement('div');
    semestreDiv.className = 'semestre';
    const tituloDiv = document.createElement('div');
    tituloDiv.className = 'semestre-title';
    tituloDiv.textContent = semestre.titulo;
    semestreDiv.appendChild(tituloDiv);

    semestre.ramos.forEach(ramo => {
      const ramoDiv = document.createElement('div');
      ramoDiv.className = 'ramo';
      ramoDiv.classList.add(unlocked[ramo.id] ? 'unlocked' : 'locked');
      if (aprobado[ramo.id]) ramoDiv.classList.add('approved');
      ramoDiv.setAttribute('data-id', ramo.id);

      const nombreDiv = document.createElement('div');
      nombreDiv.className = 'nombre';
      nombreDiv.textContent = ramo.nombre;
      ramoDiv.appendChild(nombreDiv);

      const estadoDiv = document.createElement('div');
      estadoDiv.className = 'estado';
      estadoDiv.textContent = aprobado[ramo.id]
        ? "Aprobado"
        : unlocked[ramo.id]
          ? "Desbloqueado"
          : "Bloqueado";
      ramoDiv.appendChild(estadoDiv);

      // Click handler
      ramoDiv.onclick = () => aprobarRamo(ramo.id);

      semestreDiv.appendChild(ramoDiv);
    });

    container.appendChild(semestreDiv);
  });
}

// Lógica para aprobar ramo y desbloquear los dependientes
function aprobarRamo(id) {
  if (!unlocked[id] || aprobado[id]) return;
  aprobado[id] = true;
  // Desbloquea los que dependan de este ramo si todos sus previos están aprobados
  ramosMap[id].abre.forEach(depId => {
    // ¿Todos los previos de depId están aprobados?
    const previos = previosMap[depId];
    if (previos.every(prevId => aprobado[prevId])) {
      unlocked[depId] = true;
    }
  });
  renderMalla();
}

window.onload = function() {
  inicializarMalla();
  renderMalla();
};
