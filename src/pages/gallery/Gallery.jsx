import Header from '../../components/Header'
import './gallery.css'
import HeaderImage from '../../images/header_bg_3.jpg'


const Gallery = () => {

const galleryLength = 104;
const images = []

for(let i= 1; i<=galleryLength; i++)

{images.push(require(`../../images/gallery${i}.png`))


}


  return (
    <>
    
    <Header title= "Galley" image={HeaderImage}> </Header>
    <section className="gallery"></section>
    <div className="container gallery__container"></div>
    {images.map((image, index)=>{

return <article key={index}>
<img src={image} alt= {`gallery Image ${index + 1}`} />


</article> 


    })}


    </>
  )
}

export default Gallery