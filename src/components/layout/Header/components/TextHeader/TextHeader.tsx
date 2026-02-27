import { useState } from "react";
import { Link } from "react-router-dom";

import s from "./TextHeader.module.scss";

const navItems = [
  { label: "Product", to: "/" },
  { label: "Categories", to: "categories" },
  { label: "About us", to: "about-us" },
];

const TextHeader = () => {
  const [active, setActive] = useState(0);

  return (
    <nav>
      <ul className={s.navList}>
        {navItems.map((item, idx) =>
          <Link
            key={item.label}
            to={item.to}
            className={`${s.navItem} ${active === idx ? s.active : ""}`}
            onClick={() => setActive(idx)}
          >
            {item.label}
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default TextHeader;
