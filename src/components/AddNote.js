import { useState } from "react"

const AddNote = ({handleAddNote })=>{
    const [noteText,setNoteText ] = useState('')
    const [titleText, setTitleText] = useState('')
    const handlNoteeChange = (event)=>{
        setNoteText(event.target.value)
        // if(event.target.value.length>0){
        //     setNoteText(event.target.value)
        // }
    }
    const handleTitleChange = (event)=>{
        setTitleText(event.target.value)
    }

    const handleSaveClick = () =>{
            if(noteText.trim().length>0){
                handleAddNote(noteText, titleText)
                setNoteText('')
                setTitleText('')
            }
        }
        
    

    return(
        <div className="note new">
            <textarea
                cols={10}
                rows={1}
                placeholder = "type your title"
                value = {titleText} 
                onChange ={handleTitleChange}   
                ></textarea>
            <textarea
                rows={8} 
                cols={10} 
                placeholder="type to add a note...." 
                value={noteText}
                onChange ={handlNoteeChange}
            ></textarea>
            <div className="note-footer">
                <button 
                className="save"
                onClick={handleSaveClick}
                >Add</button>

            </div>
        </div>
    )
}
export default AddNote
