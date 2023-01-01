import { Component } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./components/ErrorBoundary";
import PostList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Webhook from "./components/Webhook";

class HomeScreen extends Component {
  render() {
    return (
      <>
        <h1>Home screen</h1>
        <PostList />
        <Example1 />
        <Example2 />
        <Example3 />
        <Webhook />
      </>
    );
  }
}
class ProfileScreen extends Component {
  render() {
    return <h1>Profile screen</h1>;
  }
}
class ShopScreen extends Component {
  render() {
    return new Error("Shop screen error");
  }
}
function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/shop" className="nav-link">
                Shop
              </NavLink>
            </li>
          </ul>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
            <Routes>
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
            <Routes>
              <Route path="/shop" element={<ShopScreen />} />
            </Routes>
          </ErrorBoundary>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
