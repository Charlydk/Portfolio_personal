const projects = [
  
  {
    id: 1,
    title: "Rescate Espacial (Vanilla JS Game)",
    description: "Un juego del ahorcado reinventado con una temática espacial. Creado con JavaScript puro, demuestra una sólida refactorización de código y diseño de UI.",
    
    modalContent: {
      title: "Detalles de 'Rescate Espacial'",
      text: [
          "➡️ **Concepto:** 'Rescate Espacial' es la modernización completa de uno de mis primeros proyectos (https://github.com/Charlydk/Juego_ahorcadito.git). El objetivo fue doble: preservar la lógica original del juego y reconstruir toda su base técnica aplicando las mejores prácticas del desarrollo web moderno.",
          "🛠️ **El Principal Desafío:** Refactorizar el código fue el reto central. Transformé una aplicación multi-página con variables globales a una **Single Page Application (SPA)** con un **objeto de estado centralizado** para gestionar la partida. Esto eliminó errores, mejoró la mantenibilidad y demostró un enfoque más profesional para la arquitectura de software.",
          "🤓 **Aprendizajes Clave:** Este proyecto fue un ejercicio práctico fundamental en **JavaScript puro (Vanilla JS)**, manipulación del DOM, gestión de estado sin frameworks y diseño responsivo con **CSS Flexbox**. Me permitió aplicar directamente conceptos modernos sobre una base que yo mismo había creado, evidenciando mi crecimiento como desarrollador."
      ]
    },
  
    imageUrl: `${import.meta.env.BASE_URL}images/rescate_espacial.png`, // <-- Recuerda añadir una imagen del nuevo juego
    projectUrl: "https://charlydk.github.io/Rescate_Espacial/",
    repoUrl: "https://github.com/Charlydk/Rescate_Espacial.git",
    technologies: ["JavaScript (Vanilla)", "CSS3", "HTML5", "Responsive Design", "Refactoring"]
  },
  {
    id: 2,
    title: "Juego del Ahorcado",
    description: "Una aplicación web completa con backend en C# y frontend en JavaScript. Incluye modos de un jugador, versus y un modo multijugador online en tiempo real con SignalR.",
    modalContent: {
    title: "Detalles del Juego del Ahorcado",
    text: [
      "➡️ **Concepto:** Este proyecto va más allá de un simple juego. El objetivo fue construir una aplicación web full-stack, robusta y escalable, con un backend en ASP.NET Core y un frontend interactivo en Vanilla JavaScript, poniendo especial énfasis en la funcionalidad multijugador en tiempo real.",
      "🛠️ **Desafíos Técnicos:** El principal reto fue la arquitectura del modo online. Implementé **SignalR** para la comunicación por WebSockets, lo que requirió un diseño cuidadoso para gestionar las conexiones, los grupos de jugadores y la sincronización de estados en tiempo real. Otro desafío interesante fue la creación de un servicio (`GameManager`) para manejar múltiples partidas concurrentes en la memoria del servidor y un servicio en segundo plano para la limpieza automática de recursos.",
      "🤓 **Aprendizajes Clave:** Este proyecto consolidó mis habilidades en todo el ciclo de desarrollo. Profundicé en la creación de APIs con **ASP.NET Core**, la gestión de bases de datos con **Entity Framework**, la implementación de servicios en tiempo real con **SignalR** y el desarrollo de un frontend complejo con **Vanilla JavaScript**. Además, preparé y desplegué la aplicación usando **Docker y Google Cloud Run**, adquiriendo experiencia práctica en el ciclo de vida completo de una aplicación en la nube."
      ]
    },
    imageUrl: `${import.meta.env.BASE_URL}images/hangman-game.png`,
    projectUrl: "https://charlydk.github.io/ahorcado-game/frontend/", // URL a un demo en vivo (si tienes)
    repoUrl: "https://github.com/Charlydk/ahorcado-game.git", // URL a tu repositorio de GitHub
    technologies: ["C#", "ASP.NET", "SignalR", "JavaScript", "Docker", "Google Cloud", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Mi Primer Portfolio Web",
    description: "El portfolio que estás viendo ahora mismo. Construido con React y React-Bootstrap, demostrando diseño responsivo, manejo de componentes y despliegue web básico.",
    modalContent: {
    title: "Detalles del Desarrollo del Portfolio",
    text: [
      "➡️ Este proyecto fue un desafío personal para aplicar y consolidar mis conocimientos en el ecosistema de React. La meta era construir un sitio de una sola página (SPA) que no solo fuera visualmente atractivo, sino también rápido, funcional y fácil de mantener.",
      "🛠️ Desafíos Técnicos: Uno de los principales retos fue asegurar una experiencia de usuario fluida, implementando animaciones que no comprometieran el rendimiento. La configuración del despliegue en GitHub Pages para un proyecto con Vite y React Router también requirió una configuración específica para manejar las rutas correctamente.",
      "🤓 Aprendizajes Clave: A través de este proyecto, profundicé en el manejo de estados de React con Hooks, la creación de componentes reutilizables y la integración de librerías de terceros como React-Bootstrap y AOS. Fue una excelente práctica para entender el ciclo de vida completo de una aplicación web moderna, desde el desarrollo hasta el despliegue."
      ]
    },
    imageUrl: `${import.meta.env.BASE_URL}images/portfolio-web.png`,
    projectUrl: "https://charlydk.github.io/Portfolio_personal/", // Tu URL de GitHub Pages cuando esté desplegado
    repoUrl: "https://github.com/Charlydk/Portfolio_personal.git",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"]
  },

  {
    id: 4,
    "title": "Portal de Gestión Call Center (En desarrollo)",
    "description": "Una aplicación web de gestión full-stack con backend en FastAPI (Python) y frontend en React. Unifica dos portales internos, integra una API externa y está desplegado en la nube.",
    "modalContent": {
    "title": "Detalles del Portal de Gestión Unificado (En desarrollo)",
    "text": [
      "➡️ **Concepto:** El proyecto consiste en la creación y unificación de dos aplicaciones de gestión interna en un solo portal. El objetivo fue construir una API RESTful robusta y asíncrona con FastAPI y un frontend dinámico de tipo SPA (Single Page Application) con React, centralizando la gestión de tareas, campañas, incidencias y la validación de horas extras.",
      "🛠️ **Desafíos Técnicos:** El principal reto fue la refactorización del backend desde un único archivo a una arquitectura modular escalable usando APIRouter. Durante el proceso, se solucionaron complejos errores de entorno y librerías (conflictos en `bcrypt`/`passlib`) y errores de asincronía (`MissingGreenlet` de SQLAlchemy), lo que requirió adoptar patrones de carga de datos y construcción manual de respuestas más robustos. Otro desafío clave fue la migración de la lógica de otro proyecto construido en Flask a FastAPI, adaptando el código para que fuera asíncrono y se comunicara con la API externa de GeoVictoria usando `httpx`.",
      "🤓 **Aprendizajes Clave:** Este proyecto consolidó mis habilidades en el desarrollo full-stack moderno. Profundicé en la creación de APIs asíncronas de alto rendimiento con **FastAPI**, validación de datos con **Pydantic** y el manejo de la base de datos con **SQLAlchemy asíncrono**. En el frontend, fortalecí mis conocimientos en **React**, implementando componentes, hooks (`useState`, `useEffect`, `useContext`), rutas protegidas y un manejo de estado global con la Context API. Además, adquirí experiencia crítica en la depuración de errores complejos de entorno, gestión de dependencias (`pip`, `venv`) y el despliegue de una aplicación completa en **Render**."
    ]
    },
    imageUrl: `${import.meta.env.BASE_URL}images/Portal_GTR.png`,
    //projectUrl: "#", // no contendra una demo por ahora
    videoUrl:"#", //"https://www.youtube.com/embed/UMTvmyg9cEQ", // reesmplaza a la demo
    repoUrl: "https://github.com/Charlydk/Portal_GTR_Publico.git",
    "technologies": ["FastAPI","Python","React","JavaScript","SQLAlchemy","PostgreSQL","Pydantic","React-Bootstrap","JWT","Render"
  ]
  },
  

  // Añadir más proyectos aquí siguiendo el mismo formato
  /*
  {
    id: 5,
    title: "Nombre de Otro Proyecto",
    description: "Breve descripción de otro proyecto. Destaca lo que hace y lo que aprendiste.",
    imageUrl: "/images/otro-proyecto.png",
    projectUrl: "https://ejemplo.com/demo-otro-proyecto",
    repoUrl: "https://github.com/Charlydk/otro-proyecto-repo",
    technologies: ["JavaScript", "HTML", "CSS"]
  },
  */
];

export default projects;