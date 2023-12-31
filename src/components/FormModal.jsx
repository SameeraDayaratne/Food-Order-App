import React, { useEffect } from 'react';
import Button from './Button';
import { CartContext } from "../store/cart-context";
import { useContext } from "react";
import {submitOrder} from '../http.js'




function FormModel(props) {

    

    const { closeFormModal , cartItems ,toggleSuccessModal } = useContext(CartContext);
    let total = cartItems.reduce((p,c)=>{ 
        return(p + parseFloat(c.totalPrice));
    } , 0);


    async function orderSubmission(orderData){
        const res = await submitOrder(orderData);
        closeFormModal();

        toggleSuccessModal();
    }

    function handleSubmit(event){
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());

        const orderData = {
            items : cartItems,
            customer : {
                'name': data.name,
                'email' :data.email,
                'street' : data.street,
                'postal-code' : data.code,
                'city' : data.city

            }
        }
        console.log(orderData);

        try {
            
            orderSubmission(orderData);

        } catch (error) {
            
        }
        
        
    }
    return (
        <div className='fixed inset-0  backdrop-blur-sm flex justify-center items-center text-gray-800'>
            <div className='bg-orange-100 w-1/2 flex flex-col p-6 gap-5 rounded-sm'>
                <div><h2 className='font-bold text-2xl'>Checkout</h2></div>
                <div><h2 className='font-medium text-xl'>Total Amount : ${total}</h2></div>
                
                   <form onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-3 pb-2'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="name" className='font-bold text-lg'>Full Name</label>
                                <input type="text" required name='name' className='w-1/2 rounded-md py-1' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="email" className='font-bold text-lg'>Email Address</label>
                                <input type="email" required name='email' className='w-1/2 rounded-md py-1' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="street" className='font-bold text-lg'>Street</label>
                                <input type="text" required name='street' className='w-1/2 rounded-md py-1' />
                            </div>

                            <div className='flex flex-row gap-2 justify-start'>
                                <div className='flex flex-col gap-1'>
                                    <label htmlFor="code" className='font-bold text-lg'>Postal Code</label>
                                    <input type="text" required name='code' className='w-full rounded-md py-1' />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label htmlFor="city" className='font-bold text-lg'>City</label>
                                    <input type="text" required name='city' className='w-full rounded-md py-1' />
                                </div>
                                
                            </div>
                        </div>
                        <div className='flex flex-row justify-end gap-2'>
                    <Button handleClick={closeFormModal} type='button'>Close</Button>
                    <Button type='submit'>Checkout</Button>
                </div> 
                   </form>
           
                
                    
                
              
                             
            </div>
        </div>
    );
}

export default FormModel;