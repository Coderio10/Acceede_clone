import '../components.css'
import '../css/navbar.css'
import { useState } from 'react'
import logo from '../assets/logo.png'
import burger from '../assets/icon-hamburger.svg'
import closeIcon from '../assets/download.svg'


function NavBar() {

  const [isOpen, makeOpen] = useState(false)

  function toggle() {
      makeOpen(!isOpen)
  }

  return (
    <nav className='Navbar'>
        <div className="nav-header">
            <img src={logo} alt='Acceede' />
            <button className='nav-toggle' onClick={toggle}>
                { isOpen ?  <img className="closeIcon" src={closeIcon} alt="close icon" /> : <img src={burger} alt="Burger icon" /> }    
            </button>
        </div>
        
        <div>
            <ul className={` ${isOpen ? 'active' : ''} `}>
                <li><a href="#Parents"> Parents</a></li>
                <li><a href="#Schools">Schools</a></li>
                <li><a href="#Vocational/Training">Institution</a></li>
                <li>About</li>
                <li>Blog</li>
                <li>FAQs</li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar
