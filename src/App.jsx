import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./pages/home";
import News from "./pages/news";
import Page3 from "./pages/page3";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/pay" element={<Page3 />} />
      </Routes>
    </>
  );
}

export default App;
