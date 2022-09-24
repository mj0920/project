

const Header = ({title, image, children}) => {
  return (
    <header className="header">
    <div className ="header__container">
<div className ="header__container-bg">
    <img src={image} alt="header backgroud Image"></img>

</div>
<div className="header__content"></div>
<h2>{title}</h2>
<p>{children}</p>
</div>
</header>
  )
}

export default Header