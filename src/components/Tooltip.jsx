import React from "react";

const Tooltip = ({ title }) => {
  return (
    <span class="invisible group-hover:visible bg-gray-800 text-white text-sm absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-24  px-2 py-2 rounded-md z-10">
      {title}
    </span>
  );
};

export default Tooltip;
