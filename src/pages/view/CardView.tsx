import React from "react";
import ChelseaCart from "../components/Cart/ChelseaCart";
import NickCart from "../components/Cart/NickCart";
import LanaCart from "../components/Cart/LanaCart";
import GiorgioCart from "../components/Cart/GiorgioCart";
import NajaeCart from "../components/Cart/NajaeCart";
import JaneCart from "../components/Cart/JaneCart";
import KatyCart from "../components/Cart/KatyCart";

function CardView() {
  return (
    <div className="flex flex-col space-y-10 justify-center items-center my-10 w-full">
      <h1 className="text-4xl font-montserratB text-black">
        What our users are saying
      </h1>
      <div className="flex space-x-10 mt-10">
        <ChelseaCart />
        <NickCart />
        <LanaCart />
        <GiorgioCart />
        <NajaeCart />
        <JaneCart />
        <KatyCart />
      </div>
    </div>
  );
}

export default CardView;
