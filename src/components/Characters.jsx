import { useState } from "react"
import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import Card from "../UI/Card"
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import { characters } from "../data"






const Characters = () => {
    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} = characters[index];


    const prevcharactersHandler = () => {
        setIndex(prev => prev - 1);

        if(index <= 0) {
            setIndex(characters.length - 1);
        }

    }

    const nextcharactersHandler = () => {
        setIndex(prev => prev + 1);

        if(index >= characters.length - 1) {
            setIndex(0);
        }
    }


  return (
    <section className="characters">
        <div className="container characters__container">
            <SectionHead icon={<ImQuotesLeft/>} title="후기" className="characters__head"/>
            <Card className="characters">
                <div className="characters__avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p className="characters__quote">{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small className="characters__title">{job}</small>
            </Card>
            <div className="characters__btn-container">
                <button className="characters__btn" onClick={prevcharactersHandler}><IoIosArrowDropleftCircle/></button>
                <button className="characters__btn"  onClick={nextcharactersHandler}><IoIosArrowDroprightCircle/></button>
            </div>
        </div>
    </section>
  )
}

export default Characters