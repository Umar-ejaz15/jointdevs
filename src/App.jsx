import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Resources from "./pages/Resources";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import { Pointer } from "@/components/magicui/pointer";

const App = () => {
  return (
    <Router>
      <div className="app">
        <main>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;