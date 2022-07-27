import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";

const Cart = ({ onClose }) => {
  const { meals } = useSelector((state) => state.cart);

  const cartItems = meals.map((meal) => <CartItem key={meal.id} {...meal} />);

  return (
    <Modal onClose={onClose}>
      <ul className="grid gap-4 max-h-[60vh] p-0 overflow-auto list-none">
        {cartItems}
      </ul>
      <div className="flex justify-between text-xl text-white">
        <h4 className="my-auto">
          Total Amount{" "}
          <span className="block pl-8 text-yellow-500 font-bold">$</span>
        </h4>
        <div className="my-auto">
          <button
            className="border-2 p-2 mx-2 rounded-3xl hover:bg-red-800 hover:border-red-800"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="border-2 border-red-700 p-2 mx-2 rounded-3xl bg-red-700 hover:bg-red-800">
            Order
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;