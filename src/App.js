import { Route, Routes } from "react-router-dom";
import "./App.css";
import Add from "./Components/AddProduct/Add";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import MyProduct from "./Components/Myproduct/MyProduct";
import NotFound from "./Components/NotFound/NotFound";
import Register from "./Components/Register/Register";
import Require from "./Components/RequireAuth/Require";
import Update from "./Components/UpdateProduct/Update";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route
          path="/product/:productID"
          element={
            <Require>
              <Update></Update>
            </Require>
          }
        ></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/addproduct" element={<Add></Add>}></Route>
        <Route path="/myproduct" element={<MyProduct></MyProduct>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>{" "}
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
