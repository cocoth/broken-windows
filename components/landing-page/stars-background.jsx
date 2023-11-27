"use client";
import React from 'react';
import Particles from 'react-particles';
import { Engine } from 'tsparticles-engine';
import { loadStarsPreset } from "tsparticles-preset-stars";


const StarsBackground = () => {
    async function customInit(Engine){
        await loadStarsPreset(Engine)
    }
    const options={
        fullScreen:{
            enable: true,
            zIndex: -1
        },
        fpsLimit: 60,
        particles:{
            color: { value: "#009fff"},
            move:{
                random: true,
            },

        },
        preset: "stars",
        
    }
    return (
        <div>
            <Particles
            options={options} init={customInit}
            />
            
        </div>
    )
}

export default StarsBackground