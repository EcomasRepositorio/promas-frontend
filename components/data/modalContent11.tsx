export const modalContent = [
  {
    id: 1,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/11gestion_calidad/1.webp"
            alt="Interpretación e implementación de la norma ISO 31000 - Gestión de Riesgos"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Interpretación e implementación de la norma ISO 31000 - Gestión de
            Riesgos{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La norma ISO 31000 proporciona un marco para identificar, evaluar y
            gestionar riesgos en cualquier tipo de organización. Su
            implementación asegura que los riesgos sean abordados de manera
            sistemática, mejorando la toma de decisiones y la resiliencia
            organizacional.
          </p>

          {/* Información del Curso */}
          {/* <div className="space-y-2 mb-6">
            <p>
              <span className="font-semibold">Fecha de inicio:</span> Próximamente
            </p>
            <p>
              <span className="font-semibold">Modalidad:</span> Virtual
            </p>
            <p>
              <span className="font-semibold">Duración:</span> 4 meses
            </p>
            <p>
              <span className="font-semibold">Horas del curso:</span> 420 horas
              correspondientes a 26 créditos
            </p>
          </div> */}

          {/* Módulos del Diplomado */}
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Interpretación de la Norma:
              <p>Principios de Gestión de Riesgos</p>
              <p>Estructura</p>
            </li>
            <li>
              Implementación
              <p>Identificación de Riesgos</p>
              <p>Evaluación y Tratamiento </p>
            </li>
            <li>
              Monitoreo y Mejora Continua:
              <p>
                Realiza seguimiento constante y revisiones para ajustar el
                sistema según cambios en el contexto o los objetivos.
              </p>
              <p></p>
            </li>
          </ul>

          {/* Botón de Acción */}
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            onClick={() => {
              window.open(
                `https://wa.me/51984040264?text=${encodeURIComponent(
                  "Hola, estoy interesado en el curso y me gustaría recibir más información."
                )}`,
                "_blank"
              );
            }}
          >
            Contactar
          </button>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/11gestion_calidad/2.webp"
            alt="FertiirrigProgramas Pre-requisitos con base en ISO 22002-1 y BRC v.09ación"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Programas Pre-requisitos con base en ISO 22002-1 y BRC v.09
          </h1>
          <p className="text-gray-300 mb-6">
            Los programas prerrequisitos (PPR) son condiciones y actividades
            básicas necesarias para mantener un entorno higiénico y controlar
            los peligros en la producción de alimentos. Tanto la ISO 22002-1
            como la norma BRC v.9 enfatizan su implementación como parte de un
            sistema efectivo de gestión de la seguridad alimentaria.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              ISO 22002-1
              <p>
                : Define PPR básicos como limpieza, control de plagas y
                mantenimiento de equipos
              </p>
            </li>
            <li>
              BRC v.9
              <p>
                {" "}
                Amplía PPR con trazabilidad, control de alérgenos y cultura de
                seguridad alimentaria.
              </p>
            </li>
            <li>
              Integración
              <p>
                Ambos estándares recomiendan combinar PPR con HACCP para un
                control efectivo.
              </p>
            </li>
          </ul>

          {/* Botón de Acción */}
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            onClick={() => {
              window.open(
                `https://wa.me/51984040264?text=${encodeURIComponent(
                  "Hola, estoy interesado en el curso y me gustaría recibir más información."
                )}`,
                "_blank"
              );
            }}
          >
            Contactar
          </button>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/11gestion_calidad/3.webp"
            alt="Análisis de peligros y puntos críticos de control (HACCP)"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Análisis de peligros y puntos críticos de control (HACCP){" "}
          </h1>
          <p className="text-gray-300 mb-6">
            HACCP es un sistema preventivo que identifica, evalúa y controla
            peligros significativos para la seguridad alimentaria en toda la
            cadena de producción. Es fundamental para garantizar alimentos
            seguros y cumplir con normativas internacionales.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Análisis de Peligros
              <p>
                Identifica riesgos físicos, químicos y biológicos en cada etapa
                del proceso.
              </p>
            </li>
            <li>
              Puntos Críticos de Control (PCC)
              <p>
                Define los pasos donde se pueden prevenir, eliminar o reducir
                los peligros a niveles aceptables.
              </p>
            </li>
            <li>
              Monitoreo y Correctivas
              <p>
                Establece procedimientos para supervisar los PCC y acciones a
                tomar ante desviaciones.
              </p>
            </li>
          </ul>

          {/* Botón de Acción */}
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            onClick={() => {
              window.open(
                `https://wa.me/51984040264?text=${encodeURIComponent(
                  "Hola, estoy interesado en el curso y me gustaría recibir más información."
                )}`,
                "_blank"
              );
            }}
          >
            Contactar
          </button>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/CURSOS/esquema.webp"
            alt="Esquema FSSC 22000"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Esquema FSSC 22000 </h1>
          <p className="text-gray-300 mb-6">
            El esquema FSSC 22000 es un sistema de certificación reconocido a
            nivel global para la gestión de la seguridad alimentaria. Combina la
            norma ISO 22000, requisitos adicionales y programas prerrequisitos
            específicos (ISO/TS 22002), ofreciendo una solución completa para
            garantizar la inocuidad de los alimentos.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Base en ISO 22000:
              <p>
                Proporciona un sistema de gestión enfocado en análisis de
                riesgos, control de procesos y mejora continua.
              </p>
            </li>
            <li>
              Programas Prerrequisitos (PPR):
              <p>
                Implementa controles específicos como limpieza, control de
                plagas, trazabilidad y mantenimiento (según ISO/TS 22002).
              </p>
            </li>
            <li>
              Requisitos Adicionales:
              <p>
                Reconocido por GFSI, facilita el acceso a mercados
                internacionales al demostrar altos estándares de seguridad
                alimentaria.
              </p>
            </li>
          </ul>

          {/* Botón de Acción */}
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            onClick={() => {
              window.open(
                `https://wa.me/51984040264?text=${encodeURIComponent(
                  "Hola, estoy interesado en el curso y me gustaría recibir más información."
                )}`,
                "_blank"
              );
            }}
          >
            Contactar
          </button>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/11gestion_calidad/5.webp"
            alt="Fundamentos e Interpretación de los Sistemas de Gestión de la Calidad ISO 9001"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Fundamentos e Interpretación de los Sistemas de Gestión de la
            Calidad ISO 9001{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La norma ISO 9001 establece los requisitos para implementar un
            Sistema de Gestión de la Calidad (SGC), enfocado en satisfacer las
            necesidades del cliente, mejorar continuamente los procesos y
            garantizar la eficiencia operativa.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Enfoque Basado en Procesos:
              <p>
                Define, gestiona y mejora los procesos clave para cumplir con
                los objetivos de calidad.
              </p>
            </li>
            <li>
              Ciclo PHVA (Planificar-Hacer-Verificar-Actuar):
              <p>Promueve una gestión sistemática para la mejora continua.</p>
            </li>
            <li>
              Requisitos Clave:
              <p>Liderazgo, Gestión del Riesgo, Satisfacción del Cliente</p>
            </li>
            <li>Beneficios:</li>
            <p>
              Mejora la eficiencia operativa, aumenta la satisfacción del
              cliente y facilita el acceso a mercados globales.
            </p>
          </ul>

          {/* Botón de Acción */}
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            onClick={() => {
              window.open(
                `https://wa.me/51984040264?text=${encodeURIComponent(
                  "Hola, estoy interesado en el curso y me gustaría recibir más información."
                )}`,
                "_blank"
              );
            }}
          >
            Contactar
          </button>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/11gestion_calidad/6.webp"
            alt="Inspección y muestreo de alimentos"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Inspección y muestreo de alimentos
          </h1>
          <p className="text-gray-300 mb-6">
            La inspección y muestreo de alimentos son procesos fundamentales
            para garantizar la calidad, inocuidad y cumplimiento normativo de
            los productos en todas las etapas de la cadena alimentaria. Estos
            métodos evalúan características físicas, químicas, microbiológicas y
            organolépticas de los alimentos.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Inspección
              <p>
                Verifica condiciones de almacenamiento, manipulación y
                etiquetado.
              </p>
              <p>
                Asegura el cumplimiento de estándares legales y especificaciones
                de calidad.
              </p>
            </li>
            <li>
              Muestreo
              <p>
                Selecciona una cantidad representativa de producto para
                análisis.
              </p>
              <p>
                Sigue protocolos como el Codex Alimentarius para garantizar
                resultados fiables.
              </p>
            </li>
            <li>
              Análisis y Evaluación
              <p>
                Determina si el alimento cumple con los parámetros de calidad e
                inocuidad establecidos.
              </p>
              <p>
                Identifica posibles contaminantes o incumplimientos normativos.
              </p>
            </li>
          </ul>

          {/* Botón de Acción */}
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            onClick={() => {
              window.open(
                `https://wa.me/51984040264?text=${encodeURIComponent(
                  "Hola, estoy interesado en el curso y me gustaría recibir más información."
                )}`,
                "_blank"
              );
            }}
          >
            Contactar
          </button>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/11gestion_calidad/7.webp"
            alt="Trazabilidad y etiquetado"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Trazabilidad y etiquetado{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La trazabilidad y el etiquetado son herramientas esenciales para
            garantizar la seguridad alimentaria, el cumplimiento normativo y la
            confianza del consumidor. Permiten rastrear el recorrido de un
            producto a lo largo de la cadena de suministro y proporcionar
            información clara sobre su contenido y origen.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Trazabilidad
              <p>
                Registra cada etapa del proceso productivo (producción,
                transporte, almacenamiento y distribución).
              </p>
              <p>
                Facilita la identificación de lotes en caso de retiro o
                problemas de calidad.
              </p>
            </li>
            <li>
              Etiquetado:
              <p>
                Proporciona información obligatoria como ingredientes,
                alérgenos, fecha de vencimiento y lugar de origen.
              </p>
              <p>
                Cumple con normativas como el Codex Alimentarius o regulaciones
                locales específicas.
              </p>
            </li>
            <li>
              Beneficios:
              <p>Mejora la gestión de riesgos en seguridad alimentaria.</p>
              <p>Aumenta la transparencia y confianza del consumidor.</p>
            </li>
          </ul>

          {/* Botón de Acción */}
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            onClick={() => {
              window.open(
                `https://wa.me/51984040264?text=${encodeURIComponent(
                  "Hola, estoy interesado en el curso y me gustaría recibir más información."
                )}`,
                "_blank"
              );
            }}
          >
            Contactar
          </button>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/11gestion_calidad/8.webp"
            alt="Auditoria del Sistema de Gestión de Calidad e Inocuidad Alimentaria en base a la Norma ISO 19011"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Auditoria del Sistema de Gestión de Calidad e Inocuidad Alimentaria
            en base a la Norma ISO 19011{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La norma ISO 19011 establece las directrices para realizar
            auditorías internas y externas en sistemas de gestión, incluyendo
            los de calidad (ISO 9001) e inocuidad alimentaria (ISO 22000). Este
            enfoque asegura que los sistemas cumplan con los estándares
            establecidos y fomenten la mejora continua.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Planificación
              <p>Define objetivos, alcance y criterios.</p>
            </li>
            <li>
              Ejecución
              <p>Revisa procesos, identifica conformidades y mejoras.</p>
            </li>
            <li>
              Informe y Seguimiento
              <p>
                {" "}
                Documenta hallazgos y asegura la implementación de acciones
                correctivas.
              </p>
            </li>
          </ul>

          {/* Botón de Acción */}
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            onClick={() => {
              window.open(
                `https://wa.me/51984040264?text=${encodeURIComponent(
                  "Hola, estoy interesado en el curso y me gustaría recibir más información."
                )}`,
                "_blank"
              );
            }}
          >
            Contactar
          </button>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/11gestion_calidad/9.webp"
            alt="Calidad e Inocuidad alimentaria"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Calidad e Inocuidad alimentaria{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La calidad e inocuidad alimentaria son principios fundamentales para
            garantizar que los alimentos cumplan con estándares de seguridad,
            normativas y las expectativas del consumidor, asegurando que sean
            aptos para el consumo sin riesgos para la salud.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Calidad Alimentaria
              <p>
                Asegura atributos como sabor, textura, apariencia y cumplimiento
                de especificaciones.
              </p>
            </li>
            <li>
              Inocuidad Alimentaria
              <p>
                Garantiza que los alimentos estén libres de contaminantes
                físicos, químicos y biológicos que puedan causar daño.
              </p>
            </li>
            <li>
              Gestión Integral
              <p>
                Implementa sistemas como HACCP e ISO 22000 para controlar
                riesgos y asegurar la seguridad a lo largo de la cadena
                alimentaria.
              </p>
            </li>
          </ul>

          {/* Botón de Acción */}
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            onClick={() => {
              window.open(
                `https://wa.me/51984040264?text=${encodeURIComponent(
                  "Hola, estoy interesado en el curso y me gustaría recibir más información."
                )}`,
                "_blank"
              );
            }}
          >
            Contactar
          </button>
        </div>
      </div>
    ),
  },
];
