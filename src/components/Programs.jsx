
import SectionHead from './SectionHead'
import {programs} from '../data'
import Card from '../UI/Card'
import {Link} from 'react-router-dom'


const Programs = () => {
  return (
    <section className="programs">
        <div className="container programs__container">
            <SectionHead title="영웅들의 세계에 합류하세요!!"/>
        <div className="programs__wrapper">
            {
                programs.map(({id, icon, title,  path ,Image}) => {
                    return (
                        <Card className="programs__program" key={id}>
                            <span>{icon}</span>
                            <h4>{title}</h4>
                                                       <a href={path}  className="btn sm"><img src= {Image} />Install Now </a> 
                            
                        </Card>
                    )
                })
            }
        </div>
        </div>
    </section>
  )
}

export default Programs