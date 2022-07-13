import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    units !== selectedUnit && setUnits(selectedUnit);
  };

  return (
    <div className="flex justify-center my-6">
      <div className="flex w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search a city..."
          type="text"
          className="text-xl font-light p-2 w-full shadow-xl outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          onClick={() => city && setQuery({ q: city })}
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          onClick={() => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                  lat,
                  lon,
                });
              });
            }
          }}
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex w-1/4 items-center justify-center">
        <button
          onClick={handleUnitsChange}
          name="metric"
          className="text-xl text-white font-light hover:scale-125 transition ease-out"
        >
          °C
        </button>
        <p className="text-white mx-2">|</p>
        <button
          onClick={handleUnitsChange}
          name="imperial"
          className="text-xl text-white font-light hover:scale-125 transition ease-out"
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
