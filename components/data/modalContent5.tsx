export const modalContent = [
  {
    id: 1,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/5riegoyferti/1.webp"
            alt="Nutrición vegetal y principios de fertirriego"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Nutrición vegetal y principios de fertirriego{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La nutrición vegetal y el fertirriego son prácticas esenciales para
            optimizar el crecimiento y desarrollo de las plantas mediante el
            suministro equilibrado de nutrientes. El fertirriego combina la
            fertilización con el riego, permitiendo una administración eficiente
            de nutrientes directamente en la zona radicular, maximizando el
            rendimiento y minimizando el impacto ambiental.
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
              Nutrición Vegetal: Proporciona macro y micronutrientes esenciales
              (N, P, K, Ca, Mg, Fe, etc.) necesarios para el desarrollo óptimo
              de las plantas.
            </li>
            <li>
              Eficiencia del Fertirriego: Integra el suministro de nutrientes
              con el riego, ajustando dosis y frecuencia según las necesidades
              específicas del cultivo y las condiciones del suelo.
            </li>
            <li>
              Impacto Sostenible: Reduce el desperdicio de agua y fertilizantes,
              minimizando la lixiviación y la contaminación ambiental,
              promoviendo la agricultura sostenible.
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
            src="/cursos_gpt/5riegoyferti/2.webp"
            alt="Riego tecnificado por aspersión"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Riego tecnificado por aspersión
          </h1>
          <p className="text-gray-300 mb-6">
            El riego tecnificado por aspersión es un sistema que aplica agua de
            manera controlada y uniforme en forma de lluvia artificial mediante
            aspersores. Este método es eficiente para cultivos agrícolas,
            jardines y áreas verdes, ya que optimiza el uso del agua y reduce el
            desperdicio.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Distribución Uniforme: Garantiza una aplicación homogénea de agua,
              adaptándose a diferentes tipos de cultivos y suelos.
            </li>
            <li>
              Eficiencia Hídrica: Minimiza el desperdicio de agua, permitiendo
              un mejor control sobre la cantidad aplicada y evitando el exceso
              de riego.
            </li>
            <li>
              Adaptabilidad: Es adecuado para terrenos irregulares y cultivos
              diversos, con posibilidad de automatización para mayor precisión.
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
            src="/cursos_gpt/5riegoyferti/3.webp"
            alt="Riego tecnificado por goteo"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
          Riego tecnificado por goteo          </h1>
          <p className="text-gray-300 mb-6">
          El riego tecnificado por goteo es un sistema que suministra agua directamente a la zona radicular de las plantas a través de emisores, gota a gota. Este método es altamente eficiente, ya que reduce el consumo de agua y permite la fertilización localizada, aumentando el rendimiento y promoviendo la sostenibilidad agrícola.


          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
            Ahorro de Agua: Reduce el desperdicio al aplicar agua de manera precisa en la base de las plantas, evitando evaporación y escorrentía.

            </li>
            <li>
            Suministro Localizado: Proporciona agua y nutrientes directamente a la zona radicular, mejorando la eficiencia y el crecimiento del cultivo.

            </li>
            <li>
            Control y Automatización: Permite programar la frecuencia y cantidad de riego, adaptándose a las necesidades específicas del suelo y los cultivos.

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
            src="/cursos_gpt/5riegoyferti/4.webp"
            alt="Fertirrigación"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
          Fertirrigación          </h1>
          <p className="text-gray-300 mb-6">
          La fertirrigación es una técnica agrícola que combina la fertilización con el riego, permitiendo aplicar nutrientes directamente al suelo o al sistema radicular a través del agua de riego. Este método optimiza el uso de fertilizantes, mejora el crecimiento de los cultivos y reduce el impacto ambiental.


          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
            Eficiencia de Nutrientes: Proporciona nutrientes de forma uniforme y controlada, ajustándose a las necesidades específicas de las plantas.

            </li>
            <li>
            Ahorro de Recursos: Reduce el consumo de fertilizantes y agua, minimizando pérdidas por lixiviación y mejorando la sostenibilidad.

            </li>
            <li>
            Flexibilidad y Automatización: Permite adaptar las dosis y los tiempos de aplicación según el tipo de cultivo, etapa de desarrollo y condiciones del suelo.

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
            src="/CURSOS/fertirriego.webp"
            alt="Fertirriego de cultivos y monitoreo"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Fertirriego de cultivos y monitoreo</h1>
          <p className="text-gray-300 mb-6">
          El fertirriego de cultivos combina la fertilización con el riego, suministrando agua y nutrientes de manera eficiente directamente a la zona radicular. El monitoreo en tiempo real de parámetros como humedad, salinidad y nutrientes asegura un manejo óptimo para maximizar el rendimiento de los cultivos y minimizar el impacto ambiental.


          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
            Suministro Eficiente de Recursos: Proporciona agua y nutrientes en las cantidades necesarias, reduciendo desperdicios y promoviendo un desarrollo uniforme de los cultivos.

            </li>
            <li>
            Monitoreo de Parámetros Clave: Utiliza sensores para medir humedad del suelo, concentración de nutrientes y salinidad, optimizando la gestión del fertirriego.

            </li>
            <li>
            Maximización del Rendimiento: Ajusta las dosis y frecuencia de riego y fertilización según las necesidades específicas del cultivo y las condiciones climáticas.

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
            src="/cursos_gpt/5riegoyferti/6.webp"
            alt="Producción de cultivos sin suelo"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
          Producción de cultivos sin suelo          </h1>
          <p className="text-gray-300 mb-6">
          La producción de cultivos sin suelo es una técnica agrícola que sustituye el suelo tradicional por soluciones nutritivas o sustratos inertes como arena, perlita o fibra de coco. Este método, conocido como hidroponía, aeroponía o cultivo en sustratos, permite un control preciso de los nutrientes y el agua, incrementando la productividad y reduciendo el impacto ambiental.


          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
            Eficiencia de Recursos: Optimiza el uso de agua y nutrientes, reduciendo desperdicios y eliminando la necesidad de suelo fértil.

            </li>
            <li>
            Mayor Productividad: Proporciona condiciones controladas que favorecen un crecimiento uniforme y constante de los cultivos.

            </li>
            <li>
            Adaptabilidad y Sostenibilidad: Permite cultivar en áreas con limitaciones de suelo, como zonas urbanas, y reduce el uso de pesticidas y herbicidas.

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
            src="/cursos_gpt/5riegoyferti/7.webp"
            alt="Mantenimiento del sistema de riego"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
          Mantenimiento del sistema de riego          </h1>
          <p className="text-gray-300 mb-6">
          El mantenimiento del sistema de riego es un conjunto de actividades preventivas y correctivas destinadas a garantizar el funcionamiento óptimo del sistema, evitando obstrucciones, fugas o fallos que puedan afectar la eficiencia en la distribución del agua y nutrientes.


          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
            Limpieza y Desobstrucción: Remueve sedimentos, minerales y restos orgánicos que puedan bloquear tuberías, emisores o aspersores.

            </li>
            <li>
            Revisión de Componentes: Inspecciona periódicamente válvulas, bombas, filtros y conexiones para detectar y reparar daños o desgastes.

            </li>
            <li>
            Calibración y Ajuste: Verifica y ajusta la presión, caudal y alcance del sistema para asegurar una distribución uniforme del agua.

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
            src="/cursos_gpt/5riegoyferti/8.webp"
            alt="Interpretación y análisis de suelos"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
          Interpretación y análisis de suelos          </h1>
          <p className="text-gray-300 mb-6">
          La interpretación y análisis de suelos consiste en evaluar sus propiedades físicas, químicas y biológicas para determinar su capacidad de soporte para cultivos, infraestructura o restauración ambiental. Este proceso proporciona información clave para tomar decisiones sobre fertilización, manejo del agua y conservación del suelo.


          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
            Propiedades Químicas: Analiza nutrientes esenciales (N, P, K), pH, materia orgánica y salinidad para determinar la fertilidad del suelo.

            </li>
            <li>
            Propiedades Físicas: Evalúa la textura, estructura y capacidad de retención de agua, esenciales para el manejo del riego y la prevención de erosión.

            </li>
            <li>
            Recomendaciones de Manejo: Proporciona información para ajustar fertilización, prácticas de cultivo y estrategias de conservación del suelo.

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
            src="/cursos_gpt/5riegoyferti/9.webp"
            alt="Calidad de agua para riego"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
          Calidad de agua para riego          </h1>
          <p className="text-gray-300 mb-6">
          La calidad del agua para riego es un factor clave que afecta la productividad agrícola y la salud del suelo. Este análisis evalúa parámetros químicos, físicos y biológicos del agua para garantizar que sea adecuada para el cultivo y que no cause salinización, toxicidad o compactación del suelo.


          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
            Análisis de Parámetros Químicos: Mide salinidad (conductividad eléctrica), sodio, cloruros y bicarbonatos, que afectan la fertilidad del suelo y el crecimiento de los cultivos.

            </li>
            <li>
            Evaluación de Contaminantes: Identifica metales pesados, microorganismos y residuos químicos que pueden dañar las plantas y el ecosistema.

            </li>
            <li>
            Ajustes y Tratamientos: Implementa soluciones como filtración, desalinización o ajustes de pH para mejorar la calidad del agua y optimizar su uso en riego.

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
