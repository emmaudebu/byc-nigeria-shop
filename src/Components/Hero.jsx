import React from "react";
import Button from "../UtilityComponents/Button";
import BannerBlack from "../assets/Images/bannerblackshort.png";
import BannerGirl from "../assets/Images/bannerGirl.png";
import BannerGuy from "../assets/Images/bannguys.png";
import NewArrival1 from "../assets/Images/new arrival bG (1).png";
import NewArrival2 from "../assets/Images/new arrival bG (2).png";
import NewArrival3 from "../assets/Images/new arrival bG (3).png";

const Hero = () => {
  return (
    <>
      <section className=" md:mx-[210px] ">
        <div className=" text-center mt-5 md:mt-[96px] ">
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
        <div className=" flex flex-col md:flex-row md:items-baseline md:mt-[67px] gap-8 justify-center mt-10 items-center ">
          <section className=" bg-[#f1f1f1]  hover:scale-105 transition ease-in-out delay-150">
            <img src={BannerBlack} alt="" className=" h-full " />
          </section>
          <section className=" bg-[#f1f1f1] hover:scale-105 transition ease-in-out delay-150">
            {" "}
            <img src={BannerGirl} alt="" className=" h-full " />
          </section>
          <section className=" bg-[#f1f1f1]  hover:scale-105 transition ease-in-out delay-150">
            {" "}
            <img src={BannerGuy} alt="" className=" h-full" />
          </section>
        </div>
      </section>
      <section className=" my-5 md:my-20">
        <p className="text-center font-[700]  text-2xl md:text-[33px] my-[70px]">
          Checkout BYC New Arrivals
        </p>
        <section className=" flex flex-col md:flex-row justify-between gap-10 mx-[43px]">
          <section className="  bg-[#f1f1f1]">
            <img src={NewArrival1} alt="" />
            <div className="bg-white py-10">
              <p className=" font-[600] text-[26px]">Men Underwears</p>
              <p className=" font-[400] text-[17px]">
                Parturient Venenatis Etiam
              </p>
            </div>
          </section>
          <section className="  bg-[#f1f1f1]">
            <img src={NewArrival2} alt="" />
            <div className="bg-white py-10">
              <p className=" font-[600] text-[26px]">Women Underwears</p>
              <p className=" font-[400] text-[17px]">
                Parturient Venenatis Etiam
              </p>
            </div>
          </section>
          <section className="  bg-[#f1f1f1]">
            <img src={NewArrival3} alt="" />
            <div className="bg-white py-10">
              <p className=" font-[600] text-[26px]">Underwears</p>
              <p className=" font-[400] text-[17px]">
                Parturient Venenatis Etiam
              </p>
            </div>
          </section>
        </section>
      </section>
      <section className=" text-center mb-10">
        <Button
          text={"View All"}
          style={
            " hover:bg-black hover:text-white   md:w-[240px] h-[57px] pt-[16px] px-[38px] pb-[12px] text-[18px] font-[700] "
          }
        />
      </section>
    </>
  );
};

export default Hero;
