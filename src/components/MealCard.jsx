import React from 'react';
import BEEF from '../assets/beef-tacos.jpg'

function MealCard({meal}) {
    return (
        <div className='flex flex-col gap-5 items-center w-full bg-mealCard rounded-xl overflow-hidden shadow-2xl '>
                <img className='h-60 w-full' src={`http://localhost:3000/${meal.image}`} alt="" />
                <div className='flex flex-col gap-3 items-center px-5 pb-5'>
                    <h2 className='font-bold text-xl'>{meal.name}</h2>
                    <h2 className='bg-mealPrice px-8 py-1 rounded-md text-yellow-400'>{meal.price}</h2>
                    <p className='text-center'>{meal.description}</p>
                   
                    <button className='p-5 py-2 bg-yellow-500 text-center text-gray-900 rounded-md font-semibold'>Add To Cart</button>
                </div>
                
            </div>
    );
}

export default MealCard;