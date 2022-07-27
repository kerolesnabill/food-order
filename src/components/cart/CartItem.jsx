import React from "react";
import { ReactComponent as BtnUp } from "../../assets/icons/chevron-up-solid.svg";
import { ReactComponent as BtnDown } from "../../assets/icons/chevron-down-solid.svg";
import { ReactComponent as BtnTrash } from "../../assets/icons/trash-can-solid.svg";

const cartItem = ({ id, title, price, img, amount }) => {
  return (
    <div className="bg-neutral-600 text-white grid grid-cols-4 w-full h-28 rounded-lg">
      <img className="w-full h-full max-h-28 rounded-l-lg" src={img} alt="" />
      <div className="col-span-2 pl-4 pt-1">
        <h3 className="text-3xl font-bold md:text-2xl lg:text-xl">{title}</h3>
        <h4 className="text-2xl text-yellow-500 font-bold py-1">${price}</h4>
        <BtnTrash className="w-6 h-6 cursor-pointer fill-red-600 hover:fill-red-800 transition-all" />
      </div>
      <div className="m-auto">
        <BtnUp className="w-6 h-6 fill-white cursor-pointer hover:fill-slate-200 transition-all" />
        <span className=" text-2xl pl-1">{amount}</span>
        <BtnDown className="w-6 h-6 fill-white cursor-pointer hover:fill-slate-200 transition-all" />
      </div>
    </div>
  );
};

export default cartItem;
