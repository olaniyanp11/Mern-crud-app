// imports css
import "./app.css";
// import { useState, useEffect } from "react";
import { Createnote } from "./components/createnote";

import Notes from "./components/notes";
import axios from "axios";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import noteStore from "./stores/noteStores";
import Signup from "./pages/signup";
import { Login } from "./pages/login";
import { Logout } from "./pages/Logout";
import { usersessionstore } from "./stores/usersessionstore";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
// const url = "http://localhost:3001/";

axios.defaults.withCredentials = true;

function App() {
  const store = noteStore();
  const sessionstore = usersessionstore();

  useEffect(() => {
    
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {sessionstore.isloggedIn ? (
            <Route path="/" element={<Notes store={store} />} />
          ) : null}

          <Route path="/notes" element={<Createnote />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={<Login sessionstore={sessionstore} />}
          />
          <Route
            path="/logout"
            element={<Logout sessionstore={sessionstore} />}
          />
        </Routes>
        {sessionstore.isloggedIn ? null : <Navigate to="/login" />}
      </BrowserRouter>
    </div>
  );
}

export default App;
