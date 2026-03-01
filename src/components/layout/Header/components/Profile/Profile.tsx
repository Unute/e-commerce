import { Link, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import s from "./../../Header.module.scss";
import { useStore } from "@/stores/context";
const Profile = observer(() => {
  const { authStore } = useStore();
  const { pathname } = useLocation();
  return (
    <Link to="/register" className={`${s.profileLink} ${pathname === "/register" ? s.active : ""}`}>
      {
        authStore.user?.username ? (
          <span className={s.username}>{authStore.user.username}</span>
        ) : (
          <img src="/svg/user.svg" alt="Профиль" />
        )
      }
    </Link>
  )
})

export default Profile