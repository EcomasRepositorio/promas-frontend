export const modalContent = [
  {
    id: 1,
    title: "  Planificación y programación de obras",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/7asistente-obras/1.webp"
            alt="Planificación y programación de obras"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Planificación y programación de obras
          </h1>
          <p className="text-gray-300 mb-6">
            La planificación y programación de obras son etapas fundamentales en
            la gestión de proyectos de construcción. Estas actividades aseguran
            que los recursos, tiempos y actividades se organicen eficientemente
            para cumplir con los objetivos establecidos, reduciendo costos y
            riesgos.
          </p>

          
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Planificación Estratégica: Define los objetivos, alcance,
              presupuesto y cronograma del proyecto, estableciendo la secuencia
              de actividades y asignación de recursos.
            </li>
            <li>
              Programación Detallada: Utiliza herramientas como diagramas de
              Gantt o metodologías como CPM (Critical Path Method) para
              organizar las actividades y determinar su duración.
            </li>
            <li>
              Control y Seguimiento: Monitorea el progreso en tiempo real,
              ajustando el plan ante cambios o imprevistos para garantizar la
              finalización exitosa de la obra.
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
    title: "Control de obras",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/cursos_gpt/7asistente-obras/2.webp"
            alt="Control de obras"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Control de obras</h1>
          <p className="text-gray-300 mb-6">
            El control de obras es el proceso de supervisión y seguimiento
            continuo durante la ejecución de un proyecto de construcción, con el
            objetivo de garantizar que se cumplan los plazos, presupuestos y
            especificaciones de calidad establecidos en la planificación.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Seguimiento del Cronograma: Monitorea el progreso de las
              actividades para identificar retrasos y aplicar medidas
              correctivas oportunas.
            </li>
            <li>
              Control de Costos: Supervisa el gasto de recursos para mantener el
              proyecto dentro del presupuesto, analizando desviaciones y
              optimizando recursos.
            </li>
            <li>
              Garantía de Calidad: Verifica que los materiales, procesos y
              resultados cumplan con las normativas y estándares establecidos en
              los planos y especificaciones.
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
            src="/cursos_gpt/7asistente-obras/3.webp"
            alt="Metrados en edificaciones"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Metrados en edificaciones{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El metrado en edificaciones es el proceso de cuantificar las
            cantidades de materiales, mano de obra y recursos necesarios para
            ejecutar una obra de construcción. Este análisis es esencial para
            elaborar presupuestos precisos y planificar correctamente las
            actividades del proyecto.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Cálculo de Cantidades: Determina las dimensiones y volúmenes de
              elementos constructivos como cimientos, muros, techos y acabados,
              basándose en los planos y especificaciones técnicas.
            </li>
            <li>
              Herramientas y Métodos: Utiliza tablas, software especializado
              (como AutoCAD o Excel), y formatos estandarizados para organizar
              los datos y asegurar precisión.
            </li>
            <li>
              Base para Presupuestos: Proporciona información detallada para
              elaborar presupuestos ajustados y evitar sobrecostos o faltantes
              de materiales.
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
            src="/cursos_gpt/7asistente-obras/4.webp"
            alt="Cuaderno de obra físico y digital"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4 ">
            Cuaderno de obra físico y digital{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El cuaderno de obra es un documento oficial en el que se registra,
            de forma cronológica, toda la información relevante sobre la
            ejecución de un proyecto de construcción. Puede ser llevado de
            manera física (en papel) o digital, cada uno con ventajas
            específicas según el contexto del proyecto.
          </p>
          <h2 className="text-xl font-semibold mb-4">ventajas y desventajas</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <p className=""> Cuaderno de Obra Físico:</p>
            <li>
              Características: Registros manuales en papel, utilizados en
              proyectos pequeños o donde no se dispone de herramientas
              digitales.
            </li>
            <li>
              Ventajas: Fácil acceso inmediato en el lugar de la obra, sin
              depender de tecnología.
            </li>
            <li>
              Limitaciones: Riesgo de pérdida, falta de respaldo y menos
              eficiencia en búsqueda o análisis de datos.
            </li>
            <p className=" "> Cuaderno de Obra Digital:</p>

            <li>
              Características: Uso de software o aplicaciones como Buildertrend,
              Procore, o plataformas específicas de gestión de proyectos.
            </li>
            <li>
              Ventajas: Registro automatizado, respaldo en la nube, análisis de
              datos en tiempo real y facilidad para compartir información.
            </li>
            <li>
              Limitaciones: Requiere dispositivos y conexión a internet en
              algunos casos.
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
            src="/cursos_gpt/7asistente-obras/6.webp"
            alt="Valorización de obra"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Valorización de obra</h1>
          <p className="text-gray-300 mb-6">
            La valorización de obra es un proceso que mide y certifica el avance
            físico y financiero de un proyecto de construcción en períodos
            específicos. Este procedimiento permite asegurar que los pagos a
            contratistas se realicen de acuerdo con el progreso real de la obra,
            evitando sobrecostos y retrasos.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Cálculo del Avance Físico: Evalúa el porcentaje de ejecución de
              cada partida del presupuesto, verificando el cumplimiento de lo
              programado en el cronograma.
            </li>
            <li>
              Relación con el Presupuesto: Traduce el avance físico en términos
              económicos, certificando los montos a pagar según el progreso de
              las actividades.
            </li>
            <li>
              Documentación y Supervisión: Incluye informes respaldados con
              mediciones, fotos y firmas de las partes involucradas,
              garantizando transparencia y trazabilidad.
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
            alt="Liquidación de obras"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Liquidación de obras </h1>
          <p className="text-gray-300 mb-6">
            La liquidación de obras es el proceso administrativo y técnico que
            concluye un proyecto de construcción, donde se realiza el balance
            final de los costos y cantidades ejecutadas. Este proceso asegura
            que las partes involucradas (contratista y cliente) estén de acuerdo
            con los resultados económicos y físicos del proyecto.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Revisión de Avances Ejecutados: Verifica el cumplimiento de las
              partidas contratadas, comparando los metrados reales con los
              presupuestados.
            </li>
            <li>
              Cálculo Económico Final: Determina el costo total del proyecto,
              incluyendo ajustes por adicionales, deductivos y penalidades si
              las hubiera.
            </li>
            <li>
              Entrega de Documentación: Se elabora un informe final que incluye
              planos "as-built", valorizaciones finales, certificados de calidad
              y documentación técnica.
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
            alt="Formulación y planificación de proyectos con MS Project"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Formulación y planificación de proyectos con MS Project
          </h1>
          <p className="text-gray-300 mb-6">
            Microsoft Project (MS Project) es una herramienta poderosa para la
            planificación, programación y control de proyectos. Permite
            organizar tareas, asignar recursos y realizar seguimiento al
            progreso del proyecto, facilitando la toma de decisiones y el
            cumplimiento de objetivos.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Definición del Proyecto: Configura el proyecto estableciendo su
              duración, cronograma inicial y estructura de tareas (EDT).
            </li>
            <li>
              Asignación de Recursos y Costos: Relaciona los recursos (humanos,
              materiales y financieros) con las tareas específicas, optimizando
              su uso para evitar sobrecostos.
            </li>
            <li>
              Seguimiento y Control: Realiza un seguimiento continuo del
              progreso, identificando desviaciones en tiempo o costos y
              ajustando el plan según sea necesario.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mb-4">
            Funciones Clave de MS Project
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Diagrama de Gantt: Visualiza las tareas y su secuencia
              cronológica.
            </li>
            <li>
              Método del Camino Crítico (CPM): Identifica las tareas críticas
              que afectan la duración del proyecto.
            </li>
            <li>
              Informes Personalizados: Genera reportes visuales sobre el
              progreso, recursos y costos.
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
            src="/CURSOS/14.webp"
            alt="Análisis y diseño de instituciones educativas"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Análisis y diseño de instituciones educativas{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El análisis y diseño de instituciones educativas es un proceso
            técnico y creativo que implica evaluar las necesidades funcionales,
            pedagógicas y de infraestructura de un espacio educativo. Su
            objetivo es diseñar instalaciones que favorezcan el aprendizaje, la
            seguridad y el bienestar de los estudiantes y personal docente.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Análisis de Necesidades: Estudia la cantidad de usuarios, los
              programas educativos y las necesidades específicas de la
              comunidad, como aulas, laboratorios, áreas recreativas y
              accesibilidad.
            </li>
            <li>
              Análisis de Necesidades: Estudia la cantidad de usuarios, los
              programas educativos y las necesidades específicas de la
              comunidad, como aulas, laboratorios, áreas recreativas y
              accesibilidad.
            </li>
            <li>
              Análisis de Necesidades: Estudia la cantidad de usuarios, los
              programas educativos y las necesidades específicas de la
              comunidad, como aulas, laboratorios, áreas recreativas y
              accesibilidad.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mb-4">Fases del Proceso</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Diagnóstico Inicial: Evaluación de la infraestructura existente
              (si aplica) y requerimientos del proyecto.
            </li>
            <li>
              Diseño Arquitectónico: Planos de distribución, diseño estructural
              y análisis de flujos.
            </li>
            <li>
              Ejecución y Supervisión: Seguimiento del proceso constructivo para
              garantizar el cumplimiento de los estándares establecidos.
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
            src="/CURSOS/esquema.webp"
            alt="Seguridad, salud ocupacional y medio ambiente en obras públicas"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Seguridad, salud ocupacional y medio ambiente en obras públicas{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            La gestión de seguridad, salud ocupacional y medio ambiente (SSOMA)
            en obras públicas tiene como objetivo garantizar la protección de
            los trabajadores, minimizar riesgos y prevenir impactos ambientales
            negativos durante la ejecución del proyecto. Este enfoque es
            fundamental para cumplir con las normativas legales y promover
            prácticas sostenibles.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Seguridad en el Trabajo: Implementa planes de prevención de
              riesgos laborales, identificando peligros y aplicando medidas como
              señalización, uso de EPP (Equipos de Protección Personal) y
              capacitaciones.
            </li>
            <li>
              Salud Ocupacional: Monitorea las condiciones de trabajo para
              evitar enfermedades profesionales mediante evaluaciones
              periódicas, ergonomía y controles de exposición a agentes nocivos.
            </li>
            <li>
              Protección Ambiental: Establece medidas para prevenir
              contaminación, manejar residuos y mitigar impactos ambientales en
              las áreas cercanas a la obra.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mb-4">
            Elementos Clave de SSOMA
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Planes de Gestión: Diseñar e implementar un Plan de Seguridad y
              Salud Ocupacional y un Plan de Manejo Ambiental.
            </li>
            <li>
              Monitoreo y Control: Realizar inspecciones regulares, auditorías y
              evaluaciones de cumplimiento normativo.
            </li>
            <li>
              Capacitación Continua: Formar al personal en temas de seguridad,
              salud y medio ambiente para fomentar una cultura de prevención.
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
            src="/CURSOS/esquema.webp"
            alt="Expediente técnico en obras"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Expediente técnico en obras{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El expediente técnico es el conjunto de documentos que define y
            respalda todos los aspectos técnicos, administrativos, económicos y
            legales de una obra. Su objetivo es garantizar la correcta ejecución
            del proyecto, sirviendo como guía para los contratistas,
            supervisores y fiscalizadores.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Contenido del Expediente Técnico:
              <p>Estudio de Ingeniería</p>
              <p>Cronograma de Ejecución:</p>
              <p>Presupuesto y Metrados</p>
              <p>Estudio de Impacto Ambiental (EIA)</p>
            </li>
            <li>
              Importancia:
              <p>
                Garantiza la viabilidad técnica, económica y legal del proyecto.
              </p>
              <p>Sirve como referencia en caso de auditorías o inspecciones.</p>
            </li>
            <li>
              Aprobación y Uso:
              <p>
                Es revisado y aprobado por las autoridades pertinentes antes de
                iniciar la obra.
              </p>
              <p>
                Guía a los responsables en la ejecución para evitar desviaciones
                del plan.
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
            src="/CURSOS/esquema.webp"
            alt="Régimen laboral en construcción civil"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Régimen laboral en construcción civil{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            El régimen laboral en construcción civil regula las condiciones de
            trabajo, derechos y obligaciones de los empleados y empleadores en
            este sector. Este régimen considera las particularidades de las
            actividades de construcción, donde las tareas suelen ser temporales
            y sujetas a riesgos inherentes.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Derechos Laborales:
              <p>Estudio de Ingeniería</p>
              <p>Contratos Temporales</p>
              <p>Jornada Labora</p>
              <p>Beneficios Sociales</p>
            </li>
            <li>
              Seguridad y Salud Ocupacional: :
              <p>
                Obligatoriedad de implementar planes de seguridad y proporcionar
                equipos de protección personal (EPP).
              </p>
              <p>Capacitación para la prevención de riesgos laborales.</p>
            </li>
            <li>
              Remuneración y Bonificaciones:
              <p>
                Sueldo mínimo sectorial ajustado a las condiciones de la
                construcción civil.
              </p>
              <p>
                Bonificaciones por alta peligrosidad o trabajo en zonas
                especiales.
              </p>
            </li>
            <li>
              Normativa Aplicable:
              <p>
                Leyes locales específicas para el sector (en muchos países,
                códigos laborales específicos para la construcción).
              </p>
              <p>
                Fiscalización por entidades laborales para garantizar el
                cumplimiento de los derechos.
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
    id: 12,
    title: "",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/CURSOS/esquema.webp"
            alt="Costos y Presupuestos con S10"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido del Modal */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Costos y Presupuestos con S10{" "}
          </h1>
          <p className="text-gray-300 mb-6">
            S10 es un software especializado en la elaboración de costos y
            presupuestos para proyectos de construcción. Permite gestionar y
            calcular de manera eficiente los costos directos, indirectos y
            totales de una obra, optimizando los recursos y facilitando la
            planificación.
          </p>
          <h2 className="text-xl font-semibold mb-4">puntos importantes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>
              Elaboración de Presupuestos:
              <p>Estudio de Ingeniería</p>
              <p>
                Genera costos unitarios basados en análisis de precios por
                partida.
              </p>
              <p>Presupuesto y Metrados</p>
              <p>
                Calcula automáticamente los costos de materiales, mano de obra,
                equipos y herramientas.
              </p>
            </li>
            <li>
              Gestión de Recursos:
              <p>
                Integra datos sobre metrados, rendimientos y precios de insumos.
              </p>
              <p>
                Permite actualizar precios según el mercado, garantizando
                presupuestos ajustados a la realidad.
              </p>
            </li>
            <li>
              Reportes y Seguimiento:
              <p>
                Genera reportes detallados como valorizaciones, curvas S y
                cronogramas financieros.
              </p>
              <p>
                Facilita el control del proyecto mediante comparaciones entre lo
                presupuestado y lo ejecutado.
              </p>
            </li>
            <li>
              Ventajas del Software:
              <p>Automatización: Reduce errores manuales en cálculos.</p>
              <p>
                Escalabilidad: Útil para obras pequeñas y grandes proyectos de
                infraestructura.
              </p>
              <p>
                Compatibilidad: Se integra con otros programas como AutoCAD y
                Excel para un flujo de trabajo eficiente.
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
