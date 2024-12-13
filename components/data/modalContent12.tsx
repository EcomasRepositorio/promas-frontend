export const modalContent = [
  {
    id: 1,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/12ssoma/1_!.webp"
            alt="Elaboración de matriz IPERC - mapa de riesgos"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Elaboración de matriz IPERC - mapa de riesgos{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La matriz IPERC (Identificación de Peligros, Evaluación de Riesgos y
            Controles) y el mapa de riesgos son herramientas clave para la
            gestión de seguridad y salud ocupacional. Permiten identificar,
            evaluar y priorizar los riesgos en un área de trabajo, implementando
            medidas de control eficaces.
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
              Identificación de Peligros
              <p>
                Analiza actividades y procesos para detectar peligros físicos,
                químicos, biológicos, ergonómicos y psicosociales.
              </p>
            </li>
            <li>
              Evaluación de Riesgos
              <p>
                Asigna niveles de probabilidad y severidad a cada peligro,
                clasificando los riesgos como bajos, medios o altos.
              </p>
              <p></p>
            </li>
            <li>
              Medidas de Control
              <p>
                Establece controles jerárquicos: eliminación, sustitución,
                controles de ingeniería, administrativos y EPP.
              </p>
            </li>
            <li>
              Mapa de Riesgos:
              <p>
                Representa gráficamente los riesgos en un plano del área,
                indicando su ubicación y nivel de peligrosidad.
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
    id: 2,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/12ssoma/1.webp"
            alt="Comité de seguridad y salud en el trabajo"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Comité de seguridad y salud en el trabajo
          </h1>
          <p className="text-gray-300 mb-6">
            El Comité de Seguridad y Salud en el Trabajo es un órgano paritario
            conformado por representantes de empleadores y trabajadores. Su
            propósito es promover la seguridad y salud en el entorno laboral
            mediante la identificación de riesgos, supervisión de medidas
            preventivas y evaluación de su efectividad.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Funciones del Comité
              <p>Identificar y evaluar riesgos laborales.</p>
              <p>Proponer medidas preventivas y correctivas.</p>
              <p>
                Supervisar el cumplimiento del sistema de seguridad y salud en
                el trabajo.
              </p>
            </li>
            <li>
              Composición
              <p>
                Está integrado por representantes de la empresa y de los
                trabajadores en igual proporción.
              </p>
            </li>
            <li>
              Reuniones y Acciones
              <p>
                Realiza reuniones periódicas para revisar avances y evaluar
                incidentes.
              </p>
              <p>
                Elabora informes y recomendaciones para mejorar las condiciones
                laborales.
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
            src="/cursos_gpt/12ssoma/2.webp"
            alt="Seguridad en trabajo de alto riesgo"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Seguridad en trabajo de alto riesgo{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            Los trabajos de alto riesgo son actividades que presentan un alto
            potencial de causar accidentes graves o fatales si no se gestionan
            adecuadamente. Implementar medidas de seguridad estrictas es crucial
            para proteger a los trabajadores y cumplir con las normativas.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Identificación de Trabajos de Alto Riesgo
              <p>
                Incluye trabajos en altura, espacios confinados, manejo de
                materiales peligrosos, soldadura, y actividades cercanas a
                energía eléctrica.
              </p>
            </li>
            <li>
              Medidas Preventivas
              <p>Planes de Trabajo Seguro (PTS)</p>
              <p>Equipos de Protección Personal (EPP)</p>
              <p>Capacitació</p>
            </li>
            <li>
              Supervisión y Control
              <p>Inspecciones regulares de equipos y áreas de trabajo.</p>
              <p>
                Supervisores dedicados para garantizar el cumplimiento de los
                protocolos de seguridad.
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
            src="/cursos_gpt/12ssoma/3.webp"
            alt="Investigación y reporte de accidentes laborales"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Investigación y reporte de accidentes laborales{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La investigación y reporte de accidentes laborales son procesos
            esenciales para identificar las causas de los incidentes, prevenir
            su repetición y garantizar el cumplimiento de normativas de
            seguridad y salud ocupacional.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Investigación de Accidentes
              <p>Recopilación de Datos</p>
              <p>Análisis de Causas</p>
            </li>
            <li>
              Elaboración del Reporte
              <p>
                Documenta los hechos, análisis y conclusiones en un informe
                formal.
              </p>
              <p>Incluye recomendaciones para prevenir futuros incidentes.</p>
            </li>
            <li>
              Acciones Correctivas y Preventivas
              <p>
                Implementa medidas para eliminar riesgos identificados y mejorar
                los procesos.
              </p>
              <p>
                Realiza seguimiento para evaluar la efectividad de las acciones
                tomadas.
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
            src="/cursos_gpt/12ssoma/4.webp"
            alt="Prevención de riesgos laborales"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Prevención de riesgos laborales{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La prevención de riesgos laborales es un conjunto de medidas y
            estrategias diseñadas para identificar, evaluar y controlar los
            peligros asociados a las actividades laborales, con el objetivo de
            proteger la salud y seguridad de los trabajadores.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Identificación de Peligros
              <p>
                Analiza tareas, equipos y entornos de trabajo para detectar
                riesgos físicos, químicos, biológicos, ergonómicos y
                psicosociales.
              </p>
            </li>
            <li>
              Evaluación de Riesgos:
              <p>
                Determina la probabilidad y severidad de cada peligro para
                priorizar su control.
              </p>
            </li>
            <li>
              Medidas de Prevención:
              <p>Controles Técnicos</p>
              <p>Controles Administrativos</p>
              <p>Equipos de Protección Personal (EPP</p>
            </li>
            <li>
              Supervisión y Mejora Continua:
              <p>
                Realiza inspecciones regulares y adapta medidas según las
                necesidades.
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
            src="/cursos_gpt/12ssoma/5.webp"
            alt="Fiscalización y auditorias de SSO - SUNAFIL"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Fiscalización y auditorias de SSO - SUNAFIL{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La Superintendencia Nacional de Fiscalización Laboral (SUNAFIL) es
            el organismo encargado de supervisar y fiscalizar el cumplimiento de
            las normativas de Seguridad y Salud Ocupacional (SSO) en las
            empresas. Este proceso garantiza entornos laborales seguros y el
            respeto a los derechos de los trabajadores.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Objetivo
              <p>
                {" "}
                Verificar el cumplimiento de normativas de seguridad y salud en
                el trabajo.
              </p>
            </li>
            <li>
              Proceso
              <p>
                Inspección documental y de campo, seguida de informes o
                sanciones.
              </p>
            </li>
            <li>
              Recomendación
              <p>
                Mantener registros actualizados, realizar auditorías internas y
                capacitar al personal.
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
            src="/cursos_gpt/12ssoma/6.webp"
            alt="Fiscalización ambiental"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Fiscalización ambiental </h1>
          <p className="text-gray-300 mb-6">
            La fiscalización ambiental es el proceso mediante el cual las
            autoridades supervisan el cumplimiento de normativas ambientales
            para garantizar la protección del medio ambiente y la sostenibilidad
            de las actividades productivas.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Objetivo
              <p>
                {" "}
                Asegurar que las empresas cumplan con regulaciones sobre
                emisiones, residuos, manejo de recursos y protección de
                ecosistemas.
              </p>
            </li>
            <li>
              Proceso
              <p>
                Inspección Documental: Verifica estudios de impacto ambiental,
                planes de manejo y licencias.
              </p>
              <p>
                Inspección en Campo: Evalúa operaciones, emisiones, vertimientos
                y control de residuos.
              </p>
            </li>
            <li>
              Sanciones
              <p>Impone multas o medidas correctivas por incumplimientos.</p>
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
            src="/cursos_gpt/12ssoma/8.webp"
            alt="Supervisor SSOMA"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Supervisor SSOMA </h1>
          <p className="text-gray-300 mb-6">
            El Supervisor SSOMA es el responsable de garantizar que las
            actividades laborales se realicen en condiciones seguras,
            protegiendo la salud de los trabajadores y minimizando los impactos
            ambientales. Su función es clave para el cumplimiento de normativas
            y la mejora continua en estos ámbitos.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Funciones Principales
              <p>Identificar y controlar riesgos laborales y ambientales.</p>
              <p>
                Verificar el cumplimiento de normas de seguridad, salud y medio
                ambiente.
              </p>
              <p>Capacitar al personal en prácticas seguras y sostenibles.</p>
            </li>
            <li>
              Supervisión y Monitoreo
              <p>
                Realiza inspecciones periódicas en campo y revisa el uso de EPP.
              </p>
              <p>
                Evalúa incidentes y propone acciones correctivas y preventivas.
              </p>
            </li>
            <li>
              Gestión Documental
              <p>
                Mantiene actualizados los registros de SSOMA (IPERC, reportes de
                accidentes, planes ambientales).
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
            src="/cursos_gpt/12ssoma/9.webp"
            alt="Auditor Interno SSOMA"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Auditor Interno SSOMA </h1>
          <p className="text-gray-300 mb-6">
            El Auditor Interno SSOMA es el encargado de evaluar de manera
            sistemática el cumplimiento de los sistemas de gestión en Seguridad,
            Salud Ocupacional y Medio Ambiente dentro de una organización. Su
            objetivo es identificar oportunidades de mejora y asegurar el
            cumplimiento de normativas y estándares aplicables.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Funciones Principales:
              <p>Evaluar el desempeño del sistema de gestión SSOMA.</p>
              <p>
                Identificar no conformidades y recomendar acciones correctivas y
                preventivas.
              </p>
            </li>
            <li>
              Proceso de Auditoría:
              <p>Planificación, Ejecución, Informe</p>
            </li>
            <li>
              Cumplimiento Normativo:
              <p>
                Asegura que la organización cumple con normativas legales y
                estándares internacionales (ISO 45001, ISO 14001).
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
    id: 10,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/12ssoma/10.webp"
            alt="Gestión ambiental - ISO 14001"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Gestión ambiental - ISO 14001{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La ISO 14001 es una norma internacional que establece los requisitos
            para implementar un Sistema de Gestión Ambiental (SGA). Su objetivo
            es ayudar a las organizaciones a minimizar sus impactos ambientales,
            cumplir con normativas y mejorar su desempeño ambiental.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Principios del SGA:
              <p>Identificación y control de impactos ambientales.</p>
              <p>Cumplimiento de normativas ambientales aplicables.</p>
              <p>Mejora continua del desempeño ambiental.</p>
            </li>
            <li>
              Requisitos Clave de ISO 14001:
              <p>
                Contexto de la Organización, Gestión de Riesgos y Oportunidades,
                Control Operacional, Monitoreo y Evaluación
              </p>
            </li>
            <li>
              Beneficios
              <p>Mejora la eficiencia en el uso de recursos.</p>
              <p>Reduce costos por incumplimientos ambientales.</p>
              <p>Incrementa la confianza de las partes interesadas.</p>
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
    id: 11,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/12ssoma/11.webp"
            alt="Implementación de sistema de gestión de SST"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
          Implementación de sistema de gestión de SST          </h1>
          <p className="text-gray-300 mb-6">
          Un Sistema de Gestión de SST, como el basado en la norma ISO 45001, se diseña para prevenir lesiones y enfermedades laborales, mejorar las condiciones de trabajo y garantizar el cumplimiento de normativas de seguridad.


          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
            Planificación
            <p>Identificar peligros, evaluar riesgos y establecer controles (matriz IPERC).
            </p>
            <p>Definir objetivos de seguridad y salud alineados con la política de SST.
            </p>

            </li>
            <li>
            Implementación
            <p>Capacitar al personal en procedimientos y uso de equipos de protección personal (EPP).
            </p>
            <p>Establecer planes de emergencia, protocolos de inspección y sistemas de comunicación.
            </p>

</li>
            <li>
            Monitoreo y Mejora Continua
            <p>Realizar auditorías internas para identificar no conformidades.
            </p>
            <p>Implementar acciones correctivas y preventivas para optimizar el sistema.
            </p>


            </li>
            <li>Beneficios
            <p>Reducción de accidentes y enfermedades laborales.
            </p>
            <p>Cumplimiento normativo y mejora de la imagen organizacional.
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
