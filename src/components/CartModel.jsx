import React from 'react';
import Button from './Button';

function CartModel(props) {
    return (
        <div className='fixed inset-0  backdrop-blur-sm flex justify-center items-center text-gray-800'>
            <div className='bg-slate-50 w-1/2 flex flex-col p-6 gap-5'>
                <div><h2>Your Cart</h2></div>
                <div className='flex flex-row justify-between'>
                    <h2>Seafood</h2>
                    <div>
                        <h2>2</h2>
                    </div>
                </div>
                <div className='place-self-end'>
                    <h2>total</h2>
                </div>
                <div className='flex flex-row justify-end gap-2'>
                    <Button>Close</Button>
                    <Button>Checkout</Button>
                </div>              
            </div>
        </div>
    );
}

export default CartModel;