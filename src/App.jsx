import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
