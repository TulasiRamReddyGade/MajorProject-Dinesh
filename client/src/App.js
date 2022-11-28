import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Registration } from "./components/Registration/Registration";
import StartingScreen from "./components/StartingScreen/StartingScreen";
import SimpleLogin from "./components/SimpleLogin/SimpleLogin";
import SecureLogin from "./components/SecureLogin/SecureLogin";
import StepOne from "./components/SecureLogin/StepOne";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <StartingScreen />
      </Route>
      <Route path="/register" exact>
        <Registration />
      </Route>
      <Route path="/login-simple" exact>
        <SimpleLogin />
      </Route>
      <Route path="/login-secure" exact>
        <SecureLogin />
      </Route>
      <Route path="/login-secure/step-1/:username" exact>
        <StepOne />
      </Route>
    </div>
  );
}

export default App;
