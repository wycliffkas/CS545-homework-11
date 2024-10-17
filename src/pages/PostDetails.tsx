import React from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "../data";
import { PostType } from "../types";

const PostDetails = () => {
  const { id } = useParams();

  const post = posts.find((p: PostType) => p.id === Number(id));

  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.description}</p>
      <Link to={`/posts/${post?.id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default PostDetails;
