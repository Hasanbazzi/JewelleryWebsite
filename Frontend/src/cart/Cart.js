import React from "react";
import { useStateValue } from "../StateProvider";
import Jewel from "../Jewel/Jewel";
import { getJewelTotal } from "../reducer";
import "./Cart.css";
function Cart() {
  const [{ jewel }, dispatch] = useStateValue();
  return (
    <div className="cart">
      <div>
        {jewel.map((item) => (
          <Jewel
            name={item.name}
            description={item.description}
            price={item.price}
            weight={item.weight}
            image={item.image}
          />
        ))}
      </div>
      <div className="right">
        <div className="subtotal">
          <div>
            <p>
              Subtotal ({jewel.length} items):
              <strong>${getJewelTotal(jewel)}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>

          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
