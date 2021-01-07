import React from "react";

function Note(props) {

  function deleteNote(e){
    e.preventDefault();
    props.delNote(props.index);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteNote} className="noteButton" >DELETE</button>
    </div>
  );
}

export default Note;
