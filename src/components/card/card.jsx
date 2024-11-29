import style from "./card.module.css";
import Button from "../button/button";
import defaultImage from "../../assets/img/card-image.png";

function Card({ id, title, image, content, tags, published }) {
  return (
    <div className={style.card} key={id}>
      <div className="image-container">
        <img src={defaultImage} alt="card image" className={style.img} />
      </div>
      <div className={style.description}>
        <h2>{title}</h2>
        <p>{content}</p>
        <span>{tags}</span>
        <div className="button">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Card;
