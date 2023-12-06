import React from 'react';
import Button from './Button';
import { CartContext } from "../store/cart-context";
import { useContext } from "react";
import CartItem from './CartItem';

function CartModel(props) {

    const { toggleCartModal , cartItems } = useContext(CartContext);
    return (
        <div className='fixed inset-0  backdrop-blur-sm flex justify-center items-center text-gray-800'>
            <div className='bg-slate-50 w-1/2 flex flex-col p-6 gap-5'>
                <div><h2 className='font-bold text-xl'>Your Cart</h2></div>
                <div className='flex flex-col gap-1'>

                    {cartItems.map(cartItem => <CartItem key={cartItem.id} title={cartItem.name} itemCount={cartItem.mealCount}/>)}
                    
                    
                   
                </div>
                    
                
                <div className='place-self-end'>
                    <h2 className='font-bold text-lg' >$58</h2>
                </div>
                <div className='flex flex-row justify-end gap-2'>
                    <Button handleClick={toggleCartModal}>Close</Button>
                    <Button>Checkout</Button>
                </div>              
            </div>
        </div>
    );
}

export default CartModel;