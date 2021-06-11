import React from 'react'
import Particle from 'react-particle-animation'

import Pokemon from "../components/pokemon"
import '../styles/Home.css'

const darkModeParticles = {
  color: { r: 300, g: 0, b: 300, a: 255 },
  background: { r: 46, g: 52, b: 64, a: 255 }
}
 
const Home = ({ darkMode }) => {
 
  return (
    <div className='home-wrapper'>
      <Particle
        className='particles'
        numParticles={250}
        interactive={true}
        color={
          darkMode
            ? darkModeParticles.color
            : {
                r: 300,
                g: 100,
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
        <Pokemon></Pokemon>Hi, I'm Daniel Pepin
      </h1>
      <p>A software engineer from New York City</p>
    </div>
  )
}

export default Home
