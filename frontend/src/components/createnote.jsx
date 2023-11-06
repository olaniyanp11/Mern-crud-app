// imports 
import React from 'react'
import { useState } from 'react'
import { redirect } from 'react-router-dom'
// import css
import axios from 'axios'
import '../assets/css/update.css'


export const Createnote = () => {
  // create the state with true
  const [formdata, setformdata] = useState({ title: "", body: "" })
  const UpdateCreateFormField = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value })
  }
  const CreateForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/notes", formdata)
      console.log(response)
      setformdata({ title: "", body: "" })
      alert("note created")
      return redirect("/")
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <section className="formCard">
      <form onSubmit={CreateForm}>
        <div>
      
          <div  >
            Title:
          </div>
          <input type="text" name='title' className="title" id="title" onChange={UpdateCreateFormField} value={formdata.title} /></div>
        <div>
          <p>
            Body:
          </p>
          <textarea name="body" id="txtarea" cols="30" rows="10" value={formdata.body}onChange={UpdateCreateFormField} ></textarea>
        </div>
        <button type="submit" className="addNote"> Create Note</button>
      </form>
      </section>
    </div>
  )
}
