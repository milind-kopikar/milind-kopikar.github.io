import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import SaaSDetail from "./pages/SaaSDetail";
import FloatingChatbot from "./components/FloatingChatbot";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/saas/:id" element={<SaaSDetail />} />
      </Routes>
      <FloatingChatbot /> {/* Add this line here */}
    </Router>
  );
}

export default App;