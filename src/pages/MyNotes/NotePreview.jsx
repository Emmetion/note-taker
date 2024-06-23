import { Chip, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function NotePreview({ note }) {
  const [editColor, setEditColor] = useState("black");

  const nav = useNavigate();

  const editNoteButton = () => {
    nav(`/edit-note/${note.id}`);
  };

  return (
    <div
      className="flex h-[250px] w-[300px] cursor-pointer flex-col rounded-lg border-[1px] border-black shadow-lg shadow-md duration-100 hover:scale-105 hover:shadow-lg hover:shadow-gray-500"
      onClick={() => editNoteButton()}
    >
      {/* Title of Note */}
      <div className="w-full text-black text-center">
        <Typography variant="h3" className="font-body">
          {note.noteName}
        </Typography>
      </div>
      {/* Type of Note */}
      <div className="ml-4 mr-auto flex flex-row pl-4 text-black">
        <Typography variant="h5" className="my-auto mr-2">
          Tags:{" "}
        </Typography>
        {/* Add tags here with Chips. */}
        <Chip value={note.noteType} className="my-auto"></Chip>
      </div>

      {/* Content of Note */}
      <div className="w-full text-black">
        <Typography variant="paragraph">{note.noteDescription}</Typography>
      </div>
      {/* Actions Bar */}
      <div className="mt-auto w-full">
        <div className="ml-4 ml-auto w-fit pr-3">
          <FaEdit
            size={30}
            onMouseOver={() => setEditColor("white")}
            onMouseOut={() => setEditColor("black")}
            onClick={editNoteButton}
            className="duration-100 hover:scale-110 hover:to-white"
          />
        </div>
      </div>
    </div>
  );
}
