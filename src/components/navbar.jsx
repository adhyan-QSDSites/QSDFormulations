import { NavLink } from "react-router-dom";
import "./navbar.css";
export default function Navbar(){
  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <NavLink to="/" className="logo">
          <span className="logo-main">QSD </span>
          <span className="logo-dot"> Formulations</span>
        </NavLink>
        {/* Navigation */}
        <nav className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            About
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Catalog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Contact
          </NavLink>
        </nav>
        {/* CTA */}
        <NavLink to="/contact" className="nav-btn">
          <span>Get Quote</span>
          <i>↗</i>
        </NavLink>
      </div>
    </header>
  );
}