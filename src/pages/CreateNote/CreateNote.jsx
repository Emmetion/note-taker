import React, { useState } from "react";
import {
  Input,
  Button,
  Textarea,
} from "@material-tailwind/react";
import { useCreateNote } from "../../hooks/useCreateNote";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { useGetNotes } from "../../hooks/useGetNotes";
import { useNavigate } from "react-router-dom";

export default function CreateNote() {
  const nav = useNavigate();
  const { createNote } = useCreateNote();
  const { fetchNotes } = useGetNotes();
  const { userID } = useGetUserInfo();

  const [newNote, setNewNote] = useState({
    name: "",
    type: "",
    description: "",
  });
  const [message, setMessage] = useState({msg: '', class: ''});

  const updateNewNote = (e) => {
    setNewNote({
      ...newNote,
      [e.target.id]: e.target.value,
    });
  };

  const validateSubmition = () => {
    return (
      newNote.name !== "" && newNote.type !== "" && newNote.description !== ""
    );
  };

  const onSubmitClick = async () => {
    if (userID === null || userID === undefined) {
      setMessage({msg: 'User not logged in.', class: ''});
      return;
    }

    if (!validateSubmition()) {
      setMessage({msg: 'Please fill out all fields.', class: ''});
      
      return;
    }
    setMessage({msg: '', class: ''});

    await createNote({
      name: newNote.name,
      description: newNote.description,
      type: newNote.type,
    });
  };

  const onCancelClick = () => { 
    nav('/my-notes')
  };

  return (
    <div className="flex h-full w-full flex-col pt-5">
      <p className="w-full text-center text-4xl">Create a Note</p>
      {message.msg !== '' ? (
        <p className={`w-full text-center text-xl text-red-300 ${message.class}`}>{message.msg}</p>
      ) : null}
      <div className="w-[300px] self-center">
        <div className="mx-auto h-auto pt-5">
          <Input
            id="name"
            type="text"
            label="Name"
            value={newNote.name}
            onChange={(e) => updateNewNote(e)}
            className="rounded-md bg-gray-400 duration-150 focus:bg-white focus:text-black"
          />
        </div>
        <div className="mx-auto h-auto w-auto pt-5">
          <Input
            id="type"
            type="text"
            label="Type"
            value={newNote.type}
            onChange={(e) => updateNewNote(e)}
            className="w-100% h-10 rounded-md bg-gray-400 pl-2 duration-150 focus:bg-white focus:text-black"
          />
        </div>
        <div className="mx-auto h-auto w-auto pt-5">
          <Textarea
            label="Description"
            id="description"
            type="text"
            value={newNote.description}
            resize="vertical"
            onChange={(e) => updateNewNote(e)}
            className="w-100% h-10 rounded-md bg-gray-400 pl-2 duration-150 focus:bg-white focus:text-black"
          />
        </div>
      </div>

      <div className="flex w-full space-x-7">
        <div className="mx-auto space-x-5 pt-10">
          <Button
            className="rounded-md bg-blue-500 text-white"
            onClick={onSubmitClick}
          >
            Create
          </Button>
          <Button className="rounded-md bg-red-500 text-white" onClick={onCancelClick}>Cancel</Button>
        </div>
      </div>
    </div>
  );
}
