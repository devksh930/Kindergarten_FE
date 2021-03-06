import React from "react";
import { Route, Switch } from "react-router-dom";

import NavButton from "./NavButton";
import RegisterForm from "../../../containers/RegisterPage/RegisterFormContainer";

const RegisterPage = () => {
  return (
    <Switch>
      <Route exact path="/register" component={NavButton} />
      <Route path="/register/user" component={RegisterForm} />
      <Route path="/register/teacher" component={RegisterForm} />
      <Route path="/register/director" component={RegisterForm} />
    </Switch>
  );
};

export default RegisterPage;
