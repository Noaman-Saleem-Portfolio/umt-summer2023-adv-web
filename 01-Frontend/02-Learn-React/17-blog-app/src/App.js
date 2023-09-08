import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Menubar from "./components/Menubar/Menubar";
import Blogs from "./pages/blogs/Blogs";
import NewBlog from "./pages/create-blog/NewBlog";
import BlogDetails from "./pages/details/BlogDetails";

function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/create/blog" element={<NewBlog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
