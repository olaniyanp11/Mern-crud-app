// imports css
import "./app.css";
// import { useState, useEffect } from "react";
import { Createnote } from "./components/createnote";

import Notes from "./components/notes";
import axios from "axios";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import noteStore from "./stores/noteStores";
import Signup from './pages/signup'
import { Login } from "./pages/login";
// const url = "http://localhost:3001/";

axios.defaults.withCredentials = true

function App() {
  const store = noteStore();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes store={store} />} />
          <Route path="/notes" element={<Createnote />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={ <Login/>} />
          {/* <Route path="/update" element={<Updatenote />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
