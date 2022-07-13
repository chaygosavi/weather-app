import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const Inputs = () => {
  return (
    <div className="flex justify-center my-6">
      <div className="flex w-3/4 items-center justify-center space-x-4">
        <input
          placeholder="Search a city..."
          type="text"
          className="text-xl font-light p-2 w-full shadow-xl outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex w-1/4 items-center justify-center">
        <button name="metric" className="text-xl text-white font-light">
          &#8451;
        </button>
        <p className="text-white mx-2">|</p>
        <button name="imperial" className="text-xl text-white font-light">
          &#8457;
        </button>
      </div>
    </div>
  );
};

export default Inputs;
