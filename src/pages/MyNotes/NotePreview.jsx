import { Chip, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDeleteNote } from "../../hooks/useDeleteNote";

export default function NotePreview({ note }) {
  const [editColor, setEditColor] = useState("black");
  const { deleteNote } = useDeleteNote();
  const nav = useNavigate();

  const editNoteButton = () => {
    nav(`/edit-note/${note.id}`);
  };

  const trashButton = async () => {
    await deleteNote(note.id);
  };

  return (
    <div className="flex h-[250px] w-[300px] cursor-pointer flex-col rounded-lg border-[1px] border-black shadow-md duration-100 hover:scale-105 hover:shadow-lg hover:shadow-gray-500">
      {/* Title of Note */}
      <div className="w-full text-center text-black">
        <Typography variant="h3" className="font-body">
          {note.name}
        </Typography>
      </div>
      {/* Type of Note */}
      <div className="ml-4 mr-auto flex flex-row pl-4 text-black">
        <Typography variant="h5" className="my-auto mr-2">
          Tags:{" "}
        </Typography>
        {/* Add tags here with Chips. */}
        <Chip value={note.type} className="my-auto"></Chip>
      </div>

      {/* Content of Note */}
      <div className="w-full pl-4 pr-4 text-black">
        <Typography variant="paragraph">{note.description}</Typography>
      </div>
      {/* Actions Bar */}
      <div className="mt-auto w-full">
        <div className="mb-3 ml-4 ml-auto mr-3 flex w-fit flex-row gap-2">
          <FaEdit
            size={30}
            onMouseOver={() => setEditColor("white")}
            onMouseOut={() => setEditColor("black")}
            onClick={editNoteButton}
            className="box-border rounded-md border-[7px] border-white duration-100 hover:border-green-500 hover:bg-green-500 hover:text-white"
          />
          <FaTrashAlt
            size={30}
            onMouseOver={() => setEditColor("white")}
            onMouseOut={() => setEditColor("black")}
            onClick={trashButton}
            className="box-border rounded-md border-[7px] border-white duration-100 hover:border-red-500 hover:bg-red-500 hover:text-white"
          />
        </div>
      </div>
    </div>
  );
}
