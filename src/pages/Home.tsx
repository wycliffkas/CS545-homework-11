import { useState, useEffect } from "react";
import PostsList from "./PostList";

import { posts } from "../data";
import { PostType } from "../types";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const [data, setData] = useState<PostType[] | []>([]);

  useEffect(() => {
    setData(posts);
  }, []);

  return <PostsList posts={data} />;
};

export default Home;
