import Note from "./Note"
import AddNote from "./AddNote"


const  NoteList = ({ notes, handleAddNote, handeldeleteNote, hanleChangeNote }) => {
    return (
        <div className="note-list">
            {notes.map((note) => <Note
                title={note.titletext}
                id={note.id}
                text={note.text}
                date={note.date}
                lastTimeAdite={note.lastTimeAdite}
                handeldeleteNote={handeldeleteNote}
                hanleChangeNote={hanleChangeNote}
            />)}
            <AddNote handleAddNote={handleAddNote} />
        </div>

    )
}
export default NoteList