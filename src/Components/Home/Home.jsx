import React from 'react'
import Typewriter from 'typewriter-effect'
import './Home.css'
import { Link } from 'react-router-dom' //routing link import - for call to action

const Home = () => {
  return (
    <div className='hero'>
      <div className="hero-bg"></div>
        <h1>
            <Typewriter
                options={{
                strings: ["Introducing: Ela & Ela", "Creators", "Alchemists", "Visionaries", "We do it all..."],
                autoStart: true,  // auto start on
                loop: true,       // keep looping the typing effect
                delay: 120,       // typing speed
                deleteSpeed: 55   // speed delete
                }}
            />
        </h1>
        <div className="cta-link">
          <Link to="/discover-ela">Discover Our Essence</Link> 
        </div>
    </div>
  )
}

export default Home
