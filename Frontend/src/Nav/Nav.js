import React from "react";
import { Link } from "react-router-dom";
import DiamondIcon from "@mui/icons-material/Diamond";
import "./Nav.css";
import { useStateValue } from "../StateProvider";
function Nav() {
  const [{ jewel }, dispatch] = useStateValue();
  return (
    <div className="nav">
      <Link style={{ textDecoration: "none" }} to="/">
        <div class="logo">
          <h1>Bazzi Jewellery</h1>
        </div>
      </Link>

      <ul class="header">
        <Link style={{ textDecoration: "none" }} to="/">
          <li>Home</li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/Accessories">
          <li>Accessories</li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/Cart">
          <li>Cart</li>
        </Link>
      </ul>
      <Link style={{ textDecoration: "none" }} to="/Cart">
        <div className="optionBasket">
          <DiamondIcon className="diamond-icon" />
          <span className="basketCount">{jewel?.length} </span>
        </div>
      </Link>
    </div>
  );
}

export default Nav;
