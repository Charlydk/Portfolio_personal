// src/components/ParticlesBackground.jsx

import React from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesLoaded = ( ) => {
    // Puedes dejarlo vacío o con un console.log para depurar si quieres
  };

  const particlesOptions = {
    background: {
      color: {
        // Opción 1: Color de fondo definido por las partículas (el color de HeroSection lo anula si es opaco)
        //value: "#0d47a1", // Un azul oscuro para el fondo de las partículas
        
        // Opción 2 (Más común si quieres que el fondo de HeroSection sea visible): Haz el fondo de partículas transparente
        value: "transparent", // <-- ¡Cambia a transparente!
      },
    },
    // Añade el z-index directamente a las opciones si quieres controlarlo desde aquí
    // Esto es muy útil para asegurar que las partículas estén en la capa correcta.
    // La documentación de tsParticles indica que se puede configurar aquí:
    // https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.html#fullScreen
    fullScreen: {
      enable: true,
      zIndex: -1 // <-- ¡ESTO ES CLAVE! Ponlo detrás del contenido (que tiene z-index 1)
                  // Pero recuerda que si el fondo de tu HeroSection es opaco,
                  // las partículas quedarán detrás de ese fondo.
    },
    
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        // Este color debe ser VISIBLE sobre el fondo de tu HeroSection
        value: "#ffffff", // Partículas blancas
      },
      links: {
        color: "#ffffff", // Color de las líneas
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};

export default ParticlesBackground;