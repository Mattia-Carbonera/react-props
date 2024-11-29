import Card from "../card/card";
import posts from "../../db/posts";
import defaultImage from "../../assets/img/card-image.png";

function Main() {
  const filteredPosts = posts.filter((post) => post.published == true);

  return (
    <main>
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
