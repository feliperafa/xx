import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { FormLogin } from "../pages/login/FormLogin";
import { Atendimento } from "../pages/page/Atendimento";

import { Page404 } from "../pages/page/Page404";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FormLogin} />
          <Route path="/home" exact component={Home} />
          <Route path="/home/atendimento" component={Atendimento} />
          <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
