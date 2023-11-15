import { useState } from "react";
import logo from "../assets/Images/BYC LOGO JPG FILE 1.png";
const NavBar = () => {
  const [Menu, setMenu] = useState(false);

  function OpenMenu(params) {
    setMenu(!Menu);
    console.log(Menu);
  }

  return (
    <nav className=" px-[43px] flex flex-row items-center justify-between py-[23px] relative">
      <ul className="  flex-row item-center justify-center gap-[30px] md:flex hidden">
        <li>Shop Products</li>
        <li>Blog</li>
        <li>FAQ</li>
      </ul>
      <img src={logo} alt="" className="w-[73px] h-[44px]" />
      <ul className=" flex-row item-center justify-center gap-[30px] md:flex hidden">
        <li>About Us</li>
        <li>Contact</li>
        <li>
          <i class="bx bx-search"></i>
        </li>
        <li>
          <i class="bx bx-user"></i>
        </li>
        <li>
          <i class="bx bx-heart"></i>
        </li>
        <li>
          <i class="bx bx-cart-alt"></i>
        </li>
      </ul>
      <i
        className=" bx bx-menu text-[30px]  md:hidden block cursor-pointer "
        onClick={OpenMenu}
      ></i>
      <ul
        className={` md:hidden ${
          Menu
            ? " top-1 left-0 w-[60vw] h-52 bg-black absolute p-5 mt-20 text-white ml-2 z-10"
            : "hidden"
        }`}
      >
        <li className=" text-[20px]">Shop Products</li>
        <li className=" text-[20px]">Blog</li>
        <li className=" text-[20px]">FAQ</li>
        <li className=" text-[20px]">About Us</li>
        <li className=" text-[20px]">Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
