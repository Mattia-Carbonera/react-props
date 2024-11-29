import posts from "../../db/posts";
import "./tags.css";

function tagColor(tag, index) {
  if (tag == "html") return "html";
  if (tag == "css") return "css";
  if (tag == "js") return "js";
  if (tag == "php") return "php";
  if (tag != "html" && tag != "css" && tag != "js" && tag != "php")
    return "other";
}

function Tags() {
  const allTags = [];
  const htmlTags = [];
  let index = 0;

  posts.forEach((post) => {
    const tags = post.tags;
    tags.map((tag) => {
      if (!allTags.includes(tag)) {
        allTags.push(tag);
        index++;
        return htmlTags.push(
          <span className={tagColor(tag, index)} key={index - 1}>
            {tag}
          </span>
        );
      }
    });
  });

  return htmlTags;
}

export default Tags;
