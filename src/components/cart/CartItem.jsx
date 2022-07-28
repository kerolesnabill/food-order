import React from "react";
import { ReactComponent as BtnUp } from "../../assets/icons/chevron-up-solid.svg";
import { ReactComponent as BtnDown } from "../../assets/icons/chevron-down-solid.svg";
import { ReactComponent as BtnTrash } from "../../assets/icons/trash-can-solid.svg";
import { useDispatch } from "react-redux";
import { increase, decrease, remove } from "../../store/features/cartSlice";

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-neutral-600 text-white grid grid-cols-4 w-full h-28 rounded-lg xs:h-24">
      <img
        className="w-full h-full max-h-28 rounded-l-lg xs:max-h-24"
        src={img}
        alt=""
      />
      <div className="col-span-2 pl-4 pt-1">
        <h3 className="text-2xl font-bold  xs:text-lg">{title}</h3>
        <h4 className="text-xl text-yellow-500 font-bold py-1 xs:text-base">
          ${price}
        </h4>
        <BtnTrash
          className="w-6 h-6 cursor-pointer fill-red-600 hover:fill-red-800 transition-all xs:w-5 xs:h-5"
          onClick={() => dispatch(remove(id))}
        />
      </div>
      <div className="m-auto my-2">
        <button
          className="w-6 h-6 fill-white cursor-pointer hover:fill-slate-200 transition-all xs:w-4 xs:h-4"
          onClick={() => dispatch(increase(id))}
        >
          <BtnUp />
        </button>
        <span className="flex text-2xl pl-1 xs:text-lg">{amount}</span>

        <button
          className="flex w-6 h-6 fill-white cursor-pointer hover:fill-slate-200 transition-all xs:w-4 xs:h-4 disabled:fill-slate-400 disabled:cursor-not-allowed"
          onClick={() => dispatch(decrease(id))}
          disabled={amount === 1}
        >
          <BtnDown />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
