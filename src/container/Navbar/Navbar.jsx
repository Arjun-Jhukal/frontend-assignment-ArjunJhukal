import NavItem from "../../components/NavItem";
import navItems from "../../../data.json";
import { Link } from "react-router-dom";
import InputField from "../../components/InputField";

import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";

import { FaShoppingCart } from "react-icons/fa";
import MiniCart from "../../components/MiniCart";

const Navbar = ({ searchValue, handleSearchChange, handleFormSubmit, cartItem }) => {
  const [searchStatus, setSearchStatus] = useState(false);
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

  const handleSearchStatus = () => {
    setSearchStatus(!searchStatus);
  };
  const handleMobileMenuChange = () => {
    setMobileMenuStatus(!mobileMenuStatus);
  };

  const [miniCartStatus, setMiniCartStatus] = useState(false);

  const handleCartStatus = () => {
    setMiniCartStatus(!miniCartStatus);
  };

  const [fixedNavbar, setFixedNavbar] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setFixedNavbar(true);
    } else {
      setFixedNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  console.log(fixedNavbar);

  return (
    <nav className={fixedNavbar ? "navbar fixed" : "navbar"}>
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

          <button className="navbar__cart" onClick={handleCartStatus}>
            <FaShoppingCart size={24} />
            {cartItem.length > 0 ? <sup>{cartItem.length}</sup> : ""}
          </button>
        </div>

        <button className="burger d-lg-none" onClick={handleMobileMenuChange}>
          <RxHamburgerMenu size={32} />
        </button>
      </div>

      <MiniCart miniCartStatus={miniCartStatus} onClick={handleCartStatus} />
    </nav>
  );
};

export default Navbar;
