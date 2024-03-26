import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Img from '../../assets/images/picture.jpeg'
import Project1 from '../../assets/images/project1.png'
import Project2 from '../../assets/images/project2.png'

import CardComponent from '../Card'

const About = () => {
const [letterClass, setLetterClass] = useState('text-animate')
useEffect(() => {
  setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 4000)
}, [])

    return(
        <div>
    <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e', '', '&', '', '', 'P', 'r', 'o','j','e','c','t','s']}
              idx={15}
            />
          </h1>
          <img src={Img} className='about-image'/>
          <p>
            I&apos;m a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I&apos;m quiet confident, naturally curious, and perpetually working on
            improving my programming skills one design problem at a time.
          </p>
          <p>
            Below are some projects I&apos;ve worked on:
          </p>
        <div className='card-deck'>
        <CardComponent 
        className='card'
        title='Meme Gen'
        imgSrc={Project1}
        imgAlt='First picture'
        link='https://github.com/DannyCastle1/MemeGenerator'/>
        <CardComponent
        className='card'
        title='Task Tracker'
        imgSrc={Project2}
        imgAlt='Second picture'
        link='https://github.com/DannyCastle1/ReactTracker'/>
        </div>
        </div>
        </div>


        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
            <i className='fa-brands fa-angular' style={{color: '#DD0031',}}/>
            </div>
            <div className='face2'>
            <i className='fa-brands fa-html5' style={{color: '#F06529',}}/>
            </div>
            <div className='face3'>
            <i className='fa-brands fa-css3' style={{color: '#28A4D9',}}/>
            </div>
            <div className='face4'>
            <i className='fa-brands fa-react' style={{color: '#5ED4F4',}}/>
            </div>
            <div className='face5'>
            <i className='fa-brands fa-js' style={{color: '#EFD81D',}}/>
            </div>
            <div className='face6'>
            <i className='fa-brands fa-git' style={{color: '#EC4D28',}}/>
            </div>
          </div>
        </div>
      </div>


    )
}

export default About
