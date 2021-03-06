import "./navbar.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import lurk from "../../3.png";
import shaun from "../../baa.mp3";
import useSound from "use-sound";
import { Link } from "react-router-dom";
import shaun2 from "../../shaun2.mp3";

const Navbar = ({ cartItem }) => {
  const [play2] = useSound(shaun, {
    volume: 0.5,
  });

  const [play3] = useSound(shaun2, {
    volume: 0.06,
  });

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Naf */}
        <div className="navbar-image">
          <img
            style={{ cursor: "pointer" }}
            onClick={play2}
            src={lurk}
            alt="WILL L"
          />
        </div>
        {/* Middle Nav */}
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/Shop">
            <li>Shop</li>
          </Link>
          <Link to="">
            <li>Contact</li>
          </Link>
          <li className="easter1" onClick={play3}>
            h
          </li>
        </ul>
        {/* Right Nav */}
        <div className="navbar-right">
          {/* <form className="navbar-form">
            <input className="search" type="search" placeholder="Search" />
            <button>
              <FaSearch />
            </button>
          </form> */}
          <Link to="/MyCart">
            <FaShoppingCart className="shoppingcart" size="25" />
          </Link>
          {cartItem.length > 0 && (
            <div className="shoppingcart-quantity">{cartItem.length}</div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
