import '../components.css'
import '../css/testimonials.css'

function Testimonials() {

    const data = [
        {
            name: "Prince Ajibola",
            sch:  "RoyalPath Schools",
            text: "Acceede relieves the stress of bulky payment and frees up cash to do more things at a time. They are very very dependable, reliable and trustworthy. They keep to their promise in terms of charges. There are no extra charges. I pray GOD will take them to higher levels."
        },
        {
            name: "Mrs Obar",
            sch:  "Agnity School",
            text: "Acceede is a good company, very very good. They’re reliable, they reduce stress unlike other banks and their interest is very low. I recommend them to anyone that is interested."
        },
        {
            name: "Mr Giwa",
            sch:  "Eclos College",
            text: "Aceede, your service is awesome, reliable and time friendly. I appreciate your quick response despite the short notice. Kindly keep up the good service."
        }
    ]

    const testimonials = data.map(testimony => {
        return (
            <div className="testimony" key={testimony.name}>
                <h4>{testimony.name}</h4>
                <p className="sch">{testimony.sch}</p>
                <div className="line"></div>
                <p className='text'>{testimony.text}</p>
            </div>
        )
    })

  return (
    <div className="testimonials-section">
      <h1>We're great, but don't just hear it from us</h1>
      <div className="testimony-sec">
        {testimonials}   
      </div>
        
    </div>
  )
}

export default Testimonials
