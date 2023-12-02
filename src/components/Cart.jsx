import React from "react";
import { CartContext } from "../store/cart-context";
import { useContext } from "react";


function Cart(props) {

  const { toggleCartModal } = useContext(CartContext);
  const {count} = useContext(CartContext);

  return (
    <div>
      <button onClick={toggleCartModal} className="text-yellow-500 text-xl font-bold">Cart ({count})</button>
    </div>
  );
}

export default Cart;
