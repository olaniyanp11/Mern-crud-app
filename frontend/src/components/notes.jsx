// imports
import { useEffect } from "react";
import { Updatenote } from "./updatenote";
import axios from "axios";
import { Link } from "react-router-dom";
import '../assets/css/notes.css'


async function Deletenote(noteId) {
  const res = await axios.delete(`http://localhost:3001/notes/${noteId}`)
  return (res)
}
export default function Notes({ store }) {

  // a function to toggle updatecheck
  function ToggleUpdateCheck(newvalue) {
    store.updatecheck = newvalue
  }
  useEffect(() => { store.fetchNotes(); }, [store]);

  return (
    <div className="npm">
      {/* show notes after notes has been fetched */}
      <h1>Notes :</h1>
      {store.loading ? (
        <p>Loading...</p>
      ) : (
        store.notes.map((note) => (
          <div key={note._id} id="note">
            <h3>{note.title}</h3>
            <dl>
              <dd>{note.body}</dd>
            </dl>
            <div id="btncontainer">
              <button type="submit" className="update" onClick={() => {
                store.updatecheck = true;
                store.getnote = { note };

              }}>Update</button>
              {/* button to delete note */}
              <button type="submit" className="delete" onClick={async () => {
                // delete note by id
                await Deletenote(note._id);
                // get old id
                const id = note._id;
                // create a new note that has filtered the deleted one
                const newNote = store.notes.filter((note) => note._id !== id);
                // set the new note state
                store.notes = newNote
              }

              }>Delete</button>
            </div>
          </div>
        ))
      )}
      {/* check if the update button has been clicked and display a prop if true */}
      {
        store.updatecheck ? < Updatenote note={store.getnote} change={ToggleUpdateCheck} /> : <div></div>
      }


      <Link to="/notes" className="addNote"> Createnote</Link>
    </div>
  );
}
