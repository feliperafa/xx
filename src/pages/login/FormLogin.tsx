import { FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

import logoImg from "../../images/icon_f.svg";


import "./formLogin.scss";

export function FormLogin() {
  const history = useHistory();

  function singIn(event: FormEvent) {
    event.preventDefault();

    history.push("/app");
  }

  return (
    <div id="page-login">
      <img src={logoImg} alt="logo" />
      <form onSubmit={singIn}>
        <span>
          Sign In <FaUserAlt />
        </span>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
