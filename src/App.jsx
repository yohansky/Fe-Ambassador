import React from "react";
import "./App.css";
import Users from "./pages/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
import { RedirectToUsers } from "./components/RedirectToUsers";

axios.defaults.baseURL = "http://localhost:8080/api";
// axios.defaults.baseURL = process.env.LOCALHOST_API;
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} exact Component={RedirectToUsers} />
          <Route path={"/users"} exact Component={Users} />
          <Route path={"/login"} Component={Login} />
          <Route path={"/register"} Component={Register} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
