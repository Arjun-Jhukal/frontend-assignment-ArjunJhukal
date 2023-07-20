import { Link } from "react-router-dom";

const NavItem = ({ item, link }) => {
  return (
    <li>
      <Link to={link}>{item}</Link>
    </li>
  );
};

export default NavItem;
