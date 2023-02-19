
import Account from './Account';
// eslint-disable-next-line no-unused-vars
import classes from "../styles/Nav.module.css";
import logo from '../assets/images/logo-bg.png';
export default function Nav(){
    return(
        // eslint-disable-next-line no-undef
        <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className= {classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
      
    
    );
}