import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import s from "./../../Header.module.scss";
import { useStore } from "@/stores/context";
const Profile = observer(() => {
  const { authStore } = useStore();
  return (
    <NavLink
      to="/register"
      className={({ isActive }) => `${s.profileLink} ${isActive ? s.active : ""}`}
    >
      {
        authStore.user?.username ? (
          <span className={s.username}>{authStore.user.username}</span>
        ) : (
          <img src="/svg/user.svg" alt="Профиль" />
        )
      }
    </NavLink>
  )
})

export default Profile