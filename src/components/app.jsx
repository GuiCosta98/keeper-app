import React from "react";
import Footer from "./footer";
import Header from "./header";
import Note from "./note";
import notes from "../notes";

function createNote(newNote) {
  return (
    <Note key={newNote.key} title={newNote.title} content={newNote.content} />
  );
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
