import React, { useState } from 'react'
import experiences from '../data/experiences.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import WorkItem from './WorkItem'
import '../styles/About.css'

const About = () => {
  const [highlightProfiles, setHighlightProfiles] = useState(false)

  return (
    <div className='about-wrapper'>
      <h1>About Me</h1>
      <div className='about-container'>
        <div className={`about-profiles ${highlightProfiles ? 'profile-pulse' : ''}`}>
          <a href='mailto:djpepin1299@gmail.com'>
            <FontAwesomeIcon icon={faEnvelope} size='2x' />
          </a>
          <a href='https://www.linkedin.com/in/danielp1299/' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
          </a>
          <a href='https://github.com/dogpatch626' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} size='2x' />
          </a>
        </div>
        <div className='about-desc'>
          <p>
            Hey I'm Daniel! I am a graduate of CUNY John Jay College of Criminal Justice with a 
            Bachelor's in Science for Computer science and security Information. I have a passion for
            all aspects of tech. From web development to Cyber security and even dabling in game development
            so long as there is something new to learn I will be there every step of the way with excitement. 
            I also love learning about life and the people around me. Big team player since a child, sports,
            video games, and exploring the world with the people I love are amongst the plethora of things I 
            love to partake in in life.  {' '}
            <span
              id='get-in-touch'
              onMouseOver={() => setHighlightProfiles(true)}
              onMouseOut={() => setHighlightProfiles(false)}>
              Feel free to get in touch with me.
            </span>
          </p>
        </div>
      </div>

      <div className='experience-container'>
        {/* EDUCATION SECTION */}
        <div className='education-section'>
          <h1 className='exp-header'>Education</h1>
          <div className='exp-item'>
            <div className='exp-timeframe'>August 2017 - May 2021</div>
            <div className='exp-title'>CUNY John Jay College</div>
            <div className='exp-notes'>
              Bachelor of Science - Computer Science and Security Information
              <br />
              
            </div>
          </div>
        </div>

        {/* WORK EXPERIENCE SECTION */}
        <div className='work-section'>
          <h1 className='exp-header'>Work</h1>

          {experiences.map((exp, idx) => (
            <WorkItem key={idx} exp={exp} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
