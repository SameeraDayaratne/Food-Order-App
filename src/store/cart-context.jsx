import { createContext, useState } from "react";

export const CartContext = createContext({
    count : 0,
    handleCartCount : () => {},
    isCartModelOpen : false,
    toggleCartModal:() => {},
    cartItems : []
});

export function CartContextProvider({children}){

    const [cart, setCart] = useState({
        count : 0, 
        cartItems : [] 
    });

    const [isCartModelOpen , setIsCartModelOpen] = useState(false);

    function toggleCartModal(){
        setIsCartModelOpen(prev => !prev);
    }


    function handleCartCount(meal){
        
        setCart(prevCart => {
            let newCount = prevCart.count + 1;
            return({
                ...prevCart,
                count : newCount,
                cartItems : [...prevCart.cartItems , { id : meal.id , name: meal.name , price : meal.price , mealCount : 1}]
            }
                
            );
        });
    }

    let cartCtx = {
        count : cart.count,
        handleCartCount: handleCartCount,
        isCartModelOpen:isCartModelOpen,
        toggleCartModal:toggleCartModal,
        cartItems : cart.cartItems
    }

    console.log(cart.cartItems);

    return(
        <CartContext.Provider value={cartCtx} >
            {children}
        </CartContext.Provider>
    );


}