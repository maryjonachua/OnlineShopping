import { useEffect, useState } from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Orders from "./Pages/Orders";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ForgotPassPage from "./Pages/ForgotPassPage";


function App() {
  const [url, setUrl] = useState("https://fakestoreapi.com/products");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [login,setLogin] = useState(false)
  


  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching Products data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
    

      <Router basename="/OnlineShopping/">
       
        <Provider store={store}>
          
        <NavBar products={products} setLogin={setLogin} login={login} /> 
          <Routes>
          <Route path="/" element={<LoginPage setLogin={setLogin}  />} />
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/forgotPassword" element={<ForgotPassPage/>} />
            <Route path="/home" element={<Home products={products} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
          <Footer/>
        </Provider>
      </Router>
    </>
  );
}

export default App;
