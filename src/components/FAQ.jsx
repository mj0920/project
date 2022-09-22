import { AiOutlinePlus } from "react-icons/ai"
import {AiOutlineMinus} from "react-icons/ai"
import { useState } from "react"



const FAQ = ({question, answer}) => {
const[isAnswerShowing, setisAnswerShowing] = useState(false);


  return (
    <article className="faq" onClick={()=>{

setisAnswerShowing(prev => !prev)


    }}>

<div>
    <h4>{question}  </h4>
    <buttom className="faq__icon">
{

   isAnswerShowing ? <AiOutlineMinus/>: <AiOutlinePlus/> 
}

    </buttom>

       </div>

       {isAnswerShowing && <p>{answer}</p>}
    </article>
  )
}

export default FAQ