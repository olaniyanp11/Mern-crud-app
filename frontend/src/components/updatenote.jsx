import React from 'react'
import '../assets/css/update.css'
import { useState, useEffect } from 'react';
import axios from 'axios'


let url = "http://localhost:3001/notes"
let Cancel = require('../assets/images/circle.png')


const Newupdatenote = async (e) => {
  e.preventDefault();

  let [idfield, titlefield, bodyfield] = [e.target.id, e.target.title, e.target.body];
  const id = idfield.value
  const title = titlefield.value
  const body = bodyfield.value
  console.log(`${id},${title},${body}`);

  await axios.put(`${url}/${id}`, { title: title, body: body })
  alert("your note has been updated")
}

export const Updatenote = ({ note, change }) => {
  const { _id, title, body } = note.note

  const [editedTitle, setEditedTitle] = useState(title);
  const [editedBody, setEditedBody] = useState(body);
  const [editedid, setEditedid] = useState(_id);

  console.log(title)
  console.log(body)
  useEffect(() => {
    setEditedTitle(note.note.title);
    setEditedBody(note.note.body)
    setEditedid(note.note.id)
  }, [note])

  return (
    <section className="formCard">
      <img className='image' src={Cancel} onClick={() => change(false)} alt="cancel" />
      <form onSubmit={Newupdatenote}>
        <div>
          <input type='hidden' name='id' value={editedid} setEditedid={((e) => setEditedid(e.target.value))} />
          <div  >
            Title:
          </div>
          <input type="text" name='title' className="title" id="title" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} /></div>
        <div>
          <p>
            Body:
          </p>
          <textarea name="body" id="txtarea" cols="30" rows="10" value={editedBody} onChange={(e) => setEditedBody(e.target.value)}></textarea>
        </div>
        <button type="submit" className="addNote"> Update Note</button>
      </form>
    </section>
  )
}
