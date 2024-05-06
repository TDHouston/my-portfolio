import React from "react";

const Footer = () => {
  return (
    <div className="main-container flex w-[1728px] pt-[84px] pr-[200px] pb-[84px] pl-[200px] justify-between items-center flex-nowrap bg-[#f2f2f2] relative overflow-hidden mx-auto my-0">
      <span className="h-[29px] shrink-0 font-['Roboto'] text-[24px] font-bold leading-[28.125px] text-[#000] relative text-left uppercase whitespace-nowrap z-[1]">
        Julian Houston
      </span>
      <span className="h-[20px] shrink-0 font-['Roboto'] text-[14px] font-normal leading-[19.688px] text-[#000] relative text-left whitespace-nowrap z-[2]">
        © 2010 — 2020
      </span>
      <span className="h-[20px] shrink-0 font-['Roboto'] text-[14px] font-normal leading-[19.688px] text-[#000] relative text-left whitespace-nowrap z-[3]">
        Privacy — Terms
      </span>
      <div className="flex w-[72px] h-[172px] flex-col justify-between items-center shrink-0 flex-nowrap relative overflow-hidden z-[4]">
        <span className="flex w-[72px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Roboto'] text-[14px] font-bold leading-[19.688px] text-[#000] relative text-right whitespace-nowrap z-[5]">
          Links
        </span>
        <span className="flex w-[72px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Roboto'] text-[14px] font-normal leading-[19.688px] text-[#000] relative text-right whitespace-nowrap z-[6]">
          Home
        </span>
        <span className="flex w-[72px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Roboto'] text-[14px] font-normal leading-[19.688px] text-[#000] relative text-right whitespace-nowrap z-[7]">
          About
        </span>
        <span className="flex w-[72px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Roboto'] text-[14px] font-normal leading-[19.688px] text-[#000] relative text-right whitespace-nowrap z-[8]">
          Resume
        </span>
        <span className="flex w-[72px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Roboto'] text-[14px] font-normal leading-[19.688px] text-[#000] relative text-right whitespace-nowrap z-[9]">
          Projects
        </span>
      </div>
    </div>
  );
};

export default Footer;
