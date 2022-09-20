import {Link} from 'react-router-dom'
import  Image  from '../images/main__header.png'
import VideoBg from '../video/videoBg.mp4'


const MainHeader = () => {
  return (
   
<header className='main__header'>
<div className="container main__header-container">
<div className='main__header-left'>

  <div className='overlay'></div>
  <video src={VideoBg} autoPlay loop muted ></video>
  <div className='video1'></div>
  <h1>welcome</h1>
  <p>안녕안녕</p>
<h4>모험의 시작</h4>
<h1>전설의 시작</h1>
<p>

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro blanditiis placeat beatae dolores. Labore ut accusantium corporis, maiores voluptate iste itaque, earum consequatur consectetur perferendis fugiat assumenda, esse repudiandae modi!
</p>

<Link to="/plans" className='btn lg '>GET START</Link>

</div>


<div className='main__header-right'>
<div className='main__header-circle'></div>
<div className='main__header-image'>
<img src={Image} alt='Main Header Image'/>
</div>
</div>
</div>


</header>


  )
}

export default MainHeader




