import React from 'react';

function Button({handleClick, children}) {
    return (
        <>
            <button onClick={handleClick} className='p-5 py-2 bg-yellow-500 text-center text-gray-900 rounded-md font-semibold'>{children}</button>
        </>
    );
}

export default Button;