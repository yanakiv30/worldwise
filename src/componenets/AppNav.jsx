import { NavLink } from "react-router-dom";
import style from "./AppNav.module.css";
export default function AppNav() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <NavLink to="countries">Countries</NavLink>
      </ul>
    </nav>
  );
}
