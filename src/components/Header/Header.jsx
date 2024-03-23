import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo"></div>
      <img src="path/to/logo.png" alt="Logo" />
      <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/catalog">CATALOG</NavLink>
        <NavLink to="/favorites">FAVORITES</NavLink>
      </nav>
    </header>
  );
};

export default Header;
