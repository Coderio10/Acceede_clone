import '../components.css'
import '../css/footer.css'
import logo from '../assets/logo.png'

function Hero() {

  return (
    <section className="footer">
        <div className="contact-sec">
            <div className='logo-sec'>
                <img src={logo} alt="Acceede" />
                <h4>Quality education may be expensive, Acceede makes it affordable.</h4>
            </div>
            <div>
                <ul>
                    <li>Parents</li>
                    <li>Schools</li>
                    <li>Vocational/Training Institutes</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Blog</li>
                    <li>FAQs</li>
                    <li>About</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>support@acceede.com</li>
                    <li>sales@acceede.com</li>
                    <li>+2349040379592</li>
                </ul>
            </div>
        </div>
        <div className="copywrite">
            <p>Acceede.com is a technology service developed and powered by Acceede Labs Limited (Acceede). Acceede is duly registered with the Nigerian Corporate Affairs Commission, with RC Number 1964739. All financial services are provided by our a CBN licensed Payment Services Provider in Nigeria. The Acceede trademarks and all the copyrights in Acceede are wholly owned by Acceede Labs Limited.</p>
            <p>©2023 Acceede, All rights reserved.</p>
        </div>
    </section>
  )
}

export default Hero
