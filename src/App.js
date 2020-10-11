import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
    </React.Fragment>
  );
}
