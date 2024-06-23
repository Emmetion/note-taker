import React, { useEffect } from "react";
import { useGetNotes } from "../../hooks/useGetNotes";
import Note from "./NotePreview";

export default function MyNotes() {
  const { notes, loading } = useGetNotes();

  useEffect(() => {
    console.log("note was changed.");
  }, [notes]);

  return (
    <div className="flex h-full w-full flex-col pt-10">
      <p className="mx-auto flex flex-row text-5xl">Your Notes</p>
      <div className="mt-5" />
        
      <div className="flex flex-row">
        {loading ? (
          <p className="mx-auto w-fit text-center">Loading...</p>
        ) : null}
        {notes !== null
          ? notes.map((note) => (
              <div className="mx-auto w-fit flex">
                <Note note={note} key={note.id}/>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
