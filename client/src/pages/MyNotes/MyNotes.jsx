import React, { useEffect } from "react"
import { useGetNotes } from "../../hooks/useGetNotes";
import Note from "./NotePreview";

export default function MyNotes() {

    const { notes, loading } = useGetNotes();

    useEffect(() => {
        console.log('note was changed.');
    }, [notes])

    return (
        <div className="w-full flex pt-10 flex-col">
            <p className="text-5xl mx-auto flex flex-row">Your Notes</p>
            <div className="mt-5"/>
            
            <div className="flex flex-col">
                { loading ? <p className="text-center mx-auto w-fit">Loading...</p> : null}
                { notes !== null ? notes.map((note) => <p className="text-center mx-auto w-fit">
                    <Note note={note}/>
                </p>) : null }
            </div>
        </div>
    )
}