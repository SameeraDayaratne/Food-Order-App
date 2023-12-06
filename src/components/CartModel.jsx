import React from 'react';
import Button from './Button';
import { CartContext } from "../store/cart-context";
import { useContext } from "react";
import CartItem from './CartItem';

function CartModel(props) {

    const { toggleCartModal , cartItems , openFormModal } = useContext(CartContext);
    let total = cartItems.reduce((p,c)=>{ 
        return(p + parseFloat(c.totalPrice));
    } , 0);
    return (
        <div className='fixed inset-0  backdrop-blur-sm flex justify-center items-center text-gray-800'>
            <div className='bg-slate-50 w-1/2 flex flex-col p-6 gap-5'>
                <div><h2 className='font-bold text-xl'>Your Cart</h2></div>
                <div className='flex flex-col gap-1'>
                    {cartItems.length == 0 && <p>Your Cart Is Empty</p>}
                    {cartItems.length > 0 && cartItems.map(cartItem => <CartItem key={cartItem.id} title={cartItem.name} itemCount={cartItem.mealCount} id={cartItem.id}/>)}
           
                </div>
                    
                
                <div className='place-self-end'>
                    <h2 className='font-bold text-lg' >${total}</h2>
                </div>
                <div className='flex flex-row justify-end gap-2'>
                    <Button handleClick={toggleCartModal}>Close</Button>
                    <Button handleClick={openFormModal}>Checkout</Button>
                </div>              
            </div>
        </div>
    );
}

export default CartModel;