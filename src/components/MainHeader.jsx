import {Link} from 'react-router-dom'
import  Image  from '../images/main__header.png'
import  ImageBg  from '../images/1.png'



const MainHeader = () => {
  return (
   
<header className='main__header'>
<div className="container main__header-container">
<div className='main__header-left'>

  
  {/* <video src={VideoBg} autoPlay loop muted ></video> */}
  {/* <div className='imageBg' ><img src={ImageBg} alt='사진'/></div> */}
  

<h4>RUN!!</h4>
<h1>더 나은 러닝을 위한 가이드</h1>
<p> RUN TO YOU 는 올바른 더나은 달리기를 위한 러닝 도움 사이트입니다
 
 

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




