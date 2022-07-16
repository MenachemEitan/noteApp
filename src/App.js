import NoteList from "./components/NoteList"
import { nanoid } from 'nanoid'
import { useState, useEffect } from "react"
import localForage from "localforage"



const App = ()=>{
    // console.log(localforage.getItem(no));
    const [notes, setNots] = useState([]);

    const addNote=(text, titletext)=>{
        const date = new Date()
        const newNote = {
            titletext : titletext,
            text: text,
            date : date.toLocaleString(),
            id:nanoid()  
        }
        const newNotes = [...notes, newNote]
        setNots(newNotes)
    }
    const changeNote = (id, titleText, noteText)=>{
        const newNote =[]
         notes.forEach((note)=>{
            if(note.id!==id){
                newNote.push(note)
            }else{
                note.titletext = titleText
                note.text = noteText
                note.lastTimeAdite = new Date().toLocaleString()

                newNote.push(note)
            }
        })
         setNots(newNote)

    }
    const deleteNote = (id) =>{
      const newNotes=  notes.filter((note)=>note.id !==id);
      setNots(newNotes)
    }  

    localForage.setItem('notes', notes)
    useEffect(()=>{
        localForage.getItem('notes').then((res)=>{if(res){setNots(res)} })
    },[])

    
    return(<div className="container">
        <NoteList 
        notes = {notes} 
        hanleChangeNote ={changeNote}
        handleAddNote={addNote}
        handeldeleteNote = {deleteNote}
        ></NoteList>
    </div>)
}



export default App