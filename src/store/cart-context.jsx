import { createContext, useState } from "react";

export const CartContext = createContext({
    count : 0,
    handleCartCount : () => {},
    isCartModelOpen : false,
    toggleCartModal:() => {},
    openFormModal:() => {},
    closeFormModal:() => {},
    cartItems : [],
    handleCartItemCount:() => {},
     toggleSuccessModal: () => {},
     isSuccessModalOpen:false
});

export function CartContextProvider({children}){

    const [cart, setCart] = useState({
        count : 0, 
        cartItems : [] 
    });

    const [isCartModelOpen , setIsCartModelOpen] = useState(false);

    const [isFormModalOpen , setIsFormModalOpen] = useState(false);

    const [isSuccessModalOpen,setIsSuccessModalOpen] = useState(false);

    function toggleSuccessModal(){
        setIsSuccessModalOpen(prev => !prev);
    }

    function toggleCartModal(){
        setIsCartModelOpen(prev => !prev);
    }

    function openFormModal(){
        setIsCartModelOpen(false);
        setIsFormModalOpen(true);
    }

    function closeFormModal(){
        setIsFormModalOpen(false);
    }

    function handleCartItemCount(action , id){
        if(action === 'increase')
        {
            setCart(prevCart=>{

                prevCart.cartItems.forEach(cartItem => {
                    if(cartItem.id == id)
                    {
                        let newMealCount = cartItem.mealCount + 1;
                        let newPrice = cartItem.ItemPrice * newMealCount;

                        cartItem.mealCount = newMealCount;
                        cartItem.totalPrice = newPrice;
                    }
                })

                return(
                    {
                       ...prevCart
                    }
                );
            });
        }
        else if(action === 'decrease')
        {
            setCart(prevCart=>{

                prevCart.cartItems.forEach(cartItem => {
                    if(cartItem.id == id)
                    {
                        let newMealCount = cartItem.mealCount - 1;

                        if(newMealCount <= 0)
                        {
                            let newCount = prevCart.count - 1;

                            prevCart.count = newCount;

                            let index  = prevCart.cartItems.findIndex(item=>{
                                return item.id == id;
                            });

                            prevCart.cartItems.splice(index,1);
                        }
                        else{
                            let newPrice = cartItem.ItemPrice * newMealCount;

                            cartItem.mealCount = newMealCount;
                            cartItem.totalPrice = newPrice;
                        }

                        
                    }
                })

                return(
                    {
                       ...prevCart
                    }
                );
            });
        }
    }


    function handleCartCount(meal){
        
        setCart(prevCart => {

            let index = prevCart.cartItems.findIndex(item => item.id == meal.id);

            if(index == -1)
            {
                let newCount = prevCart.count + 1;
                return({
                    ...prevCart,
                    count : newCount,
                    cartItems : [...prevCart.cartItems , { id : meal.id , name: meal.name , ItemPrice : meal.price , totalPrice:meal.price  ,mealCount : 1 }]
                }
                    
                );
            }
            else{
                return prevCart;
            }

            
        });
    }

    let cartCtx = {
        count : cart.count,
        handleCartCount: handleCartCount,
        isCartModelOpen:isCartModelOpen,
        isFormModalOpen:isFormModalOpen,
        toggleCartModal:toggleCartModal,
        cartItems : cart.cartItems,
        handleCartItemCount:handleCartItemCount,
        openFormModal:openFormModal,
        closeFormModal:closeFormModal,
        toggleSuccessModal:toggleSuccessModal,
        isSuccessModalOpen:isSuccessModalOpen
    }



    return(
        <CartContext.Provider value={cartCtx} >
            {children}
        </CartContext.Provider>
    );


}