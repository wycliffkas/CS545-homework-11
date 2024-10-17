import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../data";
import { PostType } from "../types";

const EditPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = posts.find((p: PostType) => p.id === Number(id));

  const [title, setTitle] = useState(post?.title);
  const [description, setDescription] = useState(post?.description);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Post:", { title, description });
    navigate(`/posts/${post?.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Content:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditPost;
