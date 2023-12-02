
import CartModel from "./components/CartModel";
import Header from "./components/Header";
import Main from "./components/Main";
import { useContext } from "react";
import { CartContext } from "./store/cart-context";
function App() {

  const { isCartModelOpen } = useContext(CartContext);

  return (
    <>
      <Header />
      <Main />
      {isCartModelOpen && <CartModel />}
    </>
  );
}

export default App;
