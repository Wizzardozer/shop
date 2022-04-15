import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import MyCart from "./pages/MyCart";
import Footer from "./components/Footer/Footer";
import shaun from "./4.PNG";
import wheel from "./5.png";
import wheel2 from "./6.png";
import gloria from "./gloria.png";
import Shop from "./pages/Shop";

function App() {
  const products = [
    {
      id: 1,
      title: "1 Spin",
      price: 7,
      Stock: 5,
      img: "https://static.cardmarket.com/img/df0e1a49f2278ecf0bed6793a286efa2/items/1040/TSKS70/484604.jpg",
    },
    {
      id: 2,
      title: "10 Spins",
      price: 65,
      Stock: 5,
      img: "https://cdn.shopify.com/s/files/1/0282/8458/4068/products/030_d69192a5-a2ff-4905-8e58-afadb463b638_1024x1024.png?v=1633713013",
    },
    {
      id: 3,
      title: "Pay To Win",
      price: 999,
      Stock: 1,
      img: shaun,
    },
    {
      id: 4,
      title: "1 Spin",
      price: 7,
      Stock: 1,
      img: wheel,
    },
    {
      id: 5,
      title: "1 Spin",
      price: 7,
      Stock: 1,
      img: wheel2,
    },
    {
      id: 6,
      title: "Gloria",
      price: 20,
      Stock: 1,
      img: gloria,
    },
  ];

  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const exist = cartItem.find((cartItem) => cartItem.id === product.id);
    if (exist) {
      alert("Item already in the cart!");
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (productID) => {
    const products = cartItem.filter((product) => product.id !== productID);
    setCartItem(products);
    console.log(cartItem);
  };

  const addQuantity = (productID) => {
    //checks if the item is in the cart
    const exist = cartItem.find((product) => productID === product.id);
    // if the item is in the cart then add +1 to qty
    if (exist) {
      setCartItem(
        cartItem.map((x) =>
          x.id === productID ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    }
  };

  const removeQuantity = (productID) => {
    const exist = cartItem.find((product) => productID === product.id);

    //removes the item from cart if it is equal to one else subtract qty 1
    if (exist.qty === 1) {
      const products = cartItem.filter((product) => product.id !== exist.id);
      setCartItem(products);
    } else {
      setCartItem(
        cartItem.map((x) =>
          x.id === productID ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
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
            element={
              <MyCart
                cartItem={cartItem}
                removeFromCart={removeFromCart}
                addQuantity={addQuantity}
                removeQuantity={removeQuantity}
              />
            }
          />
          <Route
            exact
            path="/Shop"
            element={<Shop products={products} addToCart={addToCart} />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
