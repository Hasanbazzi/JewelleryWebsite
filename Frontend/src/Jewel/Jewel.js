import React from "react";
import "./Jewel.css";
import { useStateValue } from "../StateProvider";
function Jewel({ name, description, weight, price, image }) {
  const [{ jewel }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_JEWEL",
      item: {
        name: name,
        description: description,
        weight: weight,
        price: price,
        image: image,
      },
    });
  };
  return (
    <div className="jewel">
      <div className="info">
        <p>{name}</p>
        <p>{description}</p>
        <p className="price">
          <strong>{price}$</strong>
        </p>
        <div className="productweight">
          <strong>{weight}g</strong>
        </div>
        <img className="img" src={image} alt="" />
        <button className="button" onClick={addToBasket}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Jewel;
