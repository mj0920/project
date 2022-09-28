import {Link} from 'react-router-dom'
import  Image  from '../images/main__header.png'
import VideoBg from '../video/videoBg.mp4'
import  ImageBg  from '../images/1.png'



const MainHeader = () => {
  return (
   
<header className='main__header'>
<div className="container main__header-container">
<div className='main__header-left'>

  
  <video src={VideoBg} autoPlay loop muted ></video>
  <div className='imageBg' ><img src={ImageBg} alt='사진'/></div>
  

<h4>세상 모든 재미를 다 담았다</h4>
<h1>띵작 어드벤처</h1>
<p>
명작 어드벤처 RPG의 탄생! 가디언 테일즈에서 최고의 모험을 경험하세요! 거대한 던전에서 퍼즐을 풀고, 치열한 전투에서 승리하세요!  
캔터베리를 구하기 위한 전설적인 여정이 시작됩니다.
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




