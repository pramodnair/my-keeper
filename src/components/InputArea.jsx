import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import { Fab, Zoom } from "@material-ui/core";

function InputArea(props) {
  const emptyNote = {
    title: "",
    content: "",
  };
  const [note, addNote] = useState(emptyNote);

  const [hidden, setHiddenProp] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    addNote((prevNote) => ({ ...prevNote, [name]: value }));
  }

  function handleSubmit(event) {
    props.addNote(note);
    addNote(emptyNote);
    event.preventDefault();
  }

  function unhideTextArea() {
    setHiddenProp(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          onClick={unhideTextArea}
          value={note.title}
        />
        {hidden && 
        <textarea
          type="text"
          name="content"
          placeholder="Content"
          onChange={handleChange}
          value={note.content}
        />}
        <Zoom in={hidden}>
        <Fab type="submit"><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default InputArea;
