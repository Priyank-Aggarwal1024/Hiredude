import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import Logo2 from "../assets/logo2.png";
function Navbar() {
  return (
    <nav className="hiredude-navbar">
      <div className="hiredude-nav-left">
        <NavLink to="/" className="hiredude-nav-logo">
          <img
            src={Logo}
            className="hiredude-va-mid hiredude-logo-large"
            alt="Logo"
          />
          <img
            src={Logo2}
            className="hiredude-va-mid hiredude-logo-small"
            alt="Logo"
          />
        </NavLink>
      </div>
      <div className="hiredude-nav-btn hiredude-nav-btn-large">
        <NavLink className="hiredude-nav-login-btn">Whatsapp now </NavLink>
        <NavLink className="hiredude-nav-signup-btn">
          Hire Talent for FREE
        </NavLink>
      </div>
      <div className="hiredude-nav-btn hiredude-nav-btn-small">
        <NavLink className="hiredude-nav-signup-btn">Register Now</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
