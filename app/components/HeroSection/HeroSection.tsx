import React from "react";

const HeroSection = () => {
  return (
    <div className="flex pt-[48px] pr-[96px] pb-[48px] pl-[96px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[11]">
      <div className="flex w-[756px] flex-col gap-[16px] items-start shrink-0 flex-nowrap relative z-[12]">
        <span className="flex w-[756px] h-[300px] justify-start items-center self-stretch shrink-0 font-['Roboto'] text-[64px] font-normal leading-[75px] text-[#000] relative text-left z-[13]">
          My name is Julian Houston and I am Software Engineer living in
          Brooklyn, NY.
        </span>
        <span className="flex w-[756px] h-[132px] justify-start items-center self-stretch shrink-0 font-['Roboto'] text-[28px] font-normal leading-[32.813px] text-[#000] relative text-left z-[14]">
          I am a Full-Stack Developer specializing in immersive web and XR
          experiences. I'm dedicated to transforming digital concepts into
          engaging realities, with a portfolio that spans robust web
          architectures and dynamic 3D animations.
        </span>
      </div>
      <div className="flex w-[626px] flex-col gap-[16px] items-start shrink-0 flex-nowrap relative z-[15]">
        <div className="w-[626px] h-[626px] shrink-0 bg-[#000] rounded-[8px] relative z-[16]" />
        <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap opacity-80 relative z-[17]">
          <span className="flex w-[390px] h-[30px] justify-center items-center shrink-0 basis-auto font-['Roboto'] text-[26px] font-black leading-[30px] text-[#000] relative text-center uppercase whitespace-nowrap z-[18]">
            Companies I’ve Worked with
          </span>
          <div className="flex w-[390px] gap-[15px] items-center shrink-0 flex-nowrap relative z-[19]">
            <div className="w-[120px] h-[42.5px] shrink-0 bg-[#000] relative z-20" />
            <div className="w-[120px] h-[42.5px] shrink-0 bg-[#000] relative z-[21]" />
            <div className="w-[120px] h-[42.5px] shrink-0 bg-[#000] relative z-[22]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
