import React from "react";

const Footer = () => {
  return (
    <div className="flex pt-[84px] pr-[200px] pb-[84px] pl-[200px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#f2f2f2] relative overflow-hidden z-[47]">
      <div className="w-[201px] h-[101px] shrink-0 text-[0px] relative z-[48]">
        <span className="block h-[29px] font-['Roboto'] text-[24px] font-bold leading-[28.125px] text-[#000] relative text-left uppercase whitespace-nowrap z-[49] mt-0 mr-0 mb-0 ml-0">
          Julian Houston
        </span>
        <span className="block h-[20px] font-['Roboto'] text-[14px] font-normal leading-[19.688px] text-[#000] relative text-left whitespace-nowrap z-50 mt-[19px] mr-0 mb-0 ml-0">
          © 2010 — 2020
        </span>
        <span className="block h-[20px] font-['Roboto'] text-[14px] font-normal leading-[19.688px] text-[#000] relative text-left whitespace-nowrap z-[51] mt-[13px] mr-0 mb-0 ml-0">
          Privacy — Terms
        </span>
      </div>
      <div className="flex w-[72px] h-[172px] flex-col justify-between items-center shrink-0 flex-nowrap relative overflow-hidden z-[52]">
        <span className="flex w-[72px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Roboto'] text-[14px] font-bold leading-[19.688px] text-[#000] relative text-right whitespace-nowrap z-[53]">
          Links
        </span>
        <span className="flex w-[72px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Roboto'] text-[14px] font-normal leading-[19.688px] text-[#000] relative text-right whitespace-nowrap z-[54]">
          Home
        </span>
        <span className="flex w-[72px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Roboto'] text-[14px] font-normal leading-[19.688px] text-[#000] relative text-right whitespace-nowrap z-[55]">
          About
        </span>
        <span className="flex w-[72px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Roboto'] text-[14px] font-normal leading-[19.688px] text-[#000] relative text-right whitespace-nowrap z-[56]">
          Resume
        </span>
        <span className="flex w-[72px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Roboto'] text-[14px] font-normal leading-[19.688px] text-[#000] relative text-right whitespace-nowrap z-[57]">
          Projects
        </span>
      </div>
    </div>
  );
};

export default Footer;
