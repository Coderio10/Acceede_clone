import '../components.css'
import './about.css'
import { useState } from 'react'
import HeroImg from '../assets/Hero-Image.svg'


function Hero() {

  return (
    <section className="Hero-comp">
        <div className='col col-1'>
            <h1>Our Journey</h1>
            <p>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>
            <div className='stats'>
                <div>
                    <h5>200+</h5>
                    <p>Happy Customers</p>
                </div>
                <div>
                    <h5>10k+</h5>
                    <p>Properties For Clients</p>
                </div>
                <div>
                    <h5>16+</h5>
                    <p>Years of Experience</p>
                </div>
            </div>
        </div>
        <div className='col col-2'>
            <img src={HeroImg} alt='hero'/>
        </div>
    </section>
  )
}

export default Hero
