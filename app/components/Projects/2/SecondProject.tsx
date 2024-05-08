import React from "react";

const SecondProject = () => {
  return (
    <div className="flex pt-[48px] pr-[96px] pb-[48px] pl-[96px] justify-between items-center self-stretch shrink-0 flex-nowrap relative overflow-hidden z-[31]">
      <div className="flex w-[1536px] justify-between items-center shrink-0 flex-nowrap bg-[#fff] relative overflow-hidden z-[32]">
        <div className="w-[756px] h-[720px] shrink-0 bg-[#000] relative z-[33]" />
        <div className="flex w-[756px] h-[268.493px] pt-[8px] pr-0 pb-[8px] pl-0 flex-col justify-between items-center shrink-0 flex-nowrap relative z-[34]">
          <span className="flex w-[389px] h-[73.973px] justify-start items-center shrink-0 basis-auto font-['Roboto'] text-[64px] font-normal leading-[73.973px] text-[#000] relative text-left whitespace-nowrap z-[35]">
            Project Name
          </span>
          <span className="flex w-[756px] h-[178.521px] justify-center items-center shrink-0 font-['Roboto'] text-[28px] font-normal leading-[32.813px] text-[#000] relative text-center z-[36]">
            Project description goes here
          </span>
        </div>
        <button className="w-[144px] h-[49px] shrink-0 bg-[#f4f4f4] rounded-tl-none rounded-tr-none rounded-br-none rounded-bl-[8px] border-none absolute top-[0.5px] right-0 overflow-hidden z-[37] pointer">
          <span className="flex w-[32px] h-[18px] justify-center items-center font-['Roboto'] text-[15px] font-normal leading-[17.578px] text-[#000] absolute top-[calc(50%-9.5px)] left-[calc(50%-16px)] text-center whitespace-nowrap z-[38]">
            Java
          </span>
        </button>
      </div>
    </div>
  );
};

export default SecondProject;
