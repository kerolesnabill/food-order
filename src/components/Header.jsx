import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as CartIcon } from "../assets/icons/cart-shopping-solid.svg";
import { getCartTotal } from "../store/features/cartSlice";

const Header = ({ onShow }) => {
  const dispatch = useDispatch();
  const { meals, totalCount } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [meals, dispatch]);

  return (
    <header className="fixed z-30 flex justify-between items-center text-center w-full h-20 bg-red-800 text-white text-3xl font-bold p-8 md:pl-24 md:pr-24 lg:pl-48 lg:pr-48 xs:text-xl xs:p-4">
      <div>Food Order</div>
      <div
        className="flex text-xl bg-red-900 px-6 py-3 rounded-3xl xs:text-sm xs:px-3 xs:py-1.5"
        onClick={onShow}
      >
        <CartIcon className="fill-white w-6 h-6 my-auto" />
        <span className="px-3 my-auto">Your Cart</span>
        <span className="bg-red-700 py-1 px-4 rounded-2xl my-auto">
          {totalCount}
        </span>
      </div>
    </header>
  );
};

export default Header;
