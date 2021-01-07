import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setNotes] = useState([]);

  function addNewNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes,newNote];
    })
  };

  function deleteNote(id){
    setNotes(prevNotes => prevNotes.filter((note,index) => index !== id ) )
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNewNote}/>
      {notes.map((note,index) => { return <Note key={index} index={index} title={note.title} content={note.content} delNote={deleteNote} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
