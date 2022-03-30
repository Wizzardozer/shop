import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import MyCart from "./pages/MyCart";
import Footer from "./components/Footer/Footer";
import shaun from "./4.PNG";

function App() {
  const products = [
    {
      id: 1,
      title: "1 Spin",
      price: 7,
      quantity: 5,
      img: "https://static.cardmarket.com/img/df0e1a49f2278ecf0bed6793a286efa2/items/1040/TSKS70/484604.jpg",
    },
    {
      id: 2,
      title: "10 Spins",
      price: 65,
      quantity: 5,
      img: "https://cdn.shopify.com/s/files/1/0282/8458/4068/products/030_d69192a5-a2ff-4905-8e58-afadb463b638_1024x1024.png?v=1633713013",
    },
    {
      id: 3,
      title: "Pay To Win",
      price: 999,
      quantity: 1,
      img: shaun,
    },
  ];

  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    console.log(cartItem);
    const exist = cartItem.find((cartItem) => cartItem.id === product.id);
    if (exist) {
      alert("Item already in the cart!");
    } else {
      setCartItem([...cartItem, product]);
      console.log(cartItem);
    }
  };

  return (
    <>
      <Router>
        <Navbar cartItem={cartItem} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                products={products}
                cartItem={cartItem}
                addToCart={addToCart}
              />
            }
          />
          <Route
            exact
            path="/MyCart"
            element={<MyCart cartItem={cartItem} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
