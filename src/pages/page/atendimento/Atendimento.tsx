import { useAuth } from "../../../contexts/AuthContext";

import "./index.scss"

export function Atendimento() {
  const { user } = useAuth()
  return (
    <div id="page-atendimento">
      <h1>Welcome to Page Atendimento {user?.name}</h1>
    </div>
  );
}
