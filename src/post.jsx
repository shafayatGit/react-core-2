export default function Post({ post }) {
  return (
    <div className="users_card">
      <h3>Title: {post.title}</h3>
      <h3>Description: {post.body}</h3>
    </div>
  );
}
