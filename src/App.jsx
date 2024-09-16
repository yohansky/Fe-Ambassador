import React from "react";
import "./App.css";
import Users from "./pages/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
import { RedirectToUsers } from "./components/RedirectToUsers";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Links from "./pages/Links";
import Products from "./pages/products/Products";
import ProductForm from "./pages/products/ProductForm";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";

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
          <Route path={"/profile"} Component={Profile} />
          <Route path={`/users/:id/Links`} Component={Links} />
          <Route path={`/products`} Component={Products} />
          <Route path={`/products/create`} Component={ProductForm} />
          <Route path={`/products/:id/edit`} Component={ProductForm} />
          <Route path={`orders`} Component={Orders} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
