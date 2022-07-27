import Bunner from "./components/Bunner";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/cart/Cart";
import { useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShow={showCartHandler} />
      <Bunner />
      <Meals />
    </>
  );
}

export default App;
