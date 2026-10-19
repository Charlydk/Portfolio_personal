const projects = [
  {
    id: 1,
    title: "Portal GTR — Gestión WFM en Producción",
    description: "Plataforma fullstack usada en producción real en Teleperformance. Unifica sistemas internos, automatiza reportes y reduce un 30% el tiempo de análisis.",
    modalContent: {
      title: "Portal GTR — Solución Integral de Operaciones",
      text: [
        "➡️ <strong>Concepto:</strong> Unificación de múltiples herramientas de gestión interna en un portal centralizado para equipos WFM de call center. Gestión de tareas, campañas, incidencias y validación de horas operativas.",
        "🛠️ <strong>Impacto real:</strong> Reducción del 30% en el tiempo de generación de reportes. Usado en producción diaria por el equipo GTR de Teleperformance Tucumán.",
        "🤓 <strong>Stack técnico:</strong> Backend con FastAPI (Python) + React en el frontend. Integración con APIs externas (GeoVictoria). Desplegado en Render con base de datos en Supabase."
      ]
    },
    imageUrl: `${import.meta.env.BASE_URL}images/portal_GTR_hhee_metricas.png`,
    gallery: [
      {
        src: `${import.meta.env.BASE_URL}images/portal_GTR_Dashboard.png`,
        caption: "Tablero de control del supervisor: incidencias activas, radar de cobertura, entregables y reportería del día."
      },
      {
        src: `${import.meta.env.BASE_URL}images/portal_GTR_Dash_analista.png`,
        caption: "Dashboard del analista: tareas del día, incidencias asignadas y campañas que necesitan apoyo."
      },
      {
        src: `${import.meta.env.BASE_URL}images/portal_GTR_Dash_supervisor_operaciones.png`,
        caption: "Panel de Operaciones: cronograma y vencimientos de carga de horas extras."
      },
      {
        src: `${import.meta.env.BASE_URL}images/portal_GTR_kanban.png`,
        caption: "Backoffice Kanban: seguimiento de entregables, reportes y desarrollos del equipo con vencimientos."
      },
      {
        src: `${import.meta.env.BASE_URL}images/portal_GTR_rutina.png`,
        caption: "Rutina GTR: checklist diario generado automáticamente por campaña, con progreso en vivo y chat de equipo."
      },
      {
        src: `${import.meta.env.BASE_URL}images/portal_GTR_bitacora.png`,
        caption: "Control de incidencias: filtros por fecha, campaña, estado y analista, con exportación a Excel."
      },
      {
        src: `${import.meta.env.BASE_URL}images/portal_GTR_catalogo_reporteria.png`,
        caption: "Catálogo de reportería: reportes programados con SLA y días de ejecución automática."
      },
      {
        src: `${import.meta.env.BASE_URL}images/portal_GTR_planificacion.png`,
        caption: "Planificación semanal de turnos, con verificación de ausentismo contra GeoVictoria."
      },
      {
        src: `${import.meta.env.BASE_URL}images/portal_GTR_dash_ausentismo.png`,
        caption: "Force Dashboard: estado de carga y ausentismo de todas las campañas en una sola vista."
      },
      {
        src: `${import.meta.env.BASE_URL}images/portal_GTR_ausentismo_campana.png`,
        caption: "Seguimiento intradía por franja horaria: planificados, logueados, ausentes y cumplimiento."
      },
      {
        src: `${import.meta.env.BASE_URL}images/portal_GTR_ausentismo_campana2.png`,
        caption: "Detalle de asistencia por agente: estado, horario planificado, adherencia y retiros anticipados."
      },
      {
        src: `${import.meta.env.BASE_URL}images/portal_GTR_hhee_metricas.png`,
        caption: "Métricas de horas extras: declaradas por Operaciones vs. aprobadas por RRHH, por campaña."
      }
    ],
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Supabase", "Render", "SQLAlchemy", "JWT"],
    badge: "En producción ✓"
  },
  {
    id: 2,
    title: "FX Estudio — Invitaciones Web",
    description: "Plataforma propia de invitaciones digitales para bodas, 15 años y eventos corporativos. El cliente personaliza su tarjeta con vista previa en vivo y gestiona invitados, confirmaciones y envíos por mail.",
    modalContent: {
      title: "FX Estudio — Plataforma de Invitaciones Digitales",
      text: [
        "➡️ <strong>Concepto:</strong> Producto propio de FX Estudio: catálogo de diseños con vista previa, editor paso a paso con preview en vivo y tarjetas publicadas con URL propia. Incluye eventos corporativos con logo de la empresa, confirmación de asistencia (RSVP) y lista de invitados con links personalizados.",
        "🛠️ <strong>Estado:</strong> En producción con clientes reales. Gestión de invitados con restricciones alimentarias, filtros y exportación a Excel, envío masivo de invitaciones por mail con Brevo y un panel de administración con filtros por estado, archivo y cuenta regresiva al evento.",
        "🤓 <strong>Stack técnico:</strong> React 19 + Vite con React Router y Framer Motion. Supabase (PostgreSQL + Storage) para tarjetas, invitados y panel admin. Netlify Edge Functions para la vista previa de cada tarjeta al compartirla por WhatsApp."
      ]
    },
    // TODO: reemplazar con screenshot real
    imageUrl: `${import.meta.env.BASE_URL}images/portal-tarjetas.png`,
    projectUrl: "https://fxestudio.com.ar/",
    repoUrl: "https://github.com/Charlydk/Portal_tarjetas_invitaciones",
    technologies: ["React", "Vite", "Supabase", "PostgreSQL", "Netlify", "Brevo", "Framer Motion"],
    badge: "En producción ✓"
  },
  {
    id: 3,
    title: "FX Estudio — Menú Digital QR",
    description: "Plataforma de menús digitales con QR para bares: cada local tiene su carta online con diseño propio y un panel para actualizar precios y productos desde el celular.",
    modalContent: {
      title: "FX Estudio — Menú Digital QR para Bares",
      text: [
        "➡️ <strong>Concepto:</strong> Producto multi-cliente de FX Estudio. Cada bar obtiene una carta pública con su propio enlace y código QR, a elegir entre tres plantillas de diseño. El dueño administra productos, categorías, fotos, apariencia y pedidos desde su panel, y el plan superior suma un carrito que envía el pedido por WhatsApp.",
        "🛠️ <strong>Estado:</strong> En producción, con bares de demostración públicos, paquetes de precios, plan de mantenimiento y herramientas internas para dar de alta y dar soporte a cada cliente.",
        "🤓 <strong>Stack técnico:</strong> Next.js (App Router) + Supabase (autenticación, PostgreSQL y Storage para las fotos). Desplegado en Netlify."
      ]
    },
    imageUrl: `${import.meta.env.BASE_URL}images/menu-digital.jpg`,
    projectUrl: "https://menu.fxestudio.com.ar/",
    technologies: ["Next.js", "React", "Supabase", "PostgreSQL", "Netlify"],
    badge: "En producción ✓"
  },
  {
    id: 4,
    title: "FX Estudio — Sitios Web para Pymes",
    description: "Línea de sitios web para comercios y pymes: tiendas online con panel de administración para clientes reales, además del sitio comercial de la propia línea.",
    modalContent: {
      title: "FX Estudio — Sitios Web para Pymes",
      text: [
        "➡️ <strong>Concepto:</strong> Segunda línea de negocio de FX Estudio: sitios web a precio accesible con acompañamiento después de la entrega. Incluye el sitio comercial con paquetes y precios, y tiendas online para clientes como <a href=\"https://cylindumentaria.vercel.app/\" target=\"_blank\" rel=\"noopener noreferrer\">C&amp;L Indumentaria</a> y <a href=\"https://www.ximenaaccesorios.com.ar/\" target=\"_blank\" rel=\"noopener noreferrer\">Ximena Accesorios</a>.",
        "🛠️ <strong>Estado:</strong> En producción con clientes reales. Cada tienda tiene catálogo con filtros, carrusel de banners, carrito y un panel para que el cliente gestione productos, categorías, banners y promociones por su cuenta.",
        "🤓 <strong>Stack técnico:</strong> Tiendas en Next.js + Supabase, con compresión de imágenes en el navegador y contacto por WhatsApp. Sitio comercial en Astro + TypeScript, desplegado en Netlify."
      ]
    },
    imageUrl: `${import.meta.env.BASE_URL}images/fxestudio-web.png`,
    gallery: [
      {
        src: `${import.meta.env.BASE_URL}images/cyl-indumentaria.png`,
        caption: "C&L Indumentaria: tienda online con carrusel de colecciones, promociones y carrito."
      },
      {
        src: `${import.meta.env.BASE_URL}images/ximena-accesorios.png`,
        caption: "Ximena Accesorios: catálogo con dominio propio, banners y colecciones destacadas."
      }
    ],
    projectUrl: "https://fxestudio.com.ar/web/",
    technologies: ["Next.js", "Astro", "TypeScript", "Supabase", "Netlify", "Vercel"],
    badge: "En producción ✓"
  },
  {
    id: 5,
    title: "FM País 101.1 — Sitio Web",
    description: "Nuevo sitio web para la radio FM País 101.1 (Aguilares, Tucumán), con reproductor de streaming en vivo, grilla de programación y panel para que la radio gestione su contenido.",
    modalContent: {
      title: "FM País 101.1 — Rediseño Web",
      text: [
        "➡️ <strong>Concepto:</strong> Sitio multipágina para la radio FM País 101.1, con reproductor de streaming en vivo persistente entre navegaciones, grilla de programación con horario en vivo calculado en tiempo real, carrusel de publicidades y enlace directo de WhatsApp.",
        "🛠️ <strong>Estado:</strong> Publicado en su dominio propio por FX Estudio. La radio administra programas, staff, imágenes y publicidades desde un panel con inicio de sesión.",
        "🤓 <strong>Stack técnico:</strong> Astro + TypeScript con ClientRouter para persistir el reproductor de audio entre páginas. Supabase para autenticación y contenido administrable, con renderizado en servidor en Netlify."
      ]
    },
    imageUrl: `${import.meta.env.BASE_URL}images/radiopais.png`,
    projectUrl: "https://radiopais.com.ar/",
    technologies: ["Astro", "TypeScript", "Supabase", "Vitest", "Netlify"],
    badge: "En producción ✓"
  },
  {
    id: 6,
    title: "Portal FM Okey",
    description: "Sitio institucional para La 101.9 Radio Okey con reproductor de streaming en vivo, programas, plataformas y contacto.",
    modalContent: {
      title: "Portal Web FM Okey",
      text: [
        "➡️ <strong>Concepto:</strong> Sitio web institucional para La 101.9 Radio Okey: sección en vivo con reproductor de streaming, programas, plataformas donde escuchar la radio y contacto.",
        "🛠️ <strong>Estado:</strong> Cliente real. Demo funcional publicada en Netlify.",
        "🤓 <strong>Stack técnico:</strong> Sitio estático con HTML, Tailwind CSS y JavaScript. El stream de audio (HTTP) se sirve mediante un proxy de Netlify para evitar el bloqueo por contenido mixto en HTTPS."
      ]
    },
    // TODO: reemplazar con screenshot real
    imageUrl: `${import.meta.env.BASE_URL}images/fm-okey.png`,
    projectUrl: "https://fmokey.netlify.app/",
    repoUrl: "https://github.com/Charlydk/fmokey",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript", "Netlify"],
    badge: "Demo disponible"
  },
  {
    id: 7,
    title: "Recreo Digital — Videojuegos para el Aula",
    description: "Catálogo filtrable de videojuegos educativos para docentes de secundaria, con fichas de cada juego y propuestas para integrarlos en una clase real.",
    modalContent: {
      title: "Recreo Digital — Catálogo de Videojuegos Educativos",
      text: [
        "➡️ <strong>Concepto:</strong> Plataforma para docentes de secundaria que quieren usar videojuegos en clase y no saben cuál elegir. Permite filtrar por materia y año, y cada juego tiene una ficha con capturas y una propuesta para usarlo en clase.",
        "🛠️ <strong>Estado:</strong> Publicado. Nació como trabajo de la Licenciatura en Tecnologías Educativas (UTN FRT) y se diseñó para seguir creciendo más allá de la materia, con una próxima etapa pensada como comunidad de docentes.",
        "🤓 <strong>Stack técnico:</strong> React + TypeScript con Vite. Desplegado en Vercel."
      ]
    },
    imageUrl: `${import.meta.env.BASE_URL}images/recreo-digital.jpg`,
    projectUrl: "https://recreo-digital.vercel.app/",
    technologies: ["React", "TypeScript", "Vite", "Vercel"],
    badge: "Demo disponible"
  },
  {
    id: 8,
    title: "Ayuda a Diego — Adivina la Palabra",
    description: "Plataforma educativa de adivinanza de palabras con salas de docente, modo clase en vivo y pistas generadas con IA. Proyecto final de la materia Tecnologías Educativas.",
    modalContent: {
      title: "Ayuda a Diego — Aprendiendo con IA",
      text: [
        "➡️ <strong>Concepto:</strong> Juego educativo de adivinanza de palabras para primaria y adultos mayores. El docente crea salas con su propio vocabulario y comparte un código de 6 caracteres para modo tarea o clase en vivo proyectada.",
        "🛠️ <strong>Desafío técnico:</strong> Comunicación en tiempo real vía SignalR con manejo de sesiones concurrentes por sala, y pistas/definiciones generadas dinámicamente con IA (Groq) que degradan sin romper el juego si la API no responde.",
        "🤓 <strong>Stack técnico:</strong> Backend en ASP.NET Core (C#) con SignalR. Frontend en React 19 + TypeScript con Framer Motion. Persistencia en Supabase (PostgreSQL) con autenticación JWT."
      ]
    },
    imageUrl: `${import.meta.env.BASE_URL}images/adivina-palabra.webp`,
    projectUrl: "https://ayuda-a-diego-frontend.onrender.com/",
    repoUrl: "https://github.com/Charlydk/Adivina_Palabra",
    technologies: ["C#", "ASP.NET Core", "SignalR", "React", "TypeScript", "Supabase", "Groq AI"],
    badge: "En producción ✓"
  },
  {
    id: 9,
    title: "Ahorcadito Multijugador",
    description: "Juego web multijugador en tiempo real con reconexión resiliente y arquitectura fullstack completa.",
    modalContent: {
      title: "Ahorcadito Multijugador — Tiempo Real",
      text: [
        "➡️ <strong>Concepto:</strong> Juego web multijugador en tiempo real. Múltiples jugadores conectados simultáneamente con manejo robusto de reconexiones y estado compartido.",
        "🛠️ <strong>Desafío técnico:</strong> Implementación de WebSockets con SignalR para comunicación bidireccional en tiempo real. Reconexión resiliente ante caída de conexión.",
        "🤓 <strong>Stack técnico:</strong> Backend en ASP.NET Core (C#) con SignalR. Frontend dinámico con JavaScript. PostgreSQL para persistencia. Docker para despliegue en Google Cloud."
      ]
    },
    imageUrl: `${import.meta.env.BASE_URL}images/hangman-game.png`,
    projectUrl: "https://charlydk.github.io/ahorcado-game/frontend/",
    repoUrl: "https://github.com/Charlydk/ahorcado-game",
    technologies: ["C#", "ASP.NET Core", "SignalR", "JavaScript", "Docker", "Google Cloud", "PostgreSQL"],
    badge: "Demo disponible"
  }
];

export default projects;
