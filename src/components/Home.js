import React from 'react'
import Particle from 'react-particle-animation'

import '../styles/Home.css'

const darkModeParticles = {
  color: { r: 236, g: 236, b: 244, a: 255 },
  background: { r: 46, g: 52, b: 64, a: 255 }
}

const Home = ({ darkMode }) => {
  return (
    <div className='home-wrapper'>
      <Particle
        className='particles'
        numParticles={300}
        interactive={false}
        color={
          darkMode
            ? darkModeParticles.color
            : {
                r: 59,
                g: 66,
                b: 82,
                a: 255
              }
        }
        background={darkMode ? darkModeParticles.background : { r: 255, g: 255, b: 255, a: 255 }}
        lineWidth={1.2}
        particleRadius={1.2}
        particleSpeed={0.3}
      />
      <h1>
        <span id='hand'>👋</span> Hi, I'm Tony Lu
      </h1>
      <p>A software engineer from New York</p>
    </div>
  )
}

export default Home
