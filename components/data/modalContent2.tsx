export const modalContent = [
  {
    id: 1,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/2gestionymanejo/1.webp"
            alt="Gestión y manejo de residuos sólidos en minería"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Gestión y manejo de residuos sólidos en minería
          </h1>
          <p className="text-gray-300 mb-6">
            La gestión y manejo de residuos sólidos en minería implica la
            planificación, manejo y disposición adecuada de los desechos
            generados en las actividades mineras. Su objetivo es minimizar los
            impactos ambientales y garantizar la sostenibilidad de las
            operaciones, cumpliendo con las normativas ambientales.
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
              Clasificación de Residuos: Identifica los residuos según su origen
              (mineral, industrial o doméstico) y peligrosidad para definir su
              tratamiento.
            </li>
            <li>
              Disposición y Almacenamiento Seguro: Incluye instalaciones como
              depósitos de relaves y sistemas para minimizar el riesgo de
              filtraciones o contaminación.
            </li>
            <li>
              Reciclaje y Reutilización: Promueve la recuperación de materiales
              útiles y la valorización de residuos para reducir el impacto
              ambiental.
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
            src="/cursos_gpt/2gestionymanejo/2.webp"
            alt="Gestión y manejo de residuos sólidos de construcción"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Gestión y manejo de residuos sólidos de construcción
          </h1>
          <p className="text-gray-300 mb-6">
            La gestión y manejo de residuos sólidos de construcción abarca el
            control, tratamiento y disposición adecuada de los desechos
            generados durante obras civiles y demoliciones. Su objetivo es
            minimizar los impactos ambientales, promover la reutilización de
            materiales y cumplir con las normativas ambientales.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Clasificación de Residuos: Diferencia entre residuos reutilizables
              (escombros, metales, madera) y desechos peligrosos para su
              adecuado manejo.
            </li>
            <li>
              Reciclaje y Reutilización: Fomenta la recuperación de materiales
              como concreto, ladrillos y metales para nuevos usos.
            </li>
            <li>
              Disposición Responsable: Garantiza el transporte y almacenamiento
              adecuado en sitios autorizados, minimizando la contaminación
              ambiental.
            </li>
          </ul>

          {/* Botón de Acción */}
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            onClick={() => {
              window.open(
                `https://wa.me/51984040264?text=${encodeURIComponent(
                  "Hola, estoy interesado en el curso y me gustaría recibir más información sobre el curso Gestión y manejo de residuos sólidos de construcción"
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
            src="/CURSOS/inersion-publica.webp"
            alt="Formulación de proyectos de inversión pública de residuos sólidos"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Formulación de proyectos de inversión pública de residuos sólidos{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La formulación de proyectos de inversión pública para la gestión de
            residuos sólidos tiene como objetivo diseñar iniciativas que
            promuevan el manejo adecuado de desechos, la protección del medio
            ambiente y el bienestar social. Estos proyectos son clave para
            garantizar sistemas sostenibles y eficientes en la recolección,
            tratamiento y disposición final de los residuos.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Diagnóstico Inicial: Analiza la situación actual de los residuos
              sólidos, identificando problemas y necesidades de la población.
            </li>
            <li>
              Diseño de Soluciones: Propone infraestructuras, sistemas de
              gestión y tecnologías para optimizar el manejo de residuos.
            </li>
            <li>
              Evaluación Económica y Social: Estima costos y beneficios,
              asegurando que el proyecto sea viable y genere impacto positivo en
              la comunidad.
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
            src="/cursos_gpt/2gestionymanejo/4.webp"
            alt="Gestión y manejo de residuos sólidos industriales"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Gestión y manejo de residuos sólidos industriales{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La gestión y manejo de residuos sólidos industriales comprende las
            acciones necesarias para recolectar, tratar, reciclar y disponer
            adecuadamente los desechos generados por procesos industriales. Su
            objetivo es minimizar impactos ambientales, garantizar la seguridad
            y cumplir con normativas aplicables.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Clasificación de Residuos: Identifica residuos peligrosos
              (químicos, metales pesados) y no peligrosos (plásticos, papel)
              para un manejo adecuado.
            </li>
            <li>
              Tratamiento y Reciclaje: Implementa procesos para reutilizar
              materiales y tratar residuos peligrosos, evitando contaminación.
            </li>
            <li>
              Disposición Final Segura: Asegura el uso de rellenos sanitarios,
              incineración controlada o tecnologías avanzadas para minimizar el
              impacto ambiental.
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
            src="/cursos_gpt/2gestionymanejo/5.webp"
            alt="Tratamiento y reaprovechamiento de residuos sólidos"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Tratamiento y reaprovechamiento de residuos sólidos
          </h1>
          <p className="text-gray-300 mb-6">
            El tratamiento y reaprovechamiento de residuos sólidos busca
            transformar los desechos en recursos útiles mediante procesos
            físicos, químicos y biológicos. Este enfoque promueve la economía
            circular, minimiza el impacto ambiental y fomenta la sostenibilidad.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Clasificación y Separación: Identifica residuos reciclables,
              orgánicos y no reciclables para su adecuado tratamiento.
            </li>
            <li>
              Tecnologías de Tratamiento: Aplica procesos como compostaje,
              reciclaje, incineración y biorremediación para reducir el volumen
              de desechos y generar valor.
            </li>
            <li>
              Reaprovechamiento de Recursos: Convierte residuos en nuevos
              productos o energía, como fertilizantes orgánicos, biogás o
              materiales reciclados.
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
            src="/cursos_gpt/2gestionymanejo/6.webp"
            alt="Gestión y manejo de residuos sólidos hospitalarios"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Gestión y manejo de residuos sólidos hospitalarios{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La gestión y manejo de residuos sólidos hospitalarios se enfoca en
            la recolección, tratamiento y disposición adecuada de los desechos
            generados en hospitales y centros de salud. Su objetivo es prevenir
            riesgos sanitarios, garantizar la seguridad pública y proteger el
            medio ambiente.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Clasificación de Residuos: Diferencia entre residuos comunes,
              peligrosos (biológicos, químicos) y especiales para aplicar el
              manejo correcto.
            </li>
            <li>
              Tratamiento Seguro: Incluye procesos como autoclave, incineración
              o tratamientos químicos para eliminar agentes infecciosos.
            </li>
            <li>
              Disposición Final Controlada: Garantiza que los desechos tratados
              sean transportados y almacenados en sitios autorizados,
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
    id: 7,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/2gestionymanejo/7.webp"
            alt="Diseño de Rellenos sanitarios"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Diseño de Rellenos sanitarios{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El diseño de rellenos sanitarios es el proceso de planificación y
            construcción de infraestructuras para la disposición final de
            residuos sólidos, asegurando la protección del medio ambiente y la
            salud pública. Este diseño incluye sistemas de impermeabilización,
            drenaje y control de emisiones para minimizar el impacto ambiental.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Selección del Sitio: Evalúa factores como ubicación, tipo de suelo
              y proximidad a poblaciones para garantizar sostenibilidad y
              seguridad.
            </li>
            <li>
              Infraestructura del Relleno: Incluye sistemas de
              impermeabilización, captación de lixiviados y control de gases
              para evitar contaminación.
            </li>
            <li>
              Operación y Mantenimiento: Define procesos para compactar
              residuos, cubrir capas periódicamente y monitorear el impacto
              ambiental a largo plazo.
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
            src="/cursos_gpt/2gestionymanejo/8.webp"
            alt="Residuos sólidos y economía circular"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Residuos sólidos y economía circular{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La relación entre residuos sólidos y economía circular se basa en
            transformar los desechos en recursos útiles mediante la
            reutilización, reciclaje y valorización. Este enfoque reduce la
            dependencia de materias primas vírgenes, disminuye los impactos
            ambientales y promueve un sistema de producción y consumo
            sostenible.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Reducción y Reutilización: Promueve el diseño de productos más
              duraderos y la reincorporación de materiales en nuevos procesos.
            </li>
            <li>
              Reciclaje y Valorización: Transforma residuos sólidos en recursos
              como materias primas secundarias o energía renovable.
            </li>
            <li>
              Modelo Cíclico Sostenible: Fomenta la economía circular,
              reemplazando el modelo lineal de "producir-usar-desechar" por uno
              regenerativo.
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
            src="/cursos_gpt/2gestionymanejo/9.webp"
            alt="Operatividad de las EO-RS"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Operatividad de las EO-RS{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La operatividad de las EO-RS se refiere al funcionamiento eficiente
            de las estaciones de transferencia y centros de acopio, donde los
            residuos sólidos son recolectados, segregados, compactados y
            preparados para su transporte o procesamiento final. Su objetivo es
            optimizar la logística y minimizar el impacto ambiental.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Infraestructura Adecuada: Diseña instalaciones para la
              segregación, compactación y almacenamiento temporal de residuos
              sólidos.
            </li>
            <li>
              Eficiencia en Transporte: Centraliza los residuos para reducir
              costos y facilitar su traslado a rellenos sanitarios, plantas de
              reciclaje o disposición final.
            </li>
            <li>
              Gestión Segura: Implementa protocolos para evitar fugas,
              contaminación y riesgos sanitarios durante las operaciones.
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
            src="/cursos_gpt/2gestionymanejo/10.webp"
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
            La gestión y manejo de residuos sólidos municipales abarca todas las
            actividades relacionadas con la recolección, transporte, tratamiento
            y disposición final de los desechos generados en áreas urbanas y
            rurales. Su objetivo es garantizar la sostenibilidad ambiental, la
            salud pública y la eficiencia operativa.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Recolección y Transporte: Organiza rutas eficientes y equipos
              adecuados para minimizar costos y tiempos de operación.
            </li>
            <li>
              Tratamiento y Valorización: Implementa técnicas como reciclaje,
              compostaje y generación de energía para reducir el volumen de
              residuos destinados a rellenos sanitarios.
            </li>
            <li>
              Disposición Final Segura: Asegura que los desechos no valorizables
              sean gestionados en rellenos sanitarios controlados, minimizando
              riesgos ambientales.
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
            src="/cursos_gpt/2gestionymanejo/11.webp"
            alt="Estudio de caracterización de residuos sólidos"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Estudio de caracterización de residuos sólidos
          </h1>
          <p className="text-gray-300 mb-6">
            El estudio de caracterización de residuos sólidos es un análisis
            técnico que identifica y clasifica los tipos y cantidades de
            desechos generados en una comunidad o actividad específica. Este
            estudio es esencial para diseñar sistemas eficientes de manejo de
            residuos y promover estrategias de reciclaje y valorización.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Identificación de Tipos de Residuos: Clasifica los desechos en
              categorías como orgánicos, reciclables, peligrosos y no
              reciclables.
            </li>
            <li>
              Cuantificación y Análisis: Determina la composición y volumen de
              los residuos generados para una gestión óptima.
            </li>
            <li>
              Base para Planificación: Proporciona datos clave para diseñar
              programas de recolección, tratamiento y disposición final.
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
    id: 12,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/2gestionymanejo/12.webp"
            alt="Valorización de residuos sólidos"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Valorización de residuos sólidos
          </h1>
          <p className="text-gray-300 mb-6">
            La valorización de residuos sólidos es el proceso de convertir los
            desechos en recursos útiles mediante técnicas como reciclaje,
            compostaje, y generación de energía. Este enfoque fomenta la
            economía circular y reduce la cantidad de residuos destinados a
            disposición final, contribuyendo a la sostenibilidad ambiental.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Reciclaje de Materiales: Transforma residuos como plásticos,
              metales y papel en materias primas para nuevos productos.
            </li>
            <li>
              Compostaje y Biorremediación: Aprovecha los residuos orgánicos
              para producir compost o biogás, generando valor económico y
              ambiental.
            </li>
            <li>
              Generación de Energía: Utiliza técnicas como incineración con
              recuperación energética o digestión anaeróbica para producir
              electricidad o calor.
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
