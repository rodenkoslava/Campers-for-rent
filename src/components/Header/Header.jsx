import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">CATALOG</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">FAVORITES</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
