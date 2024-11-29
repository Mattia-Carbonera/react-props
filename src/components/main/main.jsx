import "./main.css";
import Card from "../card/card";
import Tags from "../tags/tags";
import posts from "../../db/posts";

function Main() {
  const filteredPosts = posts.filter((post) => post.published == true);

  return (
    <main>
      <div className="tags">
        <Tags />
      </div>

      {filteredPosts.map((post) => {
        return (
          <Card
            key={post.id}
            title={post.title}
            image={post.image}
            content={post.content}
            tags={post.tags}
            published={post.published}
          />
        );
      })}
    </main>
  );
}

export default Main;
