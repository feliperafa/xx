// import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import "./index.scss";

export function Home() {
  const { user } = useAuth();
  // const history = useHistory();
  console.log(user);
  return (
    <div id="page-home">
      <h1>Welcome to Page Home {user?.name}</h1>
    </div>
  );
}
