import { Link } from "react-router-dom";
import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";
import Pdf from '/src/assets/Daniel_Castillo_Resume.pdf'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  const nameArray = ['D', 'a', 'n', 'i', 'e', 'l']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>&apos;m</span>
            <br />
          <AnimatedLetters 
          letterClass={letterClass} 
          strArray={nameArray}
          idx={15}
          />
          <br/>
          <AnimatedLetters 
          letterClass={letterClass} 
          strArray={jobArray}
          idx={22}
          />
          </h1>
          <h2>Full Stack Web Developer</h2>
          <Link to={Pdf} target='_blank'className="flat-button">Resumé</Link>
      </div>
    </div>
  )
}

export default Home;
