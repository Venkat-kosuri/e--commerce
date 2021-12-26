import React from "react";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Cart" component={Cart} />
          <Route path="/Signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
