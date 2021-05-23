import React from 'react'
import experiences from '../data/experiences.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../styles/About.css'

const About = () => {
  return (
    <div className='about-wrapper'>
      <h1>About Me</h1>
      <div className='about-container'>
        <div className='about-profiles'>
          <a href='mailto:tonylu23@gmail.com'>
            <FontAwesomeIcon icon={faEnvelope} size='2x' />
          </a>
          <a href='https://www.linkedin.com/in/ynoTL' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
          </a>
          <a href='https://github.com/ynoTL23' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} size='2x' />
          </a>
        </div>
        <div className='about-desc'>
          <p>
            I am a Computer Science student graduating from CUNY Herbert H. Lehman College with
            honors. I have experience in languages such as Java, Python and JavaScript as well as
            frameworks like React. I have previously participated in data science research at Lehman
            involving classification of animal and medical data. In my free time, I love to play
            games, listen to music and learn about new developing technologies & trends. I hope to
            contribute to meaningful projects that create convenience and simplification for daily
            lives. Feel free to get in touch with me.
          </p>
        </div>
      </div>

      <div className='experience-container'>
        {/* EDUCATION SECTION */}
        <div className='education-section'>
          <h1 className='exp-header'>Education</h1>
          <div class='exp-item'>
            <div class='exp-timeframe'>August 2017 - May 2021</div>
            <div class='exp-title'>CUNY Herbert H. Lehman College</div>
            <div className='exp-notes'>
              Bachelor of Science - Computer Science, <em>Magna Cum Laude</em>
              <br />
              Phi Beta Kappa
            </div>
          </div>
        </div>

        {/* WORK EXPERIENCE SECTION */}
        <div className='work-section'>
          <h1 className='exp-header'>Work</h1>

          {experiences.map(exp => {
            return (
              <div class='exp-item'>
                <div class='exp-timeframe'>{exp.workTimeframe}</div>
                <div class='exp-title'>
                  {exp.workRole}, <em>{exp.workCompany}</em>
                </div>
                <div className='exp-notes'>
                  {exp.workDescription}
                  {
                    <ul>
                      {exp.workBulletNotes.map(note => (
                        <li>{note}</li>
                      ))}
                    </ul>
                  }
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default About
