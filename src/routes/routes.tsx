import {  Switch, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Atendimento } from "../pages/page/atendimento/Atendimento";

export function Routes() {
  return (
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/home/atendimento" component={Atendimento} />
    </Switch>
  );
}
