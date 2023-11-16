import React from "react";
import Button from "../UtilityComponents/Button";

const Hero = () => {
  return (
    <section>
      <div className=" text-center mt-5 md:mt-[96px] md:mx-[210px]">
        <p className=" mb-3 text-lg  md:mb-10 md:text-2xl font-medium ">
          {" "}
          Your Body Deserves Comfort
        </p>
        <p className=" text-2xl font-black md:text-6xl">
          Get the best for yourself
        </p>
        <div className=" flex flex-col md:flex-row items-center md:gap-[30px]  gap-2 justify-center pt-5">
          <Button
            text={"Shop Now"}
            style={
              " hover:bg-black hover:text-white  md:w-[240px] h-[57px] pt-[16px] px-[38px] pb-[12px] text-[18px] font-[700] "
            }
          />
          <Button
            text={"Learn more"}
            style={
              " hover:bg-white hover:text-black bg-black text-white md:w-[240px] h-[57px] pt-[16px] px-[38px] pb-[12px] text-[18px] font-[700]"
            }
          />
        </div>
      </div>
      <div className=" flex flex-col md:flex-grow "></div>
    </section>
  );
};

export default Hero;
