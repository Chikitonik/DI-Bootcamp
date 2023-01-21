import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";
import { useParams } from "react-router-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:post_id" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
function PostPage() {
  const { post_id } = useParams();
  return <Post post_id={post_id} />;
}
export default App;
