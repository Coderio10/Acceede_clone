import '../components.css'
import '../css/services.css'
import data from './componentdata.js'

function Features() {

    const Component = data.map(content =>{

        const features = content.features.map(feature =>{
            return (
                <div className='feature' key={feature.key}>
                    <div className='feature-'>
                        <img src={feature.img} alt="features" />
                    </div>
                    <div>
                        <h4>{feature.title}</h4>
                        <p>{feature.text}</p>
                    </div>
                </div>
            )
        })

        return (
            <div className='service' id={content.id}  key={content.tag}>
                <div className='service-component'>
                    <div className='col-1'>
                        <div>
                            <span className={content.color} >{content.tag}</span>
                            <h2>{content.title}</h2>
                            <h4>{content.extraOne}</h4>
                            <p>{content.extraOneText}</p>
                            <h4>{content.extraTwo}</h4>
                            <p>{content.extraTwoText}</p>
                        </div>
                        <div className="btn-sec">
                            <button className='btngo-1'>Request for demo</button>
                            <button className='btngo-2'>Get started now</button>
                        </div>
                    </div>
                    <div className='img-sec'>
                        <img src={content.img} alt="content" />
                    </div>
                </div>
                <div className='features'>
                    {features}
                </div>
            </div>
        )
    })
    

  return (
    <section className='services-container'>
        {Component}
    </section>
  )
}

export default Features
