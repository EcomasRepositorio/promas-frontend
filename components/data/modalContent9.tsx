export const modalContent = [
  {
    id: 1,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/9ing_puentes/1.webp"
            alt="Diseño sísmico en puentes AASHTO-LRFD"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Diseño sísmico en puentes AASHTO-LRFD{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            Estos elementos son pilares fundamentales en la planificación y
            construcción de infraestructuras viales. La correcta integración de
            estas disciplinas garantiza funcionalidad, eficiencia y seguridad en
            las carreteras.
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
              Topografía: Mide y representa el terreno con precisión para el
              trazado vial.
            </li>
            <li>
              Diseño Geométrico: Define alineaciones y pendientes para comodidad
              y seguridad.
            </li>
            <li>
              Señalización: Guía y protege a los usuarios con señales claras y
              efectivas.
            </li>
            <li>
              Seguridad Vial: Implementa medidas para prevenir accidentes y
              garantizar protección.
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
            src="/cursos_gpt/9ing_puentes/2.webp"
            alt="Mantenimiento y conservación de puentes"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Mantenimiento y conservación de puentes
          </h1>
          <p className="text-gray-300 mb-6">
            El mantenimiento y conservación de puentes son actividades
            esenciales para garantizar su seguridad, funcionalidad y
            durabilidad. Estas tareas incluyen inspecciones regulares,
            reparaciones preventivas y correctivas, así como intervenciones para
            prolongar su vida útil.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Inspección Regular:
              <p>
                Evalúa el estado estructural (fisuras, corrosión, desgaste)
                mediante inspecciones visuales y técnicas avanzadas como
                ultrasonidos o drones.
              </p>
            </li>
            <li>
              Mantenimiento Preventivo:
              <p>
                Incluye limpieza, pintura protectora y revisión de juntas,
                drenajes y apoyos para prevenir daños mayores.
              </p>
            </li>
            <li>
              Reparaciones Correctivas:
              <p>
                Aborda problemas detectados en inspecciones, como refuerzos en
                zonas dañadas, sustitución de elementos estructurales o
                rehabilitación de pavimentos.
              </p>
            </li>
            <li>
              Gestión de Riesgos:
              <p>
                Implementa sistemas de monitoreo en tiempo real para detectar
                deformaciones, vibraciones o movimientos que comprometan la
                seguridad.
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
            src="/cursos_gpt/9ing_puentes/3.webp"
            alt="Inspección, evaluación de puentes bajo la metodología SCAP"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Inspección, evaluación de puentes bajo la metodología SCAP{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La metodología SCAP (Sistema de Calificación de Puentes) es un
            sistema utilizado para inspeccionar y evaluar la condición
            estructural y funcional de puentes. Permite clasificar su estado,
            identificar deficiencias y priorizar las intervenciones de
            mantenimiento o reparación necesarias.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Inspección Visual: Evalúa daños en elementos como pavimento, vigas
              y apoyos.
            </li>
            <li>
              Calificación Estructural: Clasifica el estado del puente en
              "bueno", "regular", "malo" o "crítico".
            </li>
            <li>
              Prioridad de Reparaciones: Define intervenciones urgentes según el
              estado detectado.
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
            src="/cursos_gpt/9ing_puentes/4.webp"
            alt="Diseño de puentes, pontones"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Diseño de puentes, pontones{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El diseño de puentes y pontones es un proceso técnico que asegura la
            estabilidad, funcionalidad y seguridad de estas estructuras,
            adaptándose a las condiciones del terreno, el caudal y las
            necesidades de tránsito.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Estudio Preliminar: Analiza las condiciones del terreno, caudal
              del río y carga esperada.
            </li>
            <li>
              Selección del Tipo de Estructura: Elige entre puentes (de vigas,
              arco, colgantes) o pontones flotantes según el contexto.
            </li>
            <li>
              Diseño Estructural: Define materiales, secciones y elementos para
              soportar cargas estáticas y dinámicas con seguridad.
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
            src="/cursos_gpt/9ing_puentes/5.webp"
            alt="Estudios de Hidrología e hidráulica en puentes"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Estudios de Hidrología e hidráulica en puentes{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            Los estudios de hidrología e hidráulica son esenciales en el diseño
            y construcción de puentes, ya que evalúan el comportamiento del agua
            y las condiciones del cauce para garantizar la seguridad,
            funcionalidad y durabilidad de la estructura.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Estudio Hidrológico:
              <p>
                Determina caudales máximos, periodos de retorno y patrones de
                escorrentía.
              </p>
              <p>Identifica riesgos de inundaciones o crecidas.</p>
            </li>
            <li>
              Estudio Hidráulico:
              <p>
                Evalúa el flujo del agua bajo el puente para dimensionar luces,
                pilas y altura libre.
              </p>
              <p>
                Analiza efectos como erosión, sedimentación y velocidad del
                agua.
              </p>
            </li>
            <li>
              Diseño Seguro:
              <p>
                Garantiza que la estructura soporte condiciones extremas y
                minimiza impactos en el cauce natural.
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
    id: 6,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/9ing_puentes/6.webp"
            alt="Estudios Geológicos y geotécnicos en puentes"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Estudios Geológicos y geotécnicos en puentes{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            Los estudios geológicos y geotécnicos son fundamentales para
            garantizar la estabilidad y seguridad de los puentes. Estas
            evaluaciones identifican las características del terreno y su
            capacidad para soportar las cargas estructurales.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Estudio Geológico:
              <p>
                Analiza la composición y estructura del terreno, identificando
                riesgos como fallas geológicas, deslizamientos y erosión.
              </p>
            </li>
            <li>
              Estudio Geotécnico:
              <p>
                Evalúa propiedades del suelo y roca, como capacidad portante,
                compactación y cohesión, para diseñar cimentaciones seguras.
              </p>
            </li>
            <li>
              Diseño de Cimentaciones:
              <p>
                Define el tipo de cimentación (superficial o profunda) según las
                condiciones del suelo y las cargas del puente.
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
            src="/cursos_gpt/9ing_puentes/7.webp"
            alt="Diseño y modalamiento de puentes con SAP 2000"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Diseño y modalamiento de puentes con SAP 2000{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            SAP2000 es una herramienta avanzada para el análisis y diseño
            estructural de puentes, permitiendo modelar diferentes tipos de
            estructuras, evaluar cargas y obtener diseños optimizados y seguros.
            Su interfaz intuitiva y capacidad de análisis robusta lo convierten
            en una opción ideal para proyectos complejos.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Modelamiento: Crea estructuras 3D de puentes con materiales,
              secciones y conexiones precisas.
            </li>
            <li>
              Análisis de Cargas: Evalúa cargas vivas, muertas, sísmicas y
              viento.
            </li>
            <li>
              Diseño Automatizado: Optimiza elementos como vigas y pilas según
              normativas.
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
            src="/cursos_gpt/9ing_puentes/8.webp"
            alt="Diseño y modelamiento de puentes con CSi BRIDGE"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Diseño y modelamiento de puentes con CSi BRIDGE{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            CSiBridge es un software especializado en el diseño y análisis
            estructural de puentes. Facilita el modelamiento, cálculo de cargas,
            diseño y optimización de diversos tipos de puentes, adaptándose a
            normativas internacionales.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Modelamiento Avanzado:
              <p>
                Genera modelos tridimensionales de puentes atirantados,
                colgantes, de vigas y arcos.
              </p>
              <p>
                Permite definir materiales, geometría y condiciones del terreno.
              </p>
            </li>
            <li>
              Análisis de Cargas:
              <p>Simula cargas vivas, muertas, térmicas y dinámicas.</p>
              <p>Incluye análisis sísmico y efectos de viento.</p>
            </li>
            <li>
              Diseño y Optimización:
              <p>
                Realiza diseños automatizados y verifica el cumplimiento de
                normativas específicas.
              </p>
              <p>Optimiza elementos como pilas, vigas y cables.</p>
            </li>
            <li>
              Resultados Visuales e Informes:
              <p>
                Genera deformaciones, tensiones y fuerzas internas para un
                análisis detallado.
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
            src="/cursos_gpt/9ing_puentes/9.webp"
            alt="Modelamiento y análisis estructural de puentes"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Modelamiento y análisis estructural de puentes{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El modelamiento y análisis estructural de puentes consiste en
            representar y evaluar el comportamiento de estas estructuras bajo
            diferentes condiciones de carga y factores ambientales. Esto asegura
            un diseño seguro, eficiente y acorde a las normativas.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Modelamiento Estructural:
              <p>
                Representa geometría, materiales y conexiones del puente en 3D.
              </p>
              <p>
                Utiliza software como SAP2000, CSiBridge o MIDAS para simular
                diferentes tipos de puentes (arco, vigas, colgantes).
              </p>
            </li>
            <li>
              Análisis de Cargas:
              <p>Evalúa cargas vivas, muertas, térmicas, viento y sísmicas.</p>
              <p>Simula el impacto de vehículos y efectos dinámicos.</p>
            </li>
            <li>
              Resultados y Optimización:
              <p>
                Analiza fuerzas internas, deformaciones y estabilidad global.
              </p>
              <p>
                Optimiza secciones y elementos estructurales para garantizar
                seguridad y eficiencia.
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
