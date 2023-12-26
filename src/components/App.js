
import React from "react";
import './../styles/App.css';
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Navbar from "./Navbar";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
