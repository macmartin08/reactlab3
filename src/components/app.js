import React from "react";
import MainNav from "./partials/main_nav";
import Route from "./router"

export default function App() {
  return (
    <div className="App">
      <Route />
      <MainNav />
    </div>
  );
}