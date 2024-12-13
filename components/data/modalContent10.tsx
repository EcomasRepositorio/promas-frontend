export const modalContent = [
  {
    id: 1,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/10planeacion_obras/1.webp"
            alt="Planeamiento Y Programación de Obras"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Planeamiento Y Programación de Obras{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El planeamiento y programación de obras son procesos esenciales para
            gestionar los recursos, actividades y plazos de un proyecto de
            construcción. Aseguran que las actividades se ejecuten de manera
            eficiente, cumpliendo con los objetivos de tiempo, costo y calidad.
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
              Planeamiento: Define objetivos, recursos y secuencia de
              actividades.
            </li>
            <li>
              Programación: Organiza tareas en un cronograma con tiempos
              definidos.
            </li>
            <li>
              Control: Monitorea avances y ajusta el plan ante cambios o
              retrasos.
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
            src="/cursos_gpt/10planeacion_obras/2.webp"
            alt="Informes de obra"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Informes de obra</h1>
          <p className="text-gray-300 mb-6">
            Los informes de obra son documentos clave para registrar y comunicar
            el progreso, problemas y logros durante la ejecución de un proyecto
            de construcción. Estos informes aseguran transparencia y facilitan
            la toma de decisiones.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Contenido: Incluyen avances físicos, gastos, uso de recursos,
              problemas encontrados y soluciones aplicadas.
            </li>
            <li>
              Frecuencia: Pueden ser diarios, semanales o mensuales según los
              requerimientos del proyecto.
            </li>
            <li>
              Soporte: Incorporan fotografías, métricas y firmas de responsables
              para respaldar la información.
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
            src="/cursos_gpt/10planeacion_obras/3.webp"
            alt="Control técnico y calidad en obras"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Control técnico y calidad en obras{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El control técnico y de calidad en obras garantiza que los proyectos
            de construcción se ejecuten según las especificaciones, normativas y
            estándares de calidad, minimizando errores y asegurando durabilidad
            y funcionalidad.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Control Técnico: Verifica el cumplimiento de planos,
              especificaciones técnicas y métodos constructivos durante cada
              etapa de la obra.
            </li>
            <li>
              Control de Calidad: Inspecciona materiales, procesos y resultados,
              asegurando que cumplan con estándares establecidos y normativas.
            </li>
            <li>
              Documentación y Seguimiento: Registra pruebas, inspecciones y
              resultados para garantizar trazabilidad y facilitar auditorías.
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
            src="/cursos_gpt/10planeacion_obras/4.webp"
            alt="Ampliaciones de plazo, adicionales de obra y penalidades en obra"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Ampliaciones de plazo, adicionales de obra y penalidades en obra{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            Estos aspectos son parte esencial de la gestión contractual en
            proyectos de construcción, asegurando que cualquier cambio en el
            alcance o el tiempo de ejecución sea debidamente justificado y
            documentado, mientras se sancionan incumplimientos.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Ampliaciones de Plazo: Justificadas por imprevistos; requieren
              aprobación formal.
            </li>
            <li>
              Adicionales de Obra: Cambios en el alcance con respaldo técnico y
              financiero.
            </li>
            <li>
              Penalidades: Aplicadas por retrasos o incumplimientos según el
              contrato.
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
            src="/cursos_gpt/10planeacion_obras/5.webp"
            alt="Recepción - liquidación de obras y medios de controversia"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Recepción - liquidación de obras y medios de controversia{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La recepción y liquidación de obras son etapas finales del proyecto,
            donde se verifica la conformidad del trabajo ejecutado y se realiza
            el balance económico. Los medios de controversia resuelven disputas
            surgidas durante el proceso.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Recepción de Obras:
              <p>
                Verifica que la obra cumpla con lo estipulado en planos y
                especificaciones.
              </p>
              <p>
                Incluye pruebas finales y acta de conformidad firmada por las
                partes.
              </p>
            </li>
            <li>
              Liquidación de Obras:
              <p>
                Cierra el contrato revisando costos ejecutados, adicionales,
                deductivos y saldos finales.
              </p>
              <p>Genera un informe técnico-financiero detallado.</p>
            </li>
            <li>
              Medios de Controversia:
              <p>
                Resolución de conflictos por incumplimientos o discrepancias a
                través de arbitrajes, mediaciones o tribunales especializados.
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
            src="/cursos_gpt/10planeacion_obras/6.webp"
            alt="Expediente técnico como herramienta para la ejecución y supervisión de obra"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Expediente técnico como herramienta para la ejecución y supervisión
            de obra{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El expediente técnico es un documento clave que integra toda la
            información técnica, administrativa y económica necesaria para
            planificar, ejecutar y supervisar una obra de manera eficiente,
            asegurando el cumplimiento de los objetivos y normativas.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Guía para la Ejecución:
              <p>
                Incluye planos, especificaciones técnicas y metrados que
                orientan la construcción paso a paso.
              </p>
            </li>
            <li>
              Base para Supervisión:
              <p>
                Permite verificar que los trabajos se realicen conforme a los
                diseños y presupuestos establecidos.
              </p>
            </li>
            <li>
              Gestión de Cambios:
              <p>
                Facilita la identificación y documentación de modificaciones,
                adicionales o ampliaciones de plazo.
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
            src="/cursos_gpt/10planeacion_obras/7.webp"
            alt="Valorización y liquidación de obras por administración directa"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Valorización y liquidación de obras por administración directa{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            En obras ejecutadas por administración directa, la entidad
            contratante utiliza sus propios recursos para llevar a cabo el
            proyecto. La valorización y liquidación aseguran un control efectivo
            de los avances físicos y financieros, así como el cierre económico y
            técnico del proyecto.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Valorización: Calcula avances físicos y costos periódicos del
              proyecto.
            </li>
            <li>
              Liquidación: Revisa y cierra los costos totales con adicionales y
              deductivos.
            </li>
            <li>Documentación: Respalda gastos y asegura transparencia.</li>
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
            src="/cursos_gpt/10planeacion_obras/8.webp"
            alt="Plan de gestión de seguridad y salud en obra"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Plan de gestión de seguridad y salud en obra{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El plan de gestión de seguridad y salud en obra establece las
            medidas necesarias para prevenir riesgos laborales, proteger a los
            trabajadores y garantizar el cumplimiento de normativas de seguridad
            durante la ejecución del proyecto.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Identificación de Riesgos: Analiza peligros asociados a las
              actividades de la obra (caídas, maquinaria, electricidad).
            </li>
            <li>
              Medidas Preventivas: Implementa protocolos, señalización, equipos
              de protección personal (EPP) y capacitaciones.
            </li>
            <li>
              Supervisión y Control: Realiza inspecciones regulares y corrige
              incumplimientos para asegurar un entorno seguro.
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
            src="/cursos_gpt/10planeacion_obras/9.webp"
            alt="Contratación y ejecución de obras"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Contratación y ejecución de obras{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La contratación y ejecución de obras son procesos clave que
            garantizan el cumplimiento de objetivos técnicos, económicos y
            legales en proyectos de construcción. Abarcan desde la selección del
            contratista hasta la ejecución y supervisión del proyecto.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Contratación:
              <p>
                Proceso de licitación o adjudicación directa para seleccionar al
                contratista idóneo.
              </p>
              <p>
                Incluye elaboración de bases, evaluación de propuestas y firma
                del contrato.
              </p>
            </li>
            <li>
              Ejecución de Obras:
              <p>
                Desarrollo del proyecto conforme al expediente técnico y el
                contrato.
              </p>
              <p>
                Requiere planificación, supervisión constante y control de
                calidad.
              </p>
            </li>
            <li>
              Supervisión y Control:
              <p>
                Gestiona modificaciones, ampliaciones de plazo y adicionales de
                obra.
              </p>
              <p>Verifica avances, costos y cumplimiento de normativas.</p>
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
            src="/cursos_gpt/10planeacion_obras/10.webp"
            alt="Preliminares para inicio de obra"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Preliminares para inicio de obra{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            proporciona los conocimientos esenciales para la planificación
            inicial de un proyecto de construcción. Se enfoca en las actividades
            previas al inicio de la obra, asegurando que los recursos, permisos
            y procesos estén listos para comenzar la construcción de manera
            eficiente y segura.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>Revisión de permisos y documentación legal necesarios.</li>
            <li>
              Organización y planificación de recursos materiales y humanos.
            </li>
            <li>Establecimiento de cronograma de trabajo y plazos.</li>
            <li>Seguridad en el trabajo y medidas preventivas.</li>
            <li>Coordinación de las actividades iniciales de obra.</li>
            <li>
              Identificación de riesgos y establecimiento de protocolos
              deemergencia.
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
            src="/cursos_gpt/10planeacion_obras/11.webp"
            alt="Expediente técnico como herramienta para la ejecución y supervisión de obra"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Expediente técnico como herramienta para la ejecución y supervisión
            de obra{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            está diseñado para capacitar a los profesionales de la construcción
            en el uso del expediente técnico, un conjunto de documentos clave
            que permiten planificar, ejecutar y supervisar eficientemente un
            proyecto de obra, garantizando que se cumplan los estándares de
            calidad, seguridad y plazos
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>Definición y componentes del expediente técnico.</li>
            <li>Importancia de la planificación en la ejecución de la obra.</li>
            <li>Gestión de documentos técnicos y permisos legales.</li>
            <li>Control y seguimiento de avances en la obra.</li>
            <li>
              Supervisión y verificación de calidad y cumplimiento de
              normativas.
            </li>
            <li>
              Estrategias para la gestión de riesgos durante la ejecución de la
              obra.
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
