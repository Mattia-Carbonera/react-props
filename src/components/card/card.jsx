import style from "./card.module.css";
import Button from "../button/button";
import defaultImage from "../../assets/img/card-image.png";

function Card() {
  return (
    <div className={style.card}>
      <div className="image-container">
        <img src={defaultImage} alt="card image" className={style.img} />
      </div>
      <div className={style.description}>
        <h2>Titolo del post</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore optio
          quibusdam facilis, quaerat accusamus molestiae repellendus odio error
          expedita. Soluta dignissimos hic optio voluptas culpa molestias, est
          facere veritatis veniam!
        </p>
        <div className="button">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Card;
