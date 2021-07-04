import { useState } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import LogoImg from "../../images/icons8-f-64.png";

import "./header.scss";
import "./header.css";

export function Header() {
  const [show, setshow] = useState(false);

  return (
    <div id="header">
      <header>
        <div className="container">
          <Link to="/app">
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
                  <Link to="/app/atendimento">Starter</Link>
                </li>
                <li>
                  <Link to="#">Bootcamp</Link>
                </li>
                <li>
                  <Link to="#">Comunidade</Link>
                </li>
                <li>
                  <Link to="#">Blog</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
