import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../src/auth";

// Rotas públicas
import Index from "./pages/Index";
import Login from "./pages/Login";
import Home from "./pages/Home";

export default function Routes() {
  const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => <Component {...props} />} />
  );

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
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
        
        <PrivateRoute exact path="/home" component={Home} />

        <Route path="*" component={() => <h1>Página não encontrada</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
