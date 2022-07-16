import {FaRegSave} from 'react-icons/fa'
import { useState } from 'react'
export const EditModal = ({ startadite, title, text, hanleChangeNote, idNote, letsAdit }) => {
   
    // const savehange =()=>{
    //     console.log("text", , "title", )
    // }
    

    const showSaveAdite = () => {
        return (
            <FaRegSave
                onClick= {()=>{hanleChangeNote(idNote, document.getElementById('title').value ,document.getElementById('note').value); letsAdit()} }
                className='saveNote'
                size='1.3em' ></FaRegSave>
        )
    }
    if (!startadite) {
        return null
    }
    return (
        <div className="aditNoteTextarea">
            <div>
                <label for="title">title</label>
                <textarea id="title" type="text"  defaultValue={title}></textarea>
            </div>
            <div>
                <label for="note">note</label>
                <textarea id="note" type="text" defaultValue={text}></textarea>
            </div>
            {showSaveAdite()}
        </div>
    )
}