import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import s from "./../../Header.module.scss";
import { useStore } from "@/stores/context";

const CartHeader = observer(() => {
  const { cartStore } = useStore();
  return (
    <NavLink
      to="/cart"
      className={({ isActive }) => `${s.cartLink} ${isActive ? s.active : ""}`}
    >
      <img src="/svg/bag.svg" alt="Корзина" />
      {cartStore.totalCount > 0 && (
        <span className={s.badge}>{cartStore.totalCount}</span>
      )}
    </NavLink>
  )
})

export default CartHeader