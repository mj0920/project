import {Link} from 'react-router-dom'




const MainHeader = () => {
  return (
   
<header className='main__header'>
<div className="container main__header-container">

<h4>모험의 시작</h4>
<h1>전설의 시작</h1>
<p>

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro blanditiis placeat beatae dolores. Labore ut accusantium corporis, maiores voluptate iste itaque, earum consequatur consectetur perferendis fugiat assumenda, esse repudiandae modi!
</p>

<Link to="/plans" className='btn lg '>GET START</Link>

</div>





</header>


  )
}

export default MainHeader




