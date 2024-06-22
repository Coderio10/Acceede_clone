import '../components.css'
import '../css/hero.css'
import heroImg from '../assets/Hero-Image.svg'

function Hero() {

  return (
    <section className="Hero">
        <div className='text-section'>
            <h1>We make quality education affordable</h1>
            <p className='text'>We believe every child has the right to quality education. Acceede provides access to quick, easy and stress-free tuition funding for your child.</p>
            <div className='btn-sec'>
                <div>
                    <button className='btngo1'>Downlod the app</button>
                    <p>For Parents</p>
                </div>
                <div>
                    <button>Get started now</button>
                    <p>For School</p>
                </div>
            </div>
        </div>
        <div className='img-section'>
            <img src={heroImg} alt="Hero" />
        </div>
    </section>
  )
}

export default Hero
