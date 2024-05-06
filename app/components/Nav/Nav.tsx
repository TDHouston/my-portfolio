import React from "react";

const Nav = () => {
  return (
    <div className="flex items-center justify-between px-[96px] py-[12px] relative">
      <div className="relative w-fit [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[24px] tracking-[0] leading-[normal]">
        JULIAN HOUSTON
      </div>
      <div className="relative w-[561.6px] h-[40px]">
        <div className="absolute w-[168px] h-[40px] top-0 left-[394px] rounded-[5px] border border-solid border-black">
          <div className="absolute w-[135px] h-[25px] top-[7px] left-[16px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[18px] text-center tracking-[0] leading-[24.3px]">
            Contact
          </div>
        </div>
        <div className="absolute w-[366px] h-[22px] top-[9px] left-0">
          <div className="absolute w-[58px] h-[22px] top-0 left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[18px] tracking-[0] leading-[normal]">
            Home
          </div>
          <div className="w-[58px] left-[96px] absolute h-[22px] top-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[18px] tracking-[0] leading-[normal]">
            About
          </div>
          <div className="w-[70px] left-[186px] absolute h-[22px] top-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[18px] tracking-[0] leading-[normal]">
            Resume
          </div>
          <div className="w-[70px] left-[288px] absolute h-[22px] top-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[18px] tracking-[0] leading-[normal]">
            Projects
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
