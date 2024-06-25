import BoltDescription from "./BoltDescription";
import { useState } from "react";
function BoldCard({ header, id,  image, details = [] }) {
  return (
    <div className="flex justify-between gap-20 p-10 w-full">
      <div className="overflow-hidden rounded w-[50%]">
        <img className="overay" src={image} alt={`images${id}`} />
      </div>
      <div className="w-[50%]">

      <h2 className="font-bold text-2xl mb-8">{header}</h2>
      {details.map((detail) => (
        <BoltDescription key={detail.numbering} {...detail} />
      ))}
      </div>
    </div>
  );
}
export default BoldCard