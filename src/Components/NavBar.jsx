import logo from "../assets/Images/BYC LOGO JPG FILE 1.png";
const NavBar = () => {
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
      <i className=" bx bx-menu text-[30px]  md:hidden block"></i>

      <ul>
        <li>Shop Products</li>
        <li>Blog</li>
        <li>FAQ</li>
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
    </nav>
  );
};

export default NavBar;
