import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaUserAlt, FaUserPlus } from "react-icons/fa";

import logoImg from "../../images/icon_f.svg";

import "./formLogin.scss";
import api from "../../service/Api";

export function FormLogin() {
  const [show, setshow] = useState(true);
  const history = useHistory();
  /** Estado do Formulario ao iniciar */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [position, setposition] = useState({latitude:1, longitude:1});

  function singIn(event: FormEvent) {
    event.preventDefault();

    history.push("/app");
  }
  async function newUser(event: FormEvent) {
    event.preventDefault();
    const {latitude = 1, longitude = 1} = position
    // const data = new FormData();

    const data = {
      name,
      email,
      password,
      longitude,
      latitude
    }

    // data.append('name', name);
    // data.append('email', email);
    // data.append('password', password);
    // data.append('latitude', String(latitude));
    // data.append('longitude', String(longitude));

    console.log(data, 'to aqui Felipe')
    await api.post("users", data);

    alert("Cadastro Realizado com Sucesso!");

    setshow(true);
  }

  return (
    <div>
      {show ? (
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
          <div className="sing-out">
            Ainda não é cadastrado?
            <Link to="javascript;;" onClick={() => setshow(!show)}>inscreva-se</Link>
          </div>
        </div>
      ) : (
        <div id="page-login">
          <img src={logoImg} alt="logo" />
          <form onSubmit={newUser}>
            <span>
              Sign Out <FaUserPlus />
            </span>

            <input
              id="nome"
              type="text"
              placeholder="Nome"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />

            {/* <input
              id="latitude"
              type="text"
              placeholder="latitude"
              onChange={(event) => setPosition(event.target.value)}
              value={latitude}
            /> */}

            {/* <input
              id="longitude"
              type="text"
              placeholder="longitude"
              onChange={(event) => setLongitude(event.target.value)}
              value={longitude}
            /> */}

            <input
              id="email"
              type="email"
              placeholder="E-mail"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />

            <input
              id="password"
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            <div className="container-button">
              <button type="button" onClick={newUser}>Cadastrar</button>
              <button type="button" onClick={() => setshow(!show)}>
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
