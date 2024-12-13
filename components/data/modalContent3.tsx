export const modalContent = [
  {
    id: 1,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/3calidad-ambiental/1.webp"
            alt="Monitoreo y evaluación de la calidad de suelo"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Monitoreo y evaluación de la calidad de suelo{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El monitoreo y evaluación de la calidad del suelo son procesos que
            miden y analizan las propiedades físicas, químicas y biológicas del
            suelo para determinar su estado de salud y sostenibilidad. Estos
            procesos son esenciales para la gestión ambiental, la agricultura y
            la prevención de la degradación de tierras.
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
              Parámetros de Calidad: Evalúa indicadores clave como pH,
              nutrientes, materia orgánica, contaminantes y estructura del
              suelo.
            </li>
            <li>
              Técnicas de Monitoreo: Utiliza análisis de laboratorio, sensores y
              muestreo sistemático para obtener datos precisos sobre el estado
              del suelo.
            </li>
            <li>
              Gestión Sostenible: Proporciona información para tomar decisiones
              sobre uso del suelo, restauración de áreas degradadas y prácticas
              agrícolas responsables.
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
            src="/cursos_gpt/3calidad-ambiental/2.webp"
            alt="Monitoreo y evaluación de radiaciones no ionizantes"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Monitoreo y evaluación de radiaciones no ionizantes
          </h1>
          <p className="text-gray-300 mb-6">
            El monitoreo y evaluación de radiaciones no ionizantes (RNI)
            consiste en medir y analizar las emisiones de campos
            electromagnéticos generados por fuentes como antenas, dispositivos
            electrónicos y líneas eléctricas. Su objetivo es garantizar que
            estas emisiones se mantengan dentro de los límites establecidos para
            proteger la salud humana y el medio ambiente.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Fuentes de RNI: Evalúa emisores como antenas de
              telecomunicaciones, microondas, equipos de diagnóstico médico y
              dispositivos electrónicos.
            </li>
            <li>
              Técnicas de Monitoreo: Utiliza equipos especializados para medir
              la intensidad, frecuencia y alcance de las radiaciones.
            </li>
            <li>
              Cumplimiento Normativo: Asegura que las emisiones cumplan con
              estándares internacionales como los de la OMS o ICNIRP,
              minimizando riesgos para la salud.
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
            src="/cursos_gpt/3calidad-ambiental/3.webp"
            alt="Monitoreo de agentes ocupacionales"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Monitoreo de agentes ocupacionales{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El monitoreo de agentes ocupacionales implica identificar, medir y
            evaluar los factores físicos, químicos, biológicos y ergonómicos
            presentes en el lugar de trabajo que podrían afectar la salud de los
            trabajadores. Su propósito es implementar medidas preventivas para
            garantizar la seguridad y bienestar en el entorno laboral.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Identificación de Riesgos: Analiza agentes como ruido,
              vibraciones, radiaciones, sustancias químicas y microorganismos
              presentes en el ambiente laboral.
            </li>
            <li>
              Medición y Evaluación: Utiliza equipos especializados y estándares
              regulatorios para determinar niveles de exposición y posibles
              impactos.
            </li>
            <li>
              Gestión Preventiva: Diseña estrategias para mitigar riesgos
              ocupacionales, como el uso de equipos de protección personal (EPP)
              y controles en el lugar de trabajo.
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
            src="/cursos_gpt/3calidad-ambiental/4.webp"
            alt="Monitoreo biológico"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Monitoreo biológico </h1>
          <p className="text-gray-300 mb-6">
            El monitoreo biológico consiste en la evaluación de agentes
            químicos, biológicos o físicos en los trabajadores mediante el
            análisis de indicadores biológicos como sangre, orina, aire exhalado
            o tejidos. Este monitoreo ayuda a identificar niveles de exposición
            ocupacional y posibles efectos adversos en la salud.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Indicadores Biológicos: Mide niveles de contaminantes o sus
              metabolitos en el cuerpo, como plomo en sangre o mercurio en
              orina.
            </li>
            <li>
              Prevención de Riesgos: Detecta exposiciones antes de que causen
              daños irreversibles, permitiendo implementar medidas correctivas.
            </li>
            <li>
              Cumplimiento Normativo: Asegura que los niveles de exposición
              estén dentro de los límites permitidos establecidos por normativas
              como OSHA o NIOSH.
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
            src="/CURSOS/monitoreo.webp"
            alt="Monitoreo y evaluación de la calidad de agua"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Monitoreo y evaluación de la calidad de agua{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El monitoreo y evaluación de la calidad del agua son procesos que
            analizan parámetros físicos, químicos, biológicos y microbiológicos
            del agua para garantizar su aptitud para consumo humano, uso
            agrícola, industrial o recreativo. Este procedimiento es fundamental
            para la protección de la salud pública y la sostenibilidad de los
            recursos hídricos.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Análisis de Parámetros Clave: Evalúa parámetros como pH, turbidez,
              oxígeno disuelto, metales pesados y presencia de microorganismos.
            </li>
            <li>
              Técnicas de Monitoreo: Utiliza muestreo de campo, análisis de
              laboratorio y sensores en tiempo real para obtener datos precisos.
            </li>
            <li>
              Gestión y Conservación: Proporciona información para tomar
              decisiones sobre la gestión sostenible del agua y la mitigación de
              contaminantes.
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
            src="/cursos_gpt/3calidad-ambiental/4.webp"
            alt="Calibración de equipos de monitoreo ambiental"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Calibración de equipos de monitoreo ambiental
          </h1>
          <p className="text-gray-300 mb-6">
            La calibración de equipos de monitoreo ambiental es el proceso de
            ajustar y verificar los instrumentos utilizados para medir
            parámetros ambientales, como calidad del aire, agua, suelo, ruido y
            radiaciones. Este procedimiento asegura la precisión y confiabilidad
            de los datos obtenidos.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Garantía de Precisión: Ajusta los equipos para que sus lecturas
              sean exactas y consistentes, minimizando errores en los datos
              recolectados.
            </li>
            <li>
              Cumplimiento Normativo: Asegura que los equipos operen bajo
              estándares internacionales como ISO o EPA, esenciales para
              informes y auditorías.
            </li>
            <li>
              Mantenimiento Preventivo: Identifica posibles fallos en los
              equipos y prolonga su vida útil, garantizando un funcionamiento
              continuo y confiable.
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
            src="/cursos_gpt/3calidad-ambiental/6.webp"
            alt="Interpretación de informes de laboratorios"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Interpretación de informes de laboratorios{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La interpretación de informes de laboratorio implica analizar los
            resultados obtenidos en pruebas ambientales, biológicas o químicas
            para evaluar el estado de un recurso o factor evaluado. Este
            análisis es crucial para tomar decisiones informadas en la gestión
            ambiental, ocupacional o sanitaria.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Comprensión de Parámetros: Identifica y entiende los indicadores
              clave medidos, como concentraciones, niveles de pH, contaminantes
              o valores microbiológicos.
            </li>
            <li>
              Comparación con Normativas: Contrasta los resultados con
              estándares establecidos para determinar si están dentro de los
              límites aceptables.
            </li>
            <li>
              Toma de Decisiones: Utiliza los datos interpretados para diseñar
              planes de acción, implementar medidas correctivas o garantizar el
              cumplimiento legal.
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
            src="/cursos_gpt/3calidad-ambiental/7.webp"
            alt="Monitoreo y evaluación de la calidad de aire"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Monitoreo y evaluación de la calidad de aire{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El monitoreo y evaluación de la calidad del aire consiste en medir y
            analizar contaminantes atmosféricos como partículas suspendidas,
            gases y otros agentes que afectan la salud humana y ambiental. Este
            proceso es esencial para desarrollar estrategias de control y
            mitigación de la contaminación.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Medición de Contaminantes: Evalúa parámetros como PM10, PM2.5,
              dióxido de carbono (CO₂), óxidos de nitrógeno (NOₓ), ozono (O₃) y
              monóxido de carbono (CO).
            </li>
            <li>
              Técnicas de Monitoreo: Utiliza estaciones de monitoreo fijas,
              móviles y sensores en tiempo real para obtener datos
              representativos.
            </li>
            <li>
              Gestión de Calidad del Aire: Proporciona información para diseñar
              políticas públicas, alertas ambientales y planes de mejora del
              aire.
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
            src="/cursos_gpt/3calidad-ambiental/8.webp"
            alt="Monitoreo y evaluación de ruido ambiental"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Monitoreo y evaluación de ruido ambiental{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El monitoreo y evaluación de ruido ambiental se enfoca en medir los
            niveles de ruido generados por actividades humanas para evaluar su
            impacto en la salud y el bienestar de las comunidades. Este proceso
            ayuda a diseñar estrategias de mitigación y asegurar el cumplimiento
            de normativas ambientales.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Medición de Niveles de Ruido: Utiliza parámetros como decibeles
              (dB) y ponderaciones (A, C) para analizar la intensidad y el
              impacto del ruido.
            </li>
            <li>
              Técnicas de Monitoreo: Emplea sonómetros y estaciones de monitoreo
              para medir ruido en diferentes contextos (urbanos, industriales,
              naturales).
            </li>
            <li>
              Gestión y Mitigación: Proporciona datos para implementar barreras
              acústicas, restricciones horarias y planes de control de ruido.
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
