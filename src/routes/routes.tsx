import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Home } from "../pages/home/Home";
import { FormLogin } from "../pages/login/FormLogin";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FormLogin} />
        <Header />
        <Route path="/app" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
