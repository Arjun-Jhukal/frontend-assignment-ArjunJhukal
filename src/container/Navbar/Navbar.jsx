import NavItem from "../../components/NavItem";
import navItems from "../../../data.json";
import { Link } from "react-router-dom";
import InputField from "../../components/InputField";

import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

import { FaShoppingCart } from "react-icons/fa";
const Navbar = ({ searchValue, handleSearchChange, handleFormSubmit, cartItem }) => {
  const [searchStatus, setSearchStatus] = useState(false);
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

  const handleSearchStatus = () => {
    setSearchStatus(!searchStatus);
  };
  const handleMobileMenuChange = () => {
    setMobileMenuStatus(!mobileMenuStatus);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__logo">
          <Link to={"/"} className="lg__heading">
            Online <span>Store</span>
          </Link>
        </div>

        <ul className={mobileMenuStatus ? "navbar__items active" : "navbar__items "}>
          <li className="d-lg-none">
            <button className="btn btn__close" onClick={handleMobileMenuChange}>
              <AiOutlineClose />
            </button>
          </li>
          {navItems.map((navItem, index) => (
            <NavItem item={navItem.item} link={navItem.link} key={index} />
          ))}
        </ul>
        <div className="navbar__right">
          <form className={searchStatus ? "search__bar active" : "search__bar"} onSubmit={(e) => handleFormSubmit(e)}>
            <InputField
              fieldType={"input"}
              inputType={"search"}
              placeholder={"Search By Name"}
              value={searchValue}
              name={"search"}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            <button type="submit" to={"/product"} onClick={handleSearchStatus}>
              <BsSearch size={20} />
            </button>
          </form>

          <button className="navbar__cart">
            <FaShoppingCart size={24} />
            <sup>{cartItem}</sup>
          </button>
        </div>

        <button className="burger d-lg-none" onClick={handleMobileMenuChange}>
          <RxHamburgerMenu size={32} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
