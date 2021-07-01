import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FormLogin } from "../pages/FormLogin";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FormLogin} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
