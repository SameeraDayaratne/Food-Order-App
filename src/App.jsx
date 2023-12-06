
import CartModel from "./components/CartModel";
import Header from "./components/Header";
import Main from "./components/Main";
import { useContext } from "react";
import { CartContext } from "./store/cart-context";
import FormModel from "./components/FormModal";
import SuccessModel from "./components/SuccessModal";
function App() {

  const { isCartModelOpen,isFormModalOpen , isSuccessModalOpen} = useContext(CartContext);

  return (
    <>
      <Header />
      <Main />
      {isCartModelOpen && <CartModel />}
      {isFormModalOpen && <FormModel />}
      {isSuccessModalOpen && <SuccessModel />}
    </>
  );
}

export default App;
