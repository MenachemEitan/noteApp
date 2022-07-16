import { FaWindowClose, FaRegEdit } from 'react-icons/fa'
import { useState } from 'react'
import { EditModal } from './EditModal'
const Modal = ({ open, onClose, title, text, date, hanleChangeNote, idNote }) => {
    const [startadite, setAdite] = useState(false)
    const letsAdit = () => {
        setAdite(!startadite)
    }
    if (!open) {
        return null
    }

return (
    <div className="modal-bg">
        <div className="modal">
            <h2>{title}</h2>
            <h3>{text}</h3>
            <div className="modal-footer">
                <h4 className='modal-date'>{date}</h4>
                <div>
                    <FaWindowClose
                        className='closeMOdal'
                        onClick={onClose}
                        size='1.3em' ></FaWindowClose>
                    <FaRegEdit
                        className='editNote'
                        onClick={letsAdit}
                        size='1.3em' ></FaRegEdit>
                        {/* {showSaveAdite()} */}
                </div>
            </div>
            <EditModal startadite={startadite} title={title} text={text} hanleChangeNote={hanleChangeNote} idNote={idNote} letsAdit={letsAdit} ></EditModal>
        </div>
    </div>
)
}

export default Modal