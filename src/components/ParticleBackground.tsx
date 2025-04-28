import React, { useCallback } from 'react';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

interface ParticleBackgroundProps {
  className?: string;
}

export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ className }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className={`fixed inset-0 z-0 ${className}`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: ["grab", "bubble"],
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.8,
                  color: "#8B9FFE",
                },
              },
              bubble: {
                distance: 200,
                size: 6,
                duration: 0.3,
                opacity: 1,
              },
            },
          },
          particles: {
            color: {
              value: ["#8B9DC0", "#A6B1E1", "#8B9FFE", "#B4A7E4"],
            },
            links: {
              color: "#A6B1E1",
              distance: 150,
              enable: true,
              opacity: 0.6,
              width: 1.5,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1.2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 70,
            },
            opacity: {
              value: 0.7,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 4 },
            },
          },
          detectRetina: true,
          fullScreen: {
            enable: false,
          },
          style: {
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: "-1",
          },
        }}
      />
    </div>
  );
};

export default ParticleBackground;