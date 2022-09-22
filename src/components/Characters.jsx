import SectionHead from "./SectionHead"
import {ImQuotesLeft } from 'react-icons/im'
import Card from "../UI/Card"
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import { useState } from "react"
import {characters} from "../data"
import { Prev } from "react-bootstrap/esm/PageItem"


const Characters = () => {

 const [index , setIndex] = useState(0)
 const { name, quote, job, avatar} = characters[index];

const prevcharactersHandler = () => {

setIndex(prev => prev -1 );

if(index <= 0 ){
  
  setIndex(characters.length -1);


}
}

const nextcharactersHandler = () => {
setIndex(prev => prev+1);
if(index >= characters.length -1){
   setIndex(0);

}

  
}

  return (
<section className="characters">
<div className="contaniner characters__contaniner">
<SectionHead icon={<ImQuotesLeft/>} title="Characters" className="characters_head"/>
<Card className= "characters">
  <div className="characters__avatar">
<img src={avatar} alt ={name} />
  </div>
<p className="characters_quote">{`"${quote}"`}</p>
<h5>{name}</h5>
<small className= "characters_title">{job}</small>
</Card>
<div className="characters__btn-container"></div>
<button className="characters__btn" onClick={prevcharactersHandler}><IoIosArrowDropleftCircle/></button>
<button className="characters__btn" onClick={nextcharactersHandler}><IoIosArrowDroprightCircle/></button>
</div>
</section>


  )
}

export default Characters