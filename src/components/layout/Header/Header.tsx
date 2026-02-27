import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import s from "./Header.module.scss";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import TextHeader from "./components/TextHeader/TextHeader";
import { cartStore } from "@/stores/CartStore";

const Header = observer(() => {
  return (
    <header className={s.header}>
      <Link to="/" className={s.logo}>
        <img src="/svg/logo.svg" alt="Логотип" />
        <img src="/svg/logo_text.svg" alt="Lalasia" />
      </Link>

      <div className={s.desktopNav}>
        <TextHeader />
      </div>

      <div className={s.icon}>
        <Link to="/cart" className={s.cartLink}>
          <img src="/svg/bag.svg" alt="Корзина" />
          {cartStore.totalCount > 0 && (
            <span className={s.badge}>{cartStore.totalCount}</span>
          )}
        </Link>
        <img src="/svg/user.svg" alt="Профиль" />
      </div>

      <div className={s.burgerWrapper}>
        <BurgerMenu />
      </div>
    </header>
  );
});

export default Header;
