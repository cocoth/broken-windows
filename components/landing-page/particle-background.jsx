"use client"
import React from 'react';
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const BackgroundParticles = () => {
    const loadParticles = async(main)=>{
        await loadFull(main)
    }

  return (
    // <div>
        <Particles
        id='tsparticles'
        init={loadParticles}
        options={{
            fullScreen:{
                enable:true,
                zIndex: -1
            },
            background:{
                color:{
                    value: "#000000",
                }
            },
            fpsLimit: 60,
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
                        quantity: 5,
                    },
                    repulse: {
                        distance: 100,
                        duration: 1,
                    },
                },
            },
            particles: {
                color: {
                    value: "#009fff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1.5,
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
                        area: 700,
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

        }}
        />

    // </div>
  )
}

export default BackgroundParticles