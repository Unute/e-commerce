import { Link, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import s from "./../../Header.module.scss";
import { useStore } from "@/stores/context";

const CartHeader = observer(() => {
  const { cartStore } = useStore();
  const { pathname } = useLocation();
  return (
    <Link to="/cart" className={`${s.cartLink} ${pathname === "/cart" ? s.active : ""}`}>
      <img src="/svg/bag.svg" alt="Корзина" />
      {cartStore.totalCount > 0 && (
        <span className={s.badge}>{cartStore.totalCount}</span>
      )}
    </Link>
  )
})

export default CartHeader