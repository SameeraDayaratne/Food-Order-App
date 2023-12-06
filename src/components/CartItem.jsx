import React from "react";

function CartItem({title,itemCount}) {
  return (
    <div className='flex flex-row justify-between'>
      <h2 className="font-bold ">{title}</h2>
      <div className="flex flex-row justify-end gap-5">
        <button className="rounded-full bg-black text-center text-white px-2 text-lg">
          -
        </button>
        <h2>{itemCount}</h2>
        <button className="rounded-full bg-black text-center text-white px-2">
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
