export const modalContent = [
  {
    id: 1,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/4gestion-municipal/1.webp"
            alt="Gestión y manejo de residuos sólidos municipales"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Gestión y manejo de residuos sólidos municipales{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La gestión y manejo de residuos sólidos municipales abarca las
            actividades relacionadas con la recolección, transporte,
            tratamiento, reciclaje y disposición final de los desechos generados
            por hogares, comercios y servicios en áreas urbanas y rurales. Su
            objetivo principal es garantizar la sostenibilidad ambiental y la
            salud pública.
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
              Recolección y Transporte Eficiente: Diseña rutas optimizadas y
              utiliza equipos adecuados para minimizar costos y tiempos.
            </li>
            <li>
              Segregación y Reciclaje: Promueve la clasificación de residuos en
              orgánicos, reciclables y no reciclables, fomentando la economía
              circular.
            </li>
            <li>
              Disposición Final Controlada: Asegura la gestión adecuada de
              residuos no aprovechables en rellenos sanitarios autorizados,
              minimizando el impacto ambiental.
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
            src="/cursos_gpt/4gestion-municipal/2.webp"
            alt="Estudio de caracterización de residuos sólidos municipales"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Estudio de caracterización de residuos sólidos municipales
          </h1>
          <p className="text-gray-300 mb-6">
            El estudio de caracterización de residuos sólidos municipales
            consiste en identificar y clasificar los tipos y cantidades de
            desechos generados en una comunidad. Este análisis proporciona datos
            esenciales para diseñar sistemas eficientes de gestión y promover
            estrategias de reducción, reciclaje y disposición final.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Clasificación de Residuos: Diferencia entre residuos orgánicos,
              reciclables (plásticos, metales, papel) y no reciclables para su
              manejo adecuado.
            </li>
            <li>
              Cuantificación y Composición: Determina el peso, volumen y
              proporción de cada tipo de residuo generado, considerando
              variables como estacionalidad y demografía.
            </li>
            <li>
              Base para Planificación: Ofrece información clave para optimizar
              rutas de recolección, diseñar infraestructuras y fomentar
              programas de valorización.
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
            src="/cursos_gpt/4gestion-municipal/3.webp"
            alt="Gestión de área técnica municipal (ATM)"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Gestión de área técnica municipal (ATM){" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La gestión del Área Técnica Municipal (ATM) abarca la planificación,
            supervisión y ejecución de servicios técnicos municipales
            relacionados con infraestructura, manejo ambiental, ordenamiento
            territorial y servicios básicos. Su objetivo es garantizar la
            sostenibilidad, la eficiencia y la calidad en la prestación de
            servicios municipales.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Planificación y Supervisión: Diseña proyectos y políticas que
              optimicen servicios básicos como agua, alcantarillado, residuos
              sólidos y transporte.
            </li>
            <li>
              Gestión Ambiental: Implementa estrategias de manejo sostenible de
              recursos naturales y control de impactos ambientales a nivel
              local.
            </li>
            <li>
              Infraestructura y Ordenamiento: Coordina obras de infraestructura
              y regula el uso del suelo, promoviendo el desarrollo urbano
              ordenado.
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
            src="/cursos_gpt/4gestion-municipal/4.webp"
            alt="Saneamiento ambiental, JASS y Diseño de UBS"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Saneamiento ambiental, JASS y Diseño de UBS{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El saneamiento ambiental abarca las acciones dirigidas a mejorar las
            condiciones sanitarias de una comunidad, reduciendo riesgos para la
            salud y el medio ambiente. Las Juntas Administradoras de Servicios
            de Saneamiento (JASS) son organizaciones comunitarias que gestionan
            servicios básicos como agua potable y saneamiento en zonas rurales.
            El diseño de Unidades Básicas de Saneamiento (UBS) busca brindar
            instalaciones adecuadas de agua, saneamiento y baños para cubrir
            necesidades esenciales.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Saneamiento Ambiental: Integra la provisión de agua potable,
              gestión de residuos y control de aguas residuales para proteger la
              salud pública.
            </li>
            <li>
              Rol de las JASS: Fortalece la gestión comunitaria de servicios de
              agua y saneamiento, promoviendo sostenibilidad y participación
              local.
            </li>
            <li>
              Diseño de UBS: Planifica instalaciones sanitarias seguras,
              accesibles y sostenibles para mejorar la calidad de vida,
              especialmente en zonas rurales.
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
            src="/cursos_gpt/4gestion-municipal/6.webp"
            alt="Certificación ambiental para proyectos"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Certificación ambiental para proyectos
          </h1>
          <p className="text-gray-300 mb-6">
            La certificación ambiental es un proceso regulado por el cual se
            evalúa y valida que un proyecto cumple con las normativas y
            estándares ambientales aplicables. Este procedimiento garantiza que
            las actividades planificadas minimicen su impacto en el entorno,
            promoviendo la sostenibilidad y la responsabilidad ambiental.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Evaluación de Impacto Ambiental (EIA): Identifica, analiza y
              propone medidas de mitigación para los impactos ambientales del
              proyecto como requisito principal para la certificación.
            </li>
            <li>
              Cumplimiento Normativo: Asegura que el proyecto respete las leyes
              y regulaciones locales, nacionales e internacionales relacionadas
              con el medio ambiente.
            </li>
            <li>
              Seguimiento y Auditorías: Incluye la supervisión continua para
              verificar que el proyecto mantenga las condiciones estipuladas en
              la certificación ambiental.
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
            src="/cursos_gpt/4gestion-municipal/5.webp"
            alt="Tratamiento de aguas residuales"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Tratamiento de aguas residuales{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El tratamiento de aguas residuales es el proceso de eliminar
            contaminantes físicos, químicos y biológicos del agua utilizada en
            actividades domésticas, industriales o agrícolas, para hacerla
            segura para su reutilización o descarga al medio ambiente. Este
            proceso es esencial para proteger la salud pública y los
            ecosistemas.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>Etapas del Tratamiento:</li>
            <li>
              Tecnologías Utilizadas: Sistemas como lagunas de estabilización,
              lodos activados, filtros biológicos, y tecnologías avanzadas como
              membranas de ósmosis inversa.
            </li>
            <li>
              Reutilización y Descarga Segura: Permite el uso del agua tratada
              en riego, industria o recarga de acuíferos, garantizando la
              protección de los cuerpos receptores y la sostenibilidad hídrica.
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
            src="/cursos_gpt/4gestion-municipal/8.webp"
            alt="Fiscalización ambiental"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Fiscalización ambiental </h1>
          <p className="text-gray-300 mb-6">
            La fiscalización ambiental es el proceso de supervisar y controlar
            el cumplimiento de las leyes, normativas y políticas ambientales por
            parte de empresas, instituciones y actores sociales. Este proceso
            garantiza que las actividades humanas se realicen de manera
            sostenible y responsable con el medio ambiente, promoviendo la
            protección de los recursos naturales.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Supervisión del Cumplimiento: Monitorea que las actividades
              respeten los estándares y normativas ambientales establecidas.
            </li>
            <li>
              Sanciones y Correctivos: Impone medidas administrativas o legales
              ante incumplimientos, promoviendo la responsabilidad ambiental.
            </li>
            <li>
              Prevención y Transparencia: Fomenta buenas prácticas empresariales
              y proporciona información para garantizar procesos ambientalmente
              sostenibles.
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
            src="/cursos_gpt/4gestion-municipal/9.webp"
            alt="Diseño, construcción, operación y cierre de rellenos sanitarios"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Diseño, construcción, operación y cierre de rellenos sanitarios
          </h1>
          <p className="text-gray-300 mb-6">
            El diseño, construcción, operación y cierre de rellenos sanitarios
            abarca todas las fases para la disposición final de residuos sólidos
            de manera segura y controlada. Estas etapas son fundamentales para
            minimizar el impacto ambiental y garantizar la protección de la
            salud pública.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Diseño: Selección del sitio, impermeabilización y sistemas de
              drenaje.
            </li>
            <li>
              Construcción: Preparación del terreno y control de lixiviados.
            </li>
            <li>
              Operación: Compactación, monitoreo de lixiviados y control de
              vectores.
            </li>
            <li>
              Cierre: Cobertura final, revegetación y monitoreo post cierre.
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
            src="/cursos_gpt/4gestion-municipal/10.webp"
            alt="Ecoeficiencia municipal y regional"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Ecoeficiencia municipal y regional{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La ecoeficiencia municipal y regional se enfoca en optimizar el uso
            de recursos en las gestiones locales y regionales para reducir
            impactos ambientales, mejorar la calidad de vida y fomentar el
            desarrollo sostenible.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Uso Eficiente de Recursos: Promueve la reducción, reutilización y
              reciclaje en servicios municipales.
            </li>
            <li>
              Energías Limpias: Fomenta el uso de energías renovables y
              tecnologías sostenibles.
            </li>
            <li>
              Gestión Integral: Integra prácticas sostenibles en transporte,
              residuos y consumo energético.
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
            src="/cursos_gpt/4gestion-municipal/11.webp"
            alt="Gestión ambiental municipal, gobernanza ambiental y participación ciudadana"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Gestión ambiental municipal, gobernanza ambiental y participación
            ciudadana{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La gestión ambiental municipal, la gobernanza ambiental y la
            participación ciudadana son elementos clave para promover un
            desarrollo sostenible a nivel local. Este enfoque integra la
            administración pública, la regulación ambiental y la inclusión de la
            comunidad en la toma de decisiones.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Gestión Ambiental Municipal: Implica el diseño e implementación de
              políticas locales para proteger el medio ambiente, como planes de
              manejo de residuos, control de emisiones y conservación de
              recursos naturales.
            </li>
            <li>
              Gobernanza Ambiental: Establece un marco institucional que
              facilita la cooperación entre actores públicos, privados y
              comunitarios para el cumplimiento de objetivos ambientales.
            </li>
            <li>
              Participación Ciudadana: Fomenta el involucramiento de la
              comunidad en la planificación y supervisión de políticas
              ambientales, promoviendo transparencia y corresponsabilidad.
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
            src="/cursos_gpt/4gestion-municipal/12.webp"
            alt="Gestión del cambio climático"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Gestión del cambio climático{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La gestión del cambio climático se refiere al conjunto de
            estrategias, políticas y acciones destinadas a mitigar los efectos
            negativos del cambio climático y a adaptarse a sus impactos
            inevitables. Este enfoque busca reducir las emisiones de gases de
            efecto invernadero (GEI), proteger los ecosistemas y garantizar el
            bienestar humano en un contexto de sostenibilidad.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Mitigación de Emisiones: Implementa acciones para reducir GEI,
              como promover energías renovables, mejorar la eficiencia
              energética y fomentar prácticas sostenibles en la industria y el
              transporte.
            </li>
            <li>
              Adaptación al Cambio Climático: Desarrolla medidas para fortalecer
              la resiliencia de comunidades y ecosistemas frente a eventos
              climáticos extremos, como inundaciones, sequías o temperaturas
              extremas.
            </li>
            <li>
              Políticas y Gobernanza: Establece marcos normativos, acuerdos
              internacionales (como el Acuerdo de París) y mecanismos de
              financiamiento climático para promover la acción global y local
              contra el cambio climático.
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
