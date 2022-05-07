import { Route, Routes } from "react-router-dom";
import "./App.css";
import Add from "./Components/AddProduct/Add";
import Blogs from "./Components/Blogs/Blogs";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import MyProduct from "./Components/Myproduct/MyProduct";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/addproduct' element={<Add></Add>}></Route>
        <Route path='/myproduct' element={<MyProduct></MyProduct>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
