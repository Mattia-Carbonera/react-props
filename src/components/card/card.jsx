import "./card.css";
import style from "./card.module.css";
import Button from "../button/button";
// import defaultImage from "../../assets/img/card-image.png";
const defaultImage = "https://picsum.photos/800";

function tagColor(tag, index) {
  if (tag == "html") return "html";
  if (tag == "css") return "css";
  if (tag == "js") return "js";
  if (tag == "php") return "php";
  if (tag != "html" && tag != "css" && tag != "js" && tag != "php")
    return "other";
}

function Card({ id, title, image, content, tags, published }) {
  return (
    <div className={style.card} key={id}>
      <div className="image-container">
        <img
          src={image || defaultImage}
          alt="card image"
          className={style.img}
        />
      </div>
      <div className={style.description}>
        <h2>{title}</h2>
        <p>{content}</p>
        {tags.map((tag, index) => {
          return (
            <span className={tagColor(tag, index)} key={index}>
              {tag}
            </span>
          );
        })}
        <div className="button">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Card;
