import React from 'react'
import '../assets/css/login.css'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// URL = "http://localhost:3001/notes"



const Signup = () => {
  const [formValue, setFormValue] = useState({ email: "", password: "" });
  const navigate = useNavigate()

  async function processForm(e) {
    e.preventDefault({ email: "", password: "" });
    try {
      let [email, password] = e.target
      email = email.value
      password = password.value
      console.log(email, password)
      setFormValue({ email: "", password: "" })
      await axios.post("http://localhost:3001/signup/", { email: email, password: password })
      console.log("user account created")
      return navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section id="loginpage">
      <div>
        <div className="left"></div>
        <form className="right" onSubmit={processForm}>
          <h3>
            Sign up form
          </h3>
          <p>
            <label htmlFor="email"> Email</label> <br />
            <input type="email" name="email" id="email" value={formValue.email} onChange={(e) => { setFormValue({ ...formValue, email: e.target.value }) }} />
          </p>
          <p>
            <label htmlFor="password" > password</label>
            <br />
            <input type="password" name="password" id='password' value={formValue.password} onChange={(e) => { setFormValue({ ...formValue, password: e.target.value }) }} />
          </p>
          <button type="submit" className="addNote">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Signup