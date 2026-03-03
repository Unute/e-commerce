import { NavLink } from "react-router-dom";

import s from "./TextHeader.module.scss";

const navItems = [
  { label: "Product", to: "/" },
  { label: "Categories", to: "/categories" },
  { label: "About us", to: "/about-us" },
];

const TextHeader = () => {
  return (
    <nav>
      <ul className={s.navList}>
        {navItems.map((item) =>
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) => `${s.navItem} ${isActive ? s.active : ""}`}
          >
            {item.label}
          </NavLink>
        )}
      </ul>
    </nav>
  );
};

export default TextHeader;
