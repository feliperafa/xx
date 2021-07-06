import { FormEvent, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { FaUserAlt, FaUserPlus } from "react-icons/fa";
import ReactLoading from "react-loading";
import Modal from "react-modal";

import logoImg from "../../images/icon_f.svg";

import "./formLogin.scss";
import api from "../../service/Api";

const LoadProps = {
  colorProps: "#00d0ff",
  classProps: "button-loading",
  heightProps: 50,
  widthProps: 50,
};

export function FormLogin() {
  const [isModal, setIsModal] = useState(false)
  const typeProps = "bubbles";
  const { signInWow } = useAuth();

  const [loading, setLoading] = useState(false);

  const [show, setshow] = useState(true);
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [
    position,
    // setposition
  ] = useState({ latitude: 1, longitude: 1 });

  function signIn(event: FormEvent) {
    setLoading(true);
    event.preventDefault();
    setTimeout(function () {
      setLoading(false);
    }, 1500);

    setTimeout(function () {
      signInWow();
      history.push("/home");
    }, 1500);
    // api.post(`/`)
  }
  function closeModal(){
    setIsModal(false)
  }

  async function newUser(event: FormEvent) {
    event.preventDefault();
    setIsModal(true)
    const { latitude = 1, longitude = 1 } = position;

    const data = {
      name,
      email,
      password,
      longitude,
      latitude,
    };

    console.log(data, "to aqui Felipe");
    await api.post("users", data);

    alert("Cadastro Realizado com Sucesso!");

    setshow(true);
  }
  
  return (
    <div>
      {isModal && <Modal id="teste1" isOpen={isModal} closeTimeoutMS={150}> 
      <button onClick={closeModal}>Close</button> </Modal>}
      {show ? (
        <div id="page-login">
          <img src={logoImg} alt="logo" />
          <form onSubmit={signIn}>
            <span>
              Sign In <FaUserAlt />
            </span>
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Password" />
            <button type="submit">
              {/* Entrar */}
              {loading ? (
                <ReactLoading
                  type={typeProps}
                  className={LoadProps.classProps}
                  color={LoadProps.colorProps}
                  height={LoadProps.heightProps}
                  width={LoadProps.widthProps}
                />
              ) : (
                "Entrar"
              )}
            </button>
          </form>
          <div className="sing-out">
            Ainda não é cadastrado?
            <Link to="#" onClick={() => setshow(!show)}>
              inscreva-se
            </Link>
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
              <button type="button" onClick={newUser}>
                Entra
              </button>
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
