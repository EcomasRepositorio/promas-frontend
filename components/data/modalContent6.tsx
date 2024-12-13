export const modalContent = [
  {
    id: 1,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/6riego-tec/1.webp"
            alt="Sistemas de riego tecnificado por goteo"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Sistemas de riego tecnificado por goteo
          </h1>
          <p className="text-gray-300 mb-6">
            El riego tecnificado por goteo es un método avanzado de irrigación
            que suministra agua de forma lenta y directa a la zona radicular de
            las plantas, utilizando emisores estratégicamente colocados en una
            red de tuberías. Este sistema es altamente eficiente en el uso de
            agua y nutrientes, maximizando el rendimiento de los cultivos y
            minimizando el impacto ambiental.
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
              Componentes Principales: Incluye tuberías, emisores, filtros,
              válvulas y sistemas de control para garantizar la distribución
              uniforme de agua y nutrientes.
            </li>
            <li>
              Eficiencia Hídrica: Reduce pérdidas por evaporación y escorrentía,
              adaptándose a diferentes tipos de cultivos y suelos.
            </li>
            <li>
              Automatización y Precisión: Permite programar riegos y
              fertilizaciones, ajustando las cantidades a las necesidades
              específicas del cultivo y las condiciones climáticas.
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
            src="/cursos_gpt/6riego-tec/2.webp"
            alt="Fertiirrigación"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Fertiirrigación</h1>
          <p className="text-gray-300 mb-6">
            La fertirrigación es una técnica agrícola que combina el riego con
            la fertilización, permitiendo aplicar nutrientes directamente al
            sistema radicular a través del agua de riego. Este método optimiza
            el uso de fertilizantes, mejora la absorción de nutrientes y reduce
            el impacto ambiental.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Eficiencia de Nutrientes: Suministra nutrientes de manera uniforme
              y controlada, ajustándose a las necesidades específicas de cada
              cultivo.
            </li>
            <li>
              Ahorro de Recursos: Reduce el uso de fertilizantes y agua,
              minimizando pérdidas por lixiviación y maximizando su
              aprovechamiento.
            </li>
            <li>
              Automatización y Control: Facilita la programación de riego y
              fertilización, optimizando las dosis y frecuencias según las
              condiciones del cultivo y del suelo.
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
            src="/cursos_gpt/6riego-tec/3.webp"
            alt="Análisis de suelo, agua y foliar"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Análisis de suelo, agua y foliar{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El análisis de suelo, agua y foliar es una práctica integral para
            evaluar las condiciones del suelo, la calidad del agua y el estado
            nutricional de las plantas. Este enfoque ayuda a optimizar el manejo
            agrícola, garantizando un crecimiento saludable y eficiente de los
            cultivos.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Análisis de Suelo: Examina nutrientes esenciales (N, P, K),
              materia orgánica, pH y salinidad para evaluar la fertilidad y
              planificar la fertilización.
            </li>
            <li>
              Análisis de Agua: Evalúa parámetros como salinidad, sodio y
              contaminantes para garantizar su idoneidad para riego y evitar
              daños al suelo y los cultivos.
            </li>
            <li>
              Análisis Foliar: Determina la concentración de nutrientes en las
              hojas para diagnosticar deficiencias o excesos y ajustar el
              programa de fertilización.
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
            src="/cursos_gpt/6riego-tec/4.webp"
            alt="Importancia del suelo en la agricultura"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Importancia del suelo en la agricultura{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El suelo es un recurso fundamental en la agricultura, ya que
            proporciona el soporte físico, nutrientes y agua necesarios para el
            crecimiento de las plantas. Su conservación y manejo adecuado son
            esenciales para garantizar la productividad sostenible y la
            seguridad alimentaria.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Fuente de Nutrientes: Proporciona los macro y micronutrientes
              esenciales para el desarrollo saludable de los cultivos.
            </li>
            <li>
              Retención de Agua: Actúa como reservorio, almacenando agua y
              regulando su disponibilidad para las plantas.
            </li>
            <li>
              Base para la Sustentabilidad: Su manejo adecuado previene la
              erosión, salinización y pérdida de fertilidad, asegurando la
              productividad a largo plazo.
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
            src="/CURSOS/costos.webp"
            alt="Costos y Presupuestos con S10"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Costos y Presupuestos con S10
          </h1>
          <p className="text-gray-300 mb-6">
            S10 es un software especializado en la elaboración de costos y
            presupuestos para proyectos de construcción. Permite gestionar de
            manera eficiente los recursos, calcular costos directos e
            indirectos, y realizar un control detallado de los gastos,
            optimizando la planificación y ejecución de los proyectos.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Elaboración de Presupuestos: Facilita el cálculo de costos
              unitarios, análisis de precios y presupuestos detallados basados
              en metrados y especificaciones técnicas.
            </li>
            <li>
              Gestión de Recursos: Permite controlar materiales, mano de obra,
              equipos y herramientas, ajustando los costos según las necesidades
              del proyecto.
            </li>
            <li>
              Integración y Reportes: Genera reportes automatizados, facilita la
              integración con otras herramientas y mejora la toma de decisiones
              mediante análisis financieros precisos.
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
            src="/cursos_gpt/6riego-tec/5.webp"
            alt="Hidráulica de tuberías"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Hidráulica de tuberías </h1>
          <p className="text-gray-300 mb-6">
            La hidráulica de tuberías es el estudio del flujo de líquidos a
            través de conductos cerrados, como tuberías, y su comportamiento en
            función de factores como presión, velocidad, caudal y pérdidas de
            energía. Este conocimiento es esencial en el diseño, operación y
            mantenimiento de sistemas de distribución de agua y otros líquidos.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Cálculo del Flujo: Determina parámetros clave como velocidad,
              caudal y presión para garantizar un diseño eficiente y adecuado al
              propósito del sistema.
            </li>
            <li>
              Pérdidas de Energía: Analiza las pérdidas de carga por fricción,
              accesorios y cambios de dirección para optimizar el rendimiento
              del sistema.
            </li>
            <li>
              Diseño de Sistemas: Permite seleccionar materiales, diámetros y
              configuraciones de tuberías para satisfacer las necesidades
              hidráulicas específicas.
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
            src="/cursos_gpt/6riego-tec/6.webp"
            alt="Descarga de data y parámetros geomorfológicos de la cuenca"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Descarga de data y parámetros geomorfológicos de la cuenca{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La descarga de datos y la evaluación de parámetros geomorfológicos
            de una cuenca son fundamentales para analizar su comportamiento
            hidrológico y geomorfológico. Estos parámetros ayudan a planificar
            proyectos de gestión hídrica, prevenir riesgos y estudiar los
            procesos erosivos y sedimentarios.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Obtención de Datos: Descarga de información topográfica,
              hidrológica y climática mediante herramientas como Google Earth,
              SIG (Sistemas de Información Geográfica) o bases de datos
              oficiales.
            </li>
            <li>
              Parámetros Geomorfológicos: Incluye cálculo de área, perímetro,
              pendiente, índice de forma, densidad de drenaje y longitud de
              cauces para caracterizar la cuenca.
            </li>
            <li>
              Análisis y Aplicaciones: Los datos y parámetros se emplean en
              modelación hidrológica, diseño de infraestructura hidráulica y
              gestión de recursos hídricos.
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
            src="/cursos_gpt/6riego-tec/7.webp"
            alt="Calidad del agua para riego"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Calidad del agua para riego{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La calidad del agua para riego es crucial para garantizar el
            crecimiento saludable de los cultivos, la preservación del suelo y
            la sostenibilidad de los sistemas agrícolas. Este análisis evalúa
            parámetros químicos, físicos y biológicos para asegurar su idoneidad
            en función de las necesidades del cultivo y las condiciones del
            suelo.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Parámetros Clave: Evalúa salinidad (conductividad eléctrica),
              sodio (SAR), pH, dureza y presencia de contaminantes como metales
              pesados o microorganismos.
            </li>
            <li>
              Impactos en Suelo y Cultivos: El agua de baja calidad puede causar
              salinización, toxicidad para las plantas o compactación del suelo,
              afectando el rendimiento agrícola.
            </li>
            <li>
              Tratamientos y Ajustes: Implementa procesos como filtración,
              ajuste de pH o dilución con agua de mejor calidad para corregir
              deficiencias y garantizar un uso seguro.
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
            src="/cursos_gpt/6riego-tec/8.webp"
            alt="Oferta y demanda hídrica en cultivos"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Oferta y demanda hídrica en cultivos{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La oferta y demanda hídrica en cultivos analiza la disponibilidad de
            agua (oferta) frente a las necesidades específicas de los cultivos
            (demanda) para garantizar una gestión eficiente del recurso hídrico.
            Este equilibrio es esencial para optimizar el riego, evitar
            desperdicios y maximizar el rendimiento agrícola.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Cálculo de la Demanda Hídrica: Determina las necesidades de agua
              de los cultivos según el tipo, etapa de desarrollo, condiciones
              climáticas (evapotranspiración) y características del suelo.
            </li>
            <li>
              Evaluación de la Oferta Hídrica: Analiza la disponibilidad de
              fuentes de agua (superficiales o subterráneas) y su capacidad para
              satisfacer las demandas agrícolas de manera sostenible.
            </li>
            <li>
              Gestión y Planificación: Implementa estrategias como riego
              tecnificado, almacenamiento en reservorios y monitoreo del suelo
              para equilibrar la oferta y la demanda.
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
            src="/cursos_gpt/6riego-tec/9.webp"
            alt="Sistemas de riego tecnificado por aspersión"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Sistemas de riego tecnificado por aspersión{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El riego tecnificado por aspersión es un sistema avanzado que
            distribuye el agua de manera uniforme en forma de lluvia artificial,
            utilizando aspersores conectados a una red de tuberías. Este método
            es eficiente, adaptable a diferentes cultivos y terrenos, y permite
            un uso racional del agua.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Componentes del Sistema: Incluye bombas, tuberías principales y
              secundarias, aspersores, válvulas y sistemas de control que
              garantizan una distribución uniforme del agua.
            </li>
            <li>
              Eficiencia Hídrica: Optimiza el uso del agua, reduciendo pérdidas
              por evaporación y asegurando una cobertura completa de la
              superficie cultivada.
            </li>
            <li>
              Adaptabilidad y Automatización: Se adapta a terrenos irregulares y
              permite automatizar el control de presión, frecuencia y duración
              del riego.
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
