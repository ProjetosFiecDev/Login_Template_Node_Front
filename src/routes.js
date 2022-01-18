import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  isAuthenticatedAdmin,
  isAuthenticatedCoordenador,
  isAuthenticatedRh,
  isAuthenticatedSecretaria,
  isAuthenticatedDev,
  isAuthenticatedDiretor,
} from "../src/auth";

// Rotas públicas
import Index from "./pages/Index";
import Login from "./pages/Login";

export default function Routes() {
  const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => <Component {...props} />} />
  );

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticatedCoordenador() ||
        isAuthenticatedAdmin() ||
        isAuthenticatedRh() ||
        isAuthenticatedDev() ||
        isAuthenticatedSecretaria() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" component={Index} />
        <PublicRoute exact path="/login" component={Login} />

        <Route path="*" component={() => <h1>Página não encontrada</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
