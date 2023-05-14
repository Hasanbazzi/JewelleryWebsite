import React, { useEffect, useState } from "react";
import "./Home.css";
import EastIcon from "@mui/icons-material/East";
import axios from "axios";
import Jewel from "../Jewel/Jewel";
function Home({ jewel = [] }) {
  return (
    <div className="home">
      <div className="desc">
        <div className="desc_1">
          <h3>Choose Your Own Style</h3>
          <p>
            Pleasing, graceful, classic, shapely, heirloom-quality, handsome,
            lustrous –These are an excellent choice for vintage-inspired
            jewelry.
          </p>
          <button className="btn">
            Explore Now
            <EastIcon />
          </button>
        </div>
        <img
          className="bgImg"
          src="https://t4.ftcdn.net/jpg/02/55/69/05/360_F_255690547_MISUc22g0DcRwAN0Sw3aw6T6H5rLwgL8.webp"
          alt=""
        />
      </div>
      <div className="products">
        <h2 className="title">Featured Products</h2>
        <div className="row">
          {jewel.map((products) => (
            <Jewel
              id={products.id}
              name={products.name}
              description={products.description}
              weight={products.weight}
              price={products.price}
              image={products.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
