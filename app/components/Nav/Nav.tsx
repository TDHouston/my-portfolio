import React from "react";

const Nav = () => {
  return (
    <div className="flex pt-[12px] pr-[96px] pb-[12px] pl-[96px] justify-between items-center self-stretch shrink-0 flex-nowrap relative">
      <span className="h-[29px] shrink-0 basis-auto font-['Roboto'] text-[24px] font-bold leading-[28.125px] text-[#000] relative text-left uppercase whitespace-nowrap z-[1]">
        Julian Houston
      </span>
      <div className="w-[561.6px] h-[40px] shrink-0 relative z-[2]">
        <button className="w-[29.91%] h-full text-[0px] border-none absolute top-0 left-[70.09%] z-[3] pointer">
          <span className="flex w-[135px] h-[25px] justify-center items-center font-['Roboto'] text-[18px] font-normal leading-[24.258px] text-[#000] relative text-center whitespace-nowrap z-[5] mt-[8px] mr-0 mb-0 ml-[17px]">
            Contact
          </span>
          <div className="w-full h-full rounded-[5px] border-solid border border-[#000] absolute top-0 left-0 z-[4]" />
        </button>
        <div className="w-[357.6px] h-[22px] absolute top-[9px] left-0 z-[6]">
          <span className="flex h-full justify-start items-center font-['Roboto'] text-[18px] font-normal leading-[21.094px] text-[#000] absolute top-0 left-0 text-left whitespace-nowrap z-[7]">
            Home
          </span>
          <span className="flex h-full justify-start items-center font-['Roboto'] text-[18px] font-normal leading-[21.094px] text-[#000] absolute top-0 left-[26.85%] text-left whitespace-nowrap z-[8]">
            About
          </span>
          <span className="flex h-full justify-start items-center font-['Roboto'] text-[18px] font-normal leading-[21.094px] text-[#000] absolute top-0 left-[51.9%] text-left whitespace-nowrap z-[9]">
            Resume
          </span>
          <span className="flex h-full justify-start items-center font-['Roboto'] text-[18px] font-normal leading-[21.094px] text-[#000] absolute top-0 left-[80.43%] text-left whitespace-nowrap z-10">
            Projects
          </span>
        </div>
      </div>
    </div>
  );
};
export default Nav;
