import React from "react";
import Jewel from "../Jewel/Jewel";
import "./Accessories.css";
function Accessories({ jewel = [] }) {
  return (
    <div className="accessories">
      <h3 className="title">ALL PRODUCTS</h3>
      <div className="productss">
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
  );
}

export default Accessories;
