import { Switch, Route } from "react-router-dom";
import { FormLogin } from "../pages/login/FormLogin";
// import { Page404 } from "../pages/page/Page404";

export function AuthRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={FormLogin} />
      {/* <Route path="*" exact component={Page404} /> */}
    </Switch>
  );
}
