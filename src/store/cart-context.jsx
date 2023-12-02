import { createContext, useState } from "react";

export const CartContext = createContext({
    count : 0,
    handleCartCount : () => {}
});

export function CartContextProvider({children}){

    const [cart, setCart] = useState({
        count : 0,  
    });


    function handleCartCount(){
        console.log('in cart');
        setCart(prevCart => {
            let newCount = prevCart.count + 1;
            return({
                ...prevCart,
                count : newCount
            }
                
            );
        });
    }

    let cartCtx = {
        count : cart.count,
        handleCartCount: handleCartCount 
    }

    return(
        <CartContext.Provider value={cartCtx} >
            {children}
        </CartContext.Provider>
    );


}