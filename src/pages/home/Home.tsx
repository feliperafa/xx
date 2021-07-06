import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import "./index.scss"



export function Home() {
  const { user, signOut } = useAuth()
  const history = useHistory();

  function sair() {
    signOut();
    history.push("/");
  }
  return (
    <div id="page-home">
      <h1>Welcome to Page Home {user?.name}</h1>
      <button onClick={sair}>Sair</button>
    </div>
  );
}
