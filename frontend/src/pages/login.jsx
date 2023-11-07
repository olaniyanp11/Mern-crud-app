import React from 'react'
import '../assets/css/login.css'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = ({ sessionstore }) => {
    const [formValue, setFormValue] = useState({ email: "", password: "" });
    const navigate = useNavigate()


    async function processForm(e) {
        e.preventDefault({ email: "", password: "" });
        try {
            let [email, password] = e.target
            email = email.value
            password = password.value

            setFormValue({ email: "", password: "" })
            const response = await axios.post("http://localhost:3001/login/", { email: email, password: password })
            sessionstore.setLoggedIn(true);
            navigate('/')
            console.log(response.data.message)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section id="loginpage">
            <div>
                <div className="left updatedleft"></div>
                <form className="right" onSubmit={processForm}>
                    <h3>
                        Login Form
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
export default Login
