
import {Link} from 'react-router-dom'
import './notfound.css'
import notfound from '../../images/notfound.gif'


const NotFound = () => {
  return (
 <section>

<div className="container notfound__container">

<img src={notfound}/>
<Link to = "/" className='btn'>  홈으로 돌아가세요</Link>
</div>


 </section>





  )
}

export default NotFound