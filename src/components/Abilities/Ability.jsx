import React from "react";

const Ability = ({ imgSrc, imgAlt, labelText }) => {
  return (
    <label className="bg-[rgba(74,144,226,0.1)] text-[--color-secondary] py-[20px] px-[20px] text-[14px] rounded-3xl flex align-center gap-2.5 transition-[--transition] cursor-pointer hover:bg-[rgba(74,144,226,0.2)] hover:translate-y-[-5px] hover:shadow-[0_5px_15px_rgba(107,255,208,0.2)] p-6 sm:text-base md:py-4 md:px-6">
      <img src={imgSrc} alt={imgAlt} width="24" height="24" />
      {labelText}
    </label>
  );
};

export default Ability;
