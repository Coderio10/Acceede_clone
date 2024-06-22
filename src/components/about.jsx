import '../components.css'
import '../css/about.css'
import ForParents from '../assets/For-parents.svg'
import ForSchool from '../assets/For-schools.png'
import ForInstitutions from '../assets/For-institutions.svg'

import { PiGraduationCap } from "react-icons/pi";

function Testimonials() {

    const data = [
        {
            key: 1,
            purpose: "For Parents",
            text: "Get quick and easy tuition fund for your child, and free up cash for other expenses; you get to pay back monthly",
            img: ForParents
        },
        {
            key: 2,
            purpose: "For Schools",
            text: "Generate 100% of revenue at the beginning of the term by getting full tuition fund from parents to run your school efficiently.",
            img: ForSchool
        },
        {
            key: 3,
            purpose: "For Vocational/Training Institutes",
            text: "Generate revenue at the beginning of every enrollment session to efficiently run your Vocational/Training institutes.",
            img: ForInstitutions
        }
    ]

    const testimonials = data.map(component => {
        return (
            <div className="niche" key={component.key}>
                <PiGraduationCap className='icon' />
                <div>
                  <h4>{component.purpose}</h4>
                  <p>{component.text}</p>
                  <button>Learn more</button>
                </div>
                <img src={component.img} alt="component" />
            </div>
        )
    })

  return (
    <div className="about-section">
      <h2>No More Worries About School Fees Payment</h2>
      <p className="text">Quality education is expensive. You don’t have to break a bank to pay your child’s school fees in lump-sum at the beginning of the term.</p>
      <p className="text">Let us take the stress off you, by paying at the beginning of the term.</p>
      <div className="niche-sec">
        {testimonials}   
      </div>
        
    </div>
  )
}

export default Testimonials
