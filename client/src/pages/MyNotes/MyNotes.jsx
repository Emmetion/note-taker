import React, { useEffect } from "react";
import { useGetNotes } from "../../hooks/useGetNotes";
import Note from "./NotePreview";

export default function MyNotes() {
  const { notes, loading } = useGetNotes();

  useEffect(() => {
    console.log("note was changed.");
  }, [notes]);

  return (
    <div className="flex w-full flex-col pt-10">
      <p className="mx-auto flex flex-row text-5xl">Your Notes</p>
      <div className="mt-5" />
        
      <div className="flex flex-row">
        {loading ? (
          <p className="mx-auto w-fit text-center">Loading...</p>
        ) : null}
        {notes !== null
          ? notes.map((note) => (
              <p className="mx-auto w-fit text-center">
                <Note note={note} />
              </p>
            ))
          : null}
      </div>
    </div>
  );
}
