import Header from '../../components/Header'
import HeaderImage from '../../images/contect.jpeg'
import  Gmail from '../../images/gmail-icon.png'
import Kong from '../../images/kong.png'
import  Cafe from '../../images/cafe-icon.jpg'

import './contact.css'

const Contact = () => {
  return (
    <>
    <Header  image={HeaderImage} >


    </Header>


    <section className='contact'>
<div className="container contact__container">
<div className="contact__wrapper">
<a href="mailto : lmj7772@gmail.com" target= "_blank" rel= "noopener noreferrer"><img src= {Gmail} /></a>
<a href="https://cafe.daum.net/GuardianTales" target= "_blank" rel= "noopener noreferrer"><img src= {Cafe} /></a>
<a href="https://guardiantales.kakaogames.com/" target= "_blank" rel= "noopener noreferrer"><img src= {Kong} /></a>
{/* 보안용 코드 */}


</div>
</div>
    </section>
    
    
    </>
  )
}

export default Contact