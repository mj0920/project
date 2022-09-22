import Image from "../images/Values.png";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../UI/Card";

const Values = () => {
  return (
    <section className="values">
      <div className="= values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="Values Image"></img>
            <div />
          </div>
          <div className="values__right"></div>
          <SectionHead icon={<GiCutDiamond />} title="Values" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            voluptates nobis voluptas quasi distinctio vero, provident
            perspiciatis alias autem accusantium incidunt ullam aliquam
            reiciendis, omnis quo laudantium molestias excepturi maiores?
          </p>

          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card key={id} className="values__value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
