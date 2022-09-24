import Header from '../../components/Header'
import './about.css'
import HeaderImage from '../../images/headerbg1.jpg'
import StroyImage from '../../images/storyimage.png'
import StroyImage2 from '../../images/storyimage2.png'
import StroyImage3 from '../../images/storyimage3.png'
import StroyImage4 from '../../images/storyimage4.png'


const About = () => {
  return (
<>

   <Header title= "About Us" image={HeaderImage}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis unde labore quae nostrum. Ipsam, quaerat? Eos aliquid quaerat quam molestias perspiciatis sit in ipsa fugit esse ducimus, illum at.
   </Header>
<section className='about_story'>
  <div className="container about_story-container"></div>
<div className="about__section-image">
<img src={StroyImage} alt="Our Story Image"/>
</div>
<div className="about__section-content1" >
<h1>상상도 못한 던전퍼즐</h1>
<p>바위를 들어올리고, 폭탄을 던지고, 장애물을 뛰어넘어 보물이 있는 숨겨진 길을 찾아보세요!

</p>

</div>
</section>
{/* ======================================2================================ */}

<section className='about_story'>
  <div className="container about_story-container"></div>
<div className="about__section-image">
<img src={StroyImage2} alt="Our Story Image"/>
</div>
<div className="about__section-content2" >
<h1>거대한 던전과 강력한 보스들</h1>
<p>어둡고 위험한 던전을 지나 보스에게 도전하세요! 사악한 몬스터들에 경고한다, 지금 영웅이 도착했다!

</p>

</div>
</section>

{/* ======================================3================================ */}


<section className='about_story'>
  <div className="container about_story-container"></div>
<div className="about__section-image">
<img src={StroyImage3} alt="Our Story Image"/>
</div>
<div className="about__section-content3" >
<h1>치열한 PVP와 랭킹시스템</h1>
<p>최고의 영웅 조합은? 예측불가! 긴박감 넘치는 실시간 전투!

</p>

</div>
</section>

{/* ======================================2================================ */}


<section className='about_story'>
  <div className="container about_story-container"></div>
<div className="about__section-image">
<img src={StroyImage4} alt="Our Story Image"/>
</div>
<div className="about__section-content4" >
<h1>무기수집 및 업그레이드</h1>
<p>각기 다른 능력을 가진 100종류가 넘는 무기를 모으고. 업그레이드 하세요!

</p>

</div>
</section>







   </>
  )
}

export default About