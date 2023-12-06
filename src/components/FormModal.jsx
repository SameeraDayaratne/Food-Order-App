import React from 'react';
import Button from './Button';
import { CartContext } from "../store/cart-context";
import { useContext } from "react";


function FormModel(props) {

    const { closeFormModal , cartItems } = useContext(CartContext);
    let total = cartItems.reduce((p,c)=>{ 
        return(p + parseFloat(c.totalPrice));
    } , 0);
    return (
        <div className='fixed inset-0  backdrop-blur-sm flex justify-center items-center text-gray-800'>
            <div className='bg-orange-100 w-1/2 flex flex-col p-6 gap-5 rounded-sm'>
                <div><h2 className='font-bold text-2xl'>Checkout</h2></div>
                <div><h2 className='font-medium text-xl'>Total Amount : ${total}</h2></div>
                
                   <form action="">
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="name" className='font-bold text-lg'>Full Name</label>
                                <input type="text" className='w-1/2 rounded-md' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="email" className='font-bold text-lg'>Email Address</label>
                                <input type="text" className='w-1/2 rounded-md' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="Street" className='font-bold text-lg'>Street</label>
                                <input type="text" className='w-1/2 rounded-md' />
                            </div>

                            <div className='flex flex-row gap-2 justify-start'>
                                <div className='flex flex-col gap-1'>
                                    <label htmlFor="code" className='font-bold text-lg'>Postal Code</label>
                                    <input type="text" className='w-full rounded-md' />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label htmlFor="city" className='font-bold text-lg'>City</label>
                                    <input type="text" className='w-full rounded-md' />
                                </div>
                                
                            </div>
                        </div>
                   </form>
           
                
                    
                
              
                <div className='flex flex-row justify-end gap-2'>
                    <Button handleClick={closeFormModal}>Close</Button>
                    <Button>Checkout</Button>
                </div>              
            </div>
        </div>
    );
}

export default FormModel;