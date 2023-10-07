import s from "./app-header.module.scss";
import logo from "../../assets/icons/logo.svg";
import { Outlet, useNavigate } from "react-router-dom";

export const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={s.headerContainer}>
        <div className={s.logoSection}>
          <img src={logo} className={s.logo} onClick={() => navigate("/")} />
          <div>Products</div>
        </div>
        <div>Author/Romans Kovalenoks</div>
      </div>
      <Outlet />
    </>
  );
};
