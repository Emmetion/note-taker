import React, { useEffect } from "react";
import { useGetNotes } from "../../hooks/useGetNotes";
import Note from "./NotePreview";
import { useLocation } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

export default function MyNotes() {
  const { notes, loading, refreshNotes } = useGetNotes();
  const location = useLocation();

  const noteCreated =
    new URLSearchParams(location.search).get("noteCreated") === "true";

  console.log("noteCreated: ", noteCreated);
  useEffect(() => {
    console.log("note was changed.");
  }, [notes]);

  const emptyNotes = () => {
    if (loading) {
      return <></>;
    }
    return (
      <div className="h-full w-full">
        <p className="bg-red-100 text-center text-black">
          You have no notes! Try creating some.
        </p>
      </div>
    );
  };

  const deleteCallback = async () => {
    // Refresh notes on page.
    await refreshNotes();
    console.log("refetching notes.");
  };

  return (
    <div className="flex h-full w-full flex-col pt-10">
      <p className="mx-auto flex flex-row text-5xl">Your Notes</p>
      <div className="mt-5" />
      {
          noteCreated ? (
            <p className="mx-auto w-fit text-3xl text-center text-white border-4 bg-green-500 rounded-md border-green-500 px-2 mb-2">
              Note created successfully!
            </p>
          ) : null // Note created
        }

      <div className="flex-column flex">
        
        {loading ? (
          <p className="mx-auto w-fit text-center">Loading...</p>
        ) : null}
        {notes !== null && notes.length > 0 // More than 0 notes, display them.
          ? notes.map((note) => (
              <div className="mx-auto flex w-fit flex-row">
                <Note
                  note={note}
                  key={note.id}
                  deleteCallback={deleteCallback}
                />
              </div>
            ))
          : emptyNotes()}
      </div>
    </div>
  );
}
