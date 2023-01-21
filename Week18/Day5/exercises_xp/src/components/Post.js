import logo from "../assets/images/blog.png";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, importPosts } from "../features/homeSlice";
import { useNavigate } from "react-router-dom";

export default function Post(props) {
  const posts = useSelector(importPosts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postsFiltered = posts.filter((post) => post.id === props.post_id);

  const handlerClick = (id) => {
    dispatch(deletePost(id));
    navigate("/");
  };
  return postsFiltered.map((post) => {
    return (
      <div className="col s12 m7" key={post.id}>
        <h5 className="header">{post.title}</h5>
        <div className="card horizontal">
          <div className="card-image">
            <img src={logo} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>{post.body}</p>
            </div>
            <div className="card-action">
              <button
                onClick={() => {
                  handlerClick(post.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
