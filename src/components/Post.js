import { useState, useEffect } from "react";
import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com/posts";
const Post = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(URL)
      .then((posts) => {
        setIsLoading(false);
        setPosts(posts);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  }, []);
  if (loading) return <h1 style={{ color: "green" }}>Loading...</h1>;
  if (error) return <h1 style={{ color: "Red" }}>Network Error</h1>;
  return (
    <table
      style={{ borderCollapse: "collapse", width: "100%", margin: "20px" }}
    >
      <thead>
        <tr>
          <th>userId</th>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody>
        {posts.data.map((post) => {
          console.log(post);
          return (
            <tr key={post.id}>
              <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Post;
