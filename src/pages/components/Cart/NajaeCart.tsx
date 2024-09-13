import React from "react";

function NajaeCart() {
  return (
    <div className="max-w-xs  flex flex-col p-4  rounded-xl space-y-5 shadow-md ">
      <img src="/Rating.png" alt="" width={10} height={10} />
      <div>
        <span className="text-justify">
          Phasellus ultricies nulla a orci scelerisque, eget tincidunt magna
          volutpat...
        </span>
      </div>
      <div className="flex row space-x-5">
        <img src="/Avatar-gio.png" alt="" width={40} height={40} />
        <div className="flex flex-col">
          <span className="font-montserratB">NaJaemin</span>
          <span>Product Manager at Google</span>
        </div>
      </div>
    </div>
  );
}

export default NajaeCart;
