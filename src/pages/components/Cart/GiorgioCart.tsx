import React from "react";

function GiorgioCart() {
  return (
    <div className="max-w-xs  flex flex-col p-3  rounded-xl space-y-5 shadow-md ">
      <img src="/Rating.png" alt="" width={100} height={100} />
      <div>
        <span className="text-justify">
          Porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus
          neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed
          magna nunc.
        </span>
      </div>
      <div className="flex row space-x-5">
        <img src="/Avatar-gio.png" alt="" width={60} height={60} />
        <div className="flex flex-col">
          <span className="font-montserratB">Giorgio Moroder</span>
          <span>CTO at Apple</span>
        </div>
      </div>
    </div>
  );
}

export default GiorgioCart;
