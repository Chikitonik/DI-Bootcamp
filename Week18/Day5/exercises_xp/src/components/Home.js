import logo from "../assets/images/blog.png";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, importPosts } from "../features/homeSlice";
import Post from "./Post";
import { Link } from "react-router-dom";

export default function Home() {
  const posts = useSelector(importPosts);
  const dispatch = useDispatch();
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => {
          // console.log("post", post);
          return (
            <div className="col s12 m7" key={post.id}>
              <h5 className="header">{post.title}</h5>
              <div className="card horizontal">
                <div className="card-image">
                  <img src={logo} alt={post.title} />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>{post.body}</p>
                  </div>
                </div>
                <div className="card-action">
                  <Link to={`/${post.id}`}>open post</Link>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <>
          <h3>Home</h3>
          <p>No posts to show</p>
        </>
      )}
    </div>
  );
}
