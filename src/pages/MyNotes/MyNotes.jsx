import React, { useEffect } from "react";
import { useGetNotes } from "../../hooks/useGetNotes";
import Note from "./NotePreview";

export default function MyNotes() {
  const { notes, loading } = useGetNotes();

  useEffect(() => {
    console.log("note was changed.");
  }, [notes]);

  const emptyNotes = () => {
    if (loading) {
      return <></>;
    }
    return (
      <div className="w-full h-full">
        <p className="text-center text-black bg-red-100">You have no notes! Try creating some.</p>
      </div>
    );
  };

  return (
    <div className="flex h-full w-full flex-col pt-10">
      <p className="mx-auto flex flex-row text-5xl">Your Notes</p>
      <div className="mt-5" />

      <div className="flex flex-column">
        {loading ? (
          <p className="mx-auto w-fit text-center">Loading...</p>
        ) : null}
        {notes !== null && notes.length > 0// More than 0 notes, display them.
          ? notes.map((note) => (
              <div className="mx-auto flex flex-row w-fit">
                <Note note={note} key={note.id} />
              </div>
            ))
          : emptyNotes()}
      </div>
    </div>
  );
}
