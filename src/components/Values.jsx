import Image from '../images/values.png'
import SectionHead from './SectionHead'
import {Link} from 'react-router-dom'
import {values} from '../data'
import Card from '../UI/Card'


const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt="Values Image" />
                </div>
            </div>
            <div className="values__right">
            <Link to="/About" className='btn lg '>좀더 알아보기!</Link>
                <p>
                
                </p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc}) => {
                            return <Card key={id} className="values__value">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values