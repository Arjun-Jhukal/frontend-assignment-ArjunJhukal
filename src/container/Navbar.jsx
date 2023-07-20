import NavItem from "../components/NavItem";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__logo">
          <h1 className="lg__heading">
            Sasto <span>Dukan</span>
          </h1>
        </div>

        <ul className="navbar__items">
          <NavItem item={"Home"} />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
