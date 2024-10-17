import { PostType } from "../types";
import { Link } from "react-router-dom";

type PostListProps = {
  posts: PostType[];
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
