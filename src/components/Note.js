import { useState } from "react"
import { MdDeleteForever } from 'react-icons/md'
import Modal from "./Modal";

const Note = ({ id, text, date, title,lastTimeAdite, handeldeleteNote, hanleChangeNote }) => {
    const [openModal, setOpenModal] = useState(false);
    const showModal = () => {
        setOpenModal(!openModal)
    }
    const showAditeTime =(lastTimeAdite)=>{
        if (lastTimeAdite){
            return(
                <small>Last adite in {lastTimeAdite}</small>
            )
        }
    }

    return (
        <div className="note" >
            <h1 onClick={() => showModal()}>{title} </h1>
            <span onClick={() => showModal()}> {text}</span>
            <div className="note-footer">
                <small>Created in {date}</small>
                {showAditeTime(lastTimeAdite)}
                <MdDeleteForever
                    onClick={() => handeldeleteNote(id)}
                    className='delete-icon'
                    size='1.3em' ></MdDeleteForever>
            </div>
            <Modal open={openModal} onClose={showModal} title={title} text={text} date={date} hanleChangeNote={hanleChangeNote} idNote={id}></Modal>
        </div>
    )
}



export default Note