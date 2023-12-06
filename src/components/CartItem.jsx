import React from "react";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";

function CartItem({title,itemCount , id}) {

    const { handleCartItemCount } = useContext(CartContext);

  return (
    <div className='flex flex-row justify-between'>
      <h2 className="font-bold ">{title}</h2>
      <div className="flex flex-row justify-end gap-5">
        <button onClick={() => handleCartItemCount('decrease' , id)} className="rounded-full bg-black text-center text-white px-2 text-lg">
          -
        </button>
        <h2>{itemCount}</h2>
        <button onClick={() => handleCartItemCount('increase' , id)} className="rounded-full bg-black text-center text-white px-2">
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
