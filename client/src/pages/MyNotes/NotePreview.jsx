
import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function NotePreview( {note} ) {

    const [editColor, setEditColor] = useState('black')
    const nav = useNavigate();

    const editNoteButton = () => {
        nav(`/edit-note/${note}`)
    }


    return (
        <div className="w-[300px] h-[250px] rounded border-4 border-gray-300 bg-gray-300 flex flex-col shadow-md hover:scale-105 hover:shadow-lg hover:shadow-gray-500 duration-100 cursor-pointer"
            onClick={() => editNoteButton()}>
            {/* Title of Note */}
            <div className="w-full text-black ">
                <Typography variant="h3" className="font-body">{note.noteName}</Typography>
            </div>
            {/* Content of Note */}
            <div className="w-full text-black ">
                <Typography variant='paragraph'>{note.noteDescription}</Typography>
            </div>
            {/* Actions Bar */}
            <div className=" w-full mt-auto">
                <div className="ml-auto w-fit pr-3">
                    <FaEdit size={30} onMouseOver={() => setEditColor('white')} onMouseOut={() => setEditColor('black')} onClick={editNoteButton} className="hover:scale-110 duration-100 hover:to-white"/>
                </div>
            </div>
        </div>
    )
}