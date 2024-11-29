import posts from "../../db/posts";
import "./tags.css";

function tagColor(tag, index) {
  if (tag == "html") return "html";
  if (tag == "css") return "css";
  if (tag == "js") return "js";
  if (tag == "php") return "php";
}

function Tags() {
  const allTags = [];
  const htmlTags = [];

  posts.forEach((post) => {
    const tags = post.tags;
    tags.map((tag, index) => {
      if (!allTags.includes(tag)) {
        allTags.push(tag);
        return htmlTags.push(
          <span className={tagColor(tag, index)} key={index}>
            {tag}
          </span>
        );
      }
    });
  });

  return htmlTags;
}

export default Tags;
