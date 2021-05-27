import React from 'react'
import Particle from 'react-particle-animation'

import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home-wrapper'>
      <Particle
        className='particles'
        numParticles={300}
        interactive={false}
        color={{
          r: 59,
          g: 66,
          b: 82,
          a: 178
        }}
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
