import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
