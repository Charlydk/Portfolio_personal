const projects = [
  {
    id: 1, // Un ID único para cada proyecto
    title: "Juego del Ahorcado",
    description: "Mi proyecto estrella de C#, un juego interactivo del ahorcado que demuestra habilidades en lógica, manejo de cadenas y gestión de entradas de usuario. Incluye modos de un jugador y multijugador.",
    imageUrl: `${import.meta.env.BASE_URL}images/hangman-game.png`,
    projectUrl: "https://charlydk.github.io/ahorcado-game/frontend/", // URL a un demo en vivo (si tienes)
    repoUrl: "https://github.com/Charlydk/ahorcado-game.git", // URL a tu repositorio de GitHub
    technologies: ["C#", "Consola"] // Tecnologías usadas, opcional para mostrar en la tarjeta
  },
  {
    id: 2,
    title: "Rescata a la Princesa (CLI)",
    description: "Un juego de aventura basado en texto desarrollado en c#. Los jugadores toman decisiones para superar desafíos y rescatar a la princesa de un dragón, mostrando habilidades en ramificación de lógica y manejo de estados.",
    imageUrl: `${import.meta.env.BASE_URL}images/princess-rescue.png`,
    projectUrl: "https://charlydk.github.io/princes rescue/",
    repoUrl: "https://github.com/Charlydk/princess-rescue-repo",
    technologies: ["C#", "CLI"]
  },
  {
    id: 3,
    title: "Mi Primer Portfolio Web",
    description: "El portfolio que estás viendo ahora mismo. Construido con React y React-Bootstrap, demostrando diseño responsivo, manejo de componentes y despliegue web básico.",
    imageUrl: `${import.meta.env.BASE_URL}images/portfolio-web.png`,
    projectUrl: "https://charlydk.github.io/Portfolio_personal/", // Tu URL de GitHub Pages cuando esté desplegado
    repoUrl: "https://github.com/Charlydk/Portfolio_personal.git",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"]
  },
  // Añadir más proyectos aquí siguiendo el mismo formato
  /*
  {
    id: 4,
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