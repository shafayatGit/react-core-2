import { use } from "react";
import Post from "./post";
export default function Posts({ postsData }) {
  const posts = use(postsData);
  // console.log(posts);
  return (
    <div className="users_card">
      <h3>Posts:{posts.length}</h3>
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
}
