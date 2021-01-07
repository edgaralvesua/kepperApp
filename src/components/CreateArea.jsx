import React,{useState} from "react";

function CreateArea(props) {
  const [note,setNote]=useState({title:"",content:""});

  function noteHandler(event){
    const {name,value} = event.target;
    setNote(prevNote =>{
      return {...prevNote,
      [name]: value }});
    console.log(note);
  }

  function sendNote(e){
    e.preventDefault();
    props.addNote(note);
    setNote({title:"",content:""});
  }

  return (
    <div>
      <form>
        <input name="title" onChange={noteHandler} placeholder="Title" value={note.title}/>
        <textarea name="content" onChange={noteHandler} placeholder="Take a note..." rows="3" value={note.content}/>
        <button onClick={sendNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
