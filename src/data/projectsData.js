const projects = [
  {
    id: 4,
    title: "Portal GTR: Solución Integral de Operaciones",
    description: "Plataforma de gestión que automatizó reportes operativos, reduciendo un 30% el tiempo de análisis y mejorando la toma de decisiones estratégica.",
    modalContent: {
      title: "Detalles del Portal GTR: Solución Integral de Operaciones",
      text: [
        "➡️ **Concepto:** Este proyecto consistió en la unificación de múltiples herramientas de gestión interna en un portal centralizado. El objetivo fue construir una solución robusta que facilitara la gestión de tareas, campañas, incidencias y validación de horas operativas.",
        "🛠️ **Impacto de Negocio:** La implementación de esta herramienta automatizó procesos críticos de reporte, lo que resultó en una reducción del 30% en el tiempo dedicado al análisis manual y una mejora significativa en la agilidad de la toma de decisiones.",
        "🤓 **Gestión Técnica:** Se utilizó una arquitectura modular con FastAPI (Python) para el backend y React para el frontend. El enfoque se centró en la escalabilidad, la asincronía y la integración eficiente con APIs externas como GeoVictoria."
      ]
    },
    imageUrl: `${import.meta.env.BASE_URL}images/Portal_GTR.png`,
    videoUrl: "https://www.youtube.com/embed/uklBd_Zh-Wo?si=WpdOQjVpPaIJHn7c",
    repoUrl: "https://github.com/Charlydk/Portal_GTR_Publico.git",
    technologies: ["FastAPI", "Python", "React", "SQLAlchemy", "PostgreSQL", "Pydantic", "React-Bootstrap", "JWT", "Render"]
  },
  {
    id: 2,
    title: "Ahorcadito Multijugador: Gestión en Tiempo Real",
    description: "Proyecto gestionado con un roadmap ágil, enfocado en la resiliencia del sistema y documentación técnica detallada.",
    modalContent: {
      title: "Detalles de Ahorcadito Multijugador",
      text: [
        "➡️ **Concepto:** Una aplicación web full-stack diseñada para demostrar la capacidad de manejar comunicaciones bidireccionales en tiempo real y arquitecturas de servidor complejas.",
        "🛠️ **Gestión y Resiliencia:** El proyecto fue gestionado siguiendo un roadmap ágil, priorizando la entrega incremental y la resiliencia del sistema. Se implementó un manejo robusto de conexiones concurrentes y recuperación ante fallos.",
        "🤓 **Stack Técnico:** Construido con un backend en ASP.NET Core utilizando SignalR para WebSockets, y un frontend dinámico. El despliegue se realizó utilizando Docker para asegurar la consistencia en diferentes entornos."
      ]
    },
    imageUrl: `${import.meta.env.BASE_URL}images/hangman-game.png`,
    projectUrl: "https://charlydk.github.io/ahorcado-game/frontend/",
    repoUrl: "https://github.com/Charlydk/ahorcado-game.git",
    technologies: ["C#", "ASP.NET Core", "SignalR", "JavaScript", "Docker", "Google Cloud", "PostgreSQL"]
  }
];

export default projects;
