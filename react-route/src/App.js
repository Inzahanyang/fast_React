import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";
import queryString from "query-string";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import "./App.css";

const activeStyle = {
  color: "green"
};

const isLogin = false;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <NavLink exact to="/" activeStyle={activeStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/profile" activeStyle={activeStyle}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile/1" activeStyle={activeStyle}>
              Profile/1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeStyle={activeStyle}
              isActive={(match, location) => {
                console.log(match, location);
                if (location.pathname !== "/about") return false;
                const query = queryString.parse(location.search);
                return query.name === undefined;
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about?name=mark"
              activeStyle={activeStyle}
              isActive={(match, location) => {
                console.log(match, location);
                if (location.pathname !== "/about") return false;
                const query = queryString.parse(location.search);
                return query.name !== undefined;
              }}
            >
              About?name=mark
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeStyle={activeStyle}>
              Login
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route
            path="/login"
            render={() => {
              if (isLogin) {
                return <Redirect to="/" />;
              }
              return <Login />;
            }}
          />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
