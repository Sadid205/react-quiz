import Account from "./Account";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
export default function Nav() {
  return (
    // eslint-disable-next-line no-undef
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
