import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/catalog">CATALOG</NavLink>
        <NavLink to="/favorites">FAVORITES</NavLink>
      </nav>
    </header>
  );
};

export default Header;
