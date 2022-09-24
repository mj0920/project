
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import {AiOutlineFacebook} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'


const Footer = () => {
  return (
   <footer>
<div className="footer">

<article>

<Link to = "/" className='logo'>
<img src={Logo} alt="Footer Logo"></img>
</Link>


<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, magnam recusandae obcaecati consequuntur sed officia omnis sunt tempora tenetur ducimus fugit totam soluta at quam pariatur atque inventore dicta explicabo.</p>

<div className='footer__socials'>

<a href="https://linkedin.com/" target="_blank" rel='noreferrer noopener'>{FaLinkedinIn}
</a>
<a href="https://facebook.com/" target="_blank" rel='noreferrer noopener'>{AiOutlineFacebook}
</a>
<a href="https://twitter.com/" target="_blank" rel='noreferrer noopener'>{AiOutlineTwitter}
</a>
<a href="https://instagram.com/" target="_blank" rel='noreferrer noopener'>{AiOutlineInstagram}
</a>


</div>
</article>

<article>
<h4>Permalinks</h4>
<Link to="/about">About</Link>
<Link to="/plans">Plans</Link>
<Link to="/trainers">Trainers</Link>
<Link to="/gallery">Gallery</Link>
<Link to="/contact">Contact</Link>
</article>

<article>
<h4>Permalinks</h4>
<Link to="/s">Blog</Link>
<Link to="/s">Case Studies </Link>
<Link to="/s">Events</Link>
<Link to="/s">Communities</Link>
<Link to="/s">FAQs</Link>
</article>


<article>
<h4>GET IN TOUCH</h4>

<Link to="/contact">Contact Us</Link>
<Link to="/s">Support</Link>

</article>
</div>
<div className="footer_copyright"></div>
<small>2022 가디언테일즈 $copy; All rights Reserved</small>



</footer>
  
 )}

export default Footer



