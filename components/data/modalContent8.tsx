export const modalContent = [
  {
    id: 1,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/8ing_vial/1.webp"
            alt="Geología Geotecnia en obras viales"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Geología Geotecnia en obras viales{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La geología y geotecnia en obras viales son disciplinas
            fundamentales para garantizar la estabilidad y funcionalidad de las
            infraestructuras de transporte. Este análisis permite identificar
            las características del terreno, prevenir riesgos y diseñar
            soluciones adecuadas para la construcción y mantenimiento de
            carreteras.
          </p>

          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Estudios Geológicos: Identifican riesgos del terreno
              (deslizamientos, fallas).
            </li>
            <li>
              Estudios Geotécnicos: Evalúan propiedades del suelo y diseñan
              soluciones como taludes y muros.
            </li>
            <li>
              Aplicaciones: Mejoran trazados, estabilizan suelos y optimizan
              materiales locales.
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
            src="/cursos_gpt/8ing_vial/2.webp"
            alt="Suelos y pavimentos"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Suelos y pavimentos</h1>
          <p className="text-gray-300 mb-6">
            Los suelos y pavimentos son componentes esenciales en la
            infraestructura vial. El análisis del suelo determina su capacidad
            para soportar cargas, mientras que el diseño del pavimento asegura
            durabilidad y funcionalidad de la vía.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Análisis del Suelo: Evalúa propiedades como capacidad portante,
              compactación y drenaje para garantizar una base estable.
            </li>
            <li>
              Diseño de Pavimentos: Selecciona materiales y espesores adecuados
              para soportar el tráfico esperado y las condiciones climáticas.
            </li>
            <li>
              Mantenimiento: Incluye técnicas de rehabilitación y refuerzo para
              extender la vida útil de las estructuras viales.
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
            src="/cursos_gpt/8ing_vial/3.webp"
            alt="Hidrología e hidráulica"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Hidrología e hidráulica </h1>
          <p className="text-gray-300 mb-6">
            La hidrología e hidráulica son disciplinas fundamentales en el
            diseño y gestión de obras relacionadas con el agua. La hidrología
            estudia el ciclo del agua y su comportamiento en la superficie
            terrestre, mientras que la hidráulica analiza el movimiento y
            control del agua en sistemas naturales y artificiales.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Hidrología: Analiza caudales, precipitaciones y escorrentías para
              prever comportamientos del agua en una región.
            </li>
            <li>
              Hidráulica: Diseña y optimiza sistemas como canales, presas y
              alcantarillas para gestionar el flujo del agua.
            </li>
            <li>
              Aplicaciones: Útil en obras viales, drenajes, control de
              inundaciones y abastecimiento de agua.
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
            src="/cursos_gpt/8ing_vial/4.webp"
            alt="Estructuras en carreteras - puentes"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Estructuras en carreteras - puentes{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            Los puentes son estructuras clave en carreteras, diseñados para
            superar obstáculos como ríos, valles o vías cruzadas, garantizando
            la continuidad y seguridad del tránsito. Su diseño, construcción y
            mantenimiento son esenciales para la funcionalidad y durabilidad de
            las redes viales.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Diseño Estructural: Incluye cálculos de cargas, materiales y
              geometría para soportar tráfico, clima y condiciones locales.
            </li>
            <li>
              Tipos de Puentes: Varían según su uso y construcción, como puentes
              de vigas, arco, atirantados o colgantes.
            </li>
            <li>
              Mantenimiento y Rehabilitación: Asegura la seguridad estructural a
              largo plazo mediante inspecciones regulares, refuerzos y
              reparaciones.
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
            src="/cursos_gpt/8ing_vial/5.webp"
            alt="Metrados, costos y presupuesto cronograma en obras viales"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Metrados, costos y presupuesto cronograma en obras viales{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La planificación de obras viales requiere un enfoque integral que
            combine el cálculo detallado de metrados, estimación precisa de
            costos, elaboración de presupuestos y la programación eficiente de
            actividades.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Metrados: Calcula las cantidades de materiales, mano de obra y
              equipos necesarios para cada partida del proyecto (pavimento,
              drenajes, señalización, etc.).
            </li>
            <li>
              Costos y Presupuestos: Determina costos unitarios y totales,
              considerando materiales, mano de obra, equipos y costos
              indirectos, reflejados en un presupuesto general.
            </li>
            <li>
              Cronograma de Actividades: Organiza las tareas en un plan de
              trabajo (usando herramientas como diagramas de Gantt o CPM),
              definiendo tiempos y secuencias óptimas para cumplir con los
              plazos.
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
            src="/cursos_gpt/8ing_vial/6.webp"
            alt="Arqueología en proyectos viales"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Arqueología en proyectos viales{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La arqueología en proyectos viales es un componente clave para
            preservar el patrimonio cultural durante la ejecución de obras de
            infraestructura. Implica identificar, evaluar y proteger sitios
            arqueológicos que puedan verse afectados por el desarrollo de
            carreteras y otras construcciones.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Estudios de Impacto Arqueológico (EIA): Identifican posibles
              restos arqueológicos en las áreas del proyecto y evalúan su
              importancia cultural.
            </li>
            <li>
              Plan de Mitigación: Incluye medidas como excavaciones de rescate,
              protección in situ o reubicación de elementos significativos.
            </li>
            <li>
              Supervisión Permanente: Asegura el monitoreo arqueológico durante
              la ejecución de la obra para evitar daños a hallazgos no
              previstos.
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
            src="/cursos_gpt/8ing_vial/7.webp"
            alt="Estudio medio ambiental-derecho de vía-interferencias"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Estudio medio ambiental-derecho de vía-interferencias{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            Estos componentes son esenciales en la planificación y ejecución de
            proyectos viales para garantizar la sostenibilidad ambiental, la
            adquisición legal del terreno y la gestión eficiente de servicios
            existentes en la ruta del proyecto.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Estudio Medioambiental:
              <p>Evalúa los impactos ambientales del proyecto.</p>
              <p>
                Diseña medidas de mitigación para proteger ecosistemas, recursos
                hídricos y comunidades afectadas.
              </p>
            </li>
            <li>
              Derecho de Vía:
              <p>
                Gestiona la adquisición de terrenos necesarios para la
                construcción.
              </p>
              <p>
                Garantiza la legalidad y evita conflictos sociales mediante
                acuerdos con propietarios o expropiaciones.
              </p>
            </li>
            <li>
              Gestión de Interferencias:
              <p>
                Identifica y reubica infraestructuras existentes (redes
                eléctricas, tuberías, telecomunicaciones).
              </p>
              <p>
                Minimiza interrupciones y costos asociados durante la
                construcción.
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
    id: 8,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/8ing_vial/8.webp"
            alt="Diseño, construcción y mantenimiento de túneles"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Diseño, construcción y mantenimiento de túneles{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El diseño, construcción y mantenimiento de túneles son procesos
            fundamentales en obras de infraestructura que buscan conectar
            regiones y facilitar el transporte bajo terrenos complejos. Estos
            proyectos requieren un enfoque técnico avanzado para garantizar
            estabilidad, funcionalidad y seguridad a largo plazo.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Diseño:
              <p>
                Analiza el terreno y geología para determinar el método
                constructivo (TBM, NATM, etc.).
              </p>
              <p>
                Incluye cálculos estructurales, ventilación, iluminación y
                sistemas de drenaje.
              </p>
            </li>
            <li>
              Construcción:
              <p>
                Utiliza técnicas específicas como perforación y voladura,
                excavación mecánica o tuneladoras.
              </p>
              <p>
                Asegura la estabilización del túnel mediante revestimientos y
                soportes temporales o permanentes.
              </p>
            </li>
            <li>
              Mantenimiento:
              <p>
                Inspecciona regularmente la estructura para prevenir
                deformaciones, filtraciones o fallas.
              </p>
              <p>
                Implementa reparaciones y actualizaciones en sistemas como
                ventilación y seguridad contra incendios.
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
            src="/cursos_gpt/8ing_vial/9.webp"
            alt="Integración de proyectos de infraestructura vial"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Integración de proyectos de infraestructura vial{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La integración de proyectos de infraestructura vial busca coordinar
            todos los elementos técnicos, sociales, ambientales y económicos
            involucrados, para garantizar la planificación, ejecución y
            operación eficiente de las obras viales, con un enfoque sostenible y
            funcional.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Coordinación Multidisciplinaria:
              <p>
                Integra estudios de ingeniería, geotecnia, hidráulica,
                arqueología y medio ambiente para un diseño completo y
                equilibrado.
              </p>
            </li>
            <li>
              Sostenibilidad y Adaptación:
              <p>
                Considera aspectos ambientales y sociales, implementando medidas
                de mitigación y garantizando beneficios a las comunidades.
              </p>
            </li>
            <li>
              Eficiencia en Ejecución:
              <p>
                Optimiza recursos mediante la sincronización de cronogramas,
                presupuestos y equipos, reduciendo retrasos e interferencias.
              </p>
            </li>
            <li>
              Uso de Tecnología:
              <p>
                Aplica herramientas como BIM (Building Information Modeling)
                para planificar y supervisar todas las fases del proyecto.
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
            src="/cursos_gpt/8ing_vial/10.webp"
            alt="Tráfico y carga"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
          Tráfico y carga          </h1>
          <p className="text-gray-300 mb-6">
          El estudio del tráfico y carga en infraestructura vial es esencial para diseñar carreteras, puentes y otras obras capaces de soportar el flujo vehicular y las cargas asociadas. Esto garantiza seguridad, durabilidad y eficiencia en las redes de transporte.


          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
            Análisis de Tráfico:
<p>Evalúa el volumen y tipo de vehículos que utilizarán la infraestructura (autos, camiones, transporte público).
</p>
<p>Define niveles de servicio y capacidad para optimizar el diseño.
</p>
            </li>
            <li>
            Cargas Vehiculares:
            <p>Calcula las cargas estáticas y dinámicas generadas por el tránsito, especialmente por vehículos pesados.
            </p>
            <p>Diseña pavimentos, puentes y estructuras resistentes al desgaste y deformaciones.
            </p>
            </li>
            <li>
            Impacto en la Infraestructura:
            <p>Relaciona el tráfico y carga con el mantenimiento requerido y la vida útil de la obra.
            </p>
            <p>Implementa estrategias para gestionar el tráfico durante la construcción y operación.
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
    id: 11,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/8ing_vial/11.webp"
            alt="Topografía, diseño geométrico, señalización y seguridad vial"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
          Topografía, diseño geométrico, señalización y seguridad vial        </h1>
          <p className="text-gray-300 mb-6">
          Estos elementos son pilares fundamentales en la planificación y construcción de infraestructuras viales. La correcta integración de estas disciplinas garantiza funcionalidad, eficiencia y seguridad en las carreteras.



          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
            Topografía:

<p>Mide y representa el terreno para diseñar trazados precisos, asegurando la viabilidad técnica y económica del proyecto.

</p>
<p>Aplica herramientas como GPS, estaciones totales y drones para mayor precisión.

</p>
            </li>
            <li>
            Diseño Geométrico:


            <p>Define la alineación horizontal y vertical, curvas, pendientes y secciones transversales, adaptando el proyecto al terreno y normas de seguridad vial.

            </p>
            <p>Garantiza comodidad y eficiencia para los usuarios.

            </p>
            </li>
            <li>
            Señalización:

<p>Diseña sistemas de señalización vertical, horizontal y luminosa para guiar a los conductores y mejorar la seguridad vial.

            </p>
            <p>Cumple con estándares internacionales para visibilidad y comprensión.


            </p>
            </li>
            <li>Seguridad Vial:

</li>
<p>Implementa barreras, señalización adecuada, iluminación y diseño de intersecciones para prevenir accidentes.
</p>
<p>Considera auditorías de seguridad vial durante el diseño y la operación de la vía.
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
];
