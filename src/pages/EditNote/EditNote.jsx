import { Typography } from "@material-tailwind/react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useGetNotes } from "../../hooks/useGetNotes";
import NotePreview from "../MyNotes/NotePreview";

export default function EditNote({ }) {

    const { id } = useParams();
    const nav = useNavigate();

    const { getSingleNote } = useGetNotes();
    const [noteData, setNoteData] = useState(null);

    useEffect(() => {
        if (!id) {
            nav('/my-notes');
        }
        const note = getSingleNote(id).then(note => {
            setNoteData(note);
        });
        console.log(note);
    }, [id, nav])

    return (
        // Edit Font Page.
        <div className="w-full h-full">
            <Typography variant='h1' className="font-body">Editing Note</Typography>
            { id ? <Typography variant='h2' className="font-body">Note ID: {id}</Typography> : null }
            {
                noteData ? <NotePreview note={noteData} /> : null
            }
            
        </div>
    )
}