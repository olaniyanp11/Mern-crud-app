require("dotenv").config();

// imports
const Note = require("./models/note");
const Usercontroller = require("./controllers/UserController");
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDb = require("./config/connect_db");
const requireAuth = require("./middleware/requireAuth");
const CookieParser = require("cookie-parser");
// connect to database
connectToDb();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(CookieParser());

// route to create new user
app.post("/signup", Usercontroller.signup);
app.post("/login", Usercontroller.login);
app.get("/logout", Usercontroller.logout);
app.get("/check-auth", requireAuth, Usercontroller.checkAuth);
app.get("/", requireAuth, async (req, res) => {
  // get all the notes
  const notes = await Note.find();
  // return the json format for gotten notes
  res.json({ notes: notes });
});
app.post("/notes", requireAuth, async (req, res) => {
  // get data from request body
  const title = req.body.title;
  const body = req.body.body;
  // create note
  const note = await Note.create({ title: title, body: body });
  // send response
  res.json({ note: note });
});
app.get("/notes/:id", requireAuth, async (req, res) => {
  // get note id
  const noteid = req.params.id;
  // search for not with its id
  const note = await Note.findById(noteid);
  // return searched note
  res.json({ note: note });
});
app.delete("/notes/:id", requireAuth, async (req, res) => {
  // get note id
  const noteid = req.params.id;
  // search for note and delete searched note
  try {
    await Note.findByIdAndDelete(noteid);
    console.log("deleted note");
  } catch (err) {
    console.log(`error deleting note : ${err}`);
  }
  // return a responce indecating deletion

  res.json("deleted");
});

app.put("/notes/:id", requireAuth, async (req, res) => {
  // get the id of the note
  const noteId = req.params.id;

  // get data to be updated
  const { title, body } = req.body;
  // update the note
  try {
    await Note.findByIdAndUpdate(noteId, { title: title, body: body });
    console.log("updated note");
  } catch (err) {
    console.log(err);
  }
  // get the updated note
  const updatedNote = await Note.findById(noteId);
  // send the updated note through the responce
  res.json({ updatedNote: updatedNote });
});

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
