import React from 'react';
import Button from './Button';
import { CartContext } from "../store/cart-context";
import { useContext } from "react";
import CartItem from './CartItem';

function SuccessModel(props) {

    const { toggleSuccessModal } = useContext(CartContext);
  
    return (
        <div className='fixed inset-0  backdrop-blur-sm flex justify-center items-center text-gray-800'>
            <div className='bg-slate-50 w-1/2 flex flex-col p-6 gap-5'>
                <div><h2 className='font-bold text-xl'>Success</h2></div>
                
                <div className='flex flex-row justify-end gap-2'>
                    <Button handleClick={toggleSuccessModal}>Okay</Button>
                    
                </div>              
            </div>
        </div>
    );
}

export default SuccessModel;