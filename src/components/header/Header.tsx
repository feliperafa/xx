import { useState } from "react";
import cx from "classnames";
import { Link, useHistory } from "react-router-dom";
import LogoImg from "../../images/icons8-f-64.png";
import iconImg from "../../images/felipe.png";

import "./header.scss";
import "./header.css";

import { useAuth } from "../../contexts/AuthContext";

export function Header() {
  const [show, setshow] = useState(false);
  const { user, signOut } = useAuth();

  const history = useHistory();
  function sair() {
    signOut();
    history.push("/");
  }

  return (
    <div id="header">
      <header>
        <div className="container">
          <Link to="/home">
            <img src={LogoImg} alt="Logo" />
          </Link>
          <div className={cx("menu-section", { show: show ? "show" : "" })}>
            <div
              className={cx("menu-toggle", { show: show ? "show" : "" })}
              onClick={() => setshow(!show)}
            >
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/home/atendimento">Atendimento</Link>
                </li>
                <li>
                  <Link to="#">Comunidade</Link>
                </li>
                <li>
                  <Link to="#">Blog</Link>
                </li>
              </ul>
            </nav>
              <Link className="container-link" to="#" onClick={sair}>
                <img className="img-icone" src={iconImg} alt={user?.name} />
              </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
