import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import InputArea from "./InputArea";
import Note from "./Note";

function App() {

  const [notes, addNotes] = useState([]);
  
  function appendNotes(note) {
    addNotes((prevNotes) => {
      return [...prevNotes, note];
    });
    console.log(notes);
  }

  function deleteNote(noteIdx) {
    addNotes((prevNotes) => {
      return prevNotes.filter((val, idx) => (idx !== noteIdx));
    })
  }

  return (
    <div>
      <Header />
      <InputArea addNote={appendNotes}/>
      {notes.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} id={index} deleteNote={deleteNote}/>
      ))}
      <Footer />
    </div>
  );
}

export default App;
