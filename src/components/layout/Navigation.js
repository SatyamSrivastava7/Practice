import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>FASTEST</div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/menu">MENU</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
        </ul>
      </nav>
      <form action="/" method="get">
        <input
          type="text"
          id="header-search"
          placeholder="Search Products"
          name="s"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default Navigation;
