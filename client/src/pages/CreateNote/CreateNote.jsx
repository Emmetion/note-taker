import React, { useEffect, useState } from "react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Textarea,
  } from "@material-tailwind/react";
import { db } from "../../config/firebase-config";
import { useCreateNote } from "../../hooks/useCreateNote";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { useGetNotes } from "../../hooks/useGetNotes";

export default function CreateNote() {
    const { createNote } = useCreateNote();
    const { fetchNotes } = useGetNotes();

    const { userID } =  useGetUserInfo();

    const [newNote, setNewNote] = useState({name: '', type: '', description: ''})
    const [error, setError  ] = useState('');

    const updateNewNote = (e) => {
        setNewNote({
            ...newNote,
            [e.target.id]: e.target.value
        });
    }

    const validateSubmition = () => {
        return newNote.name !== '' && newNote.type !== '' && newNote.description !== '';
    }

    const onSubmitClick = async () => {

        if (userID === null || userID === undefined) {
            setError('User not logged in')
            return;
        }

        if (!validateSubmition()) {
            setError('Please fill out all fields')
            return
        }
        setError('')

        await createNote({noteName: newNote.name, noteDescription: newNote.description, noteType: newNote.type})
    }

    return (
        <div className="w-full h-full flex flex-col pt-5">
            <p className="text-4xl text-center w-full">
                Create a Note
            </p>
            {
                error ? <p className="text-red-300 text-center w-full text-xl">{error}</p> : null
            }
            <div className="w-[300px] self-center">
                <div className='pt-5 h-auto mx-auto '>
                    <Input id='name' type='text'
                        label='Name' 
                        value={newNote.name} 
                        onChange={(e) => updateNewNote(e)}
                        className=" bg-gray-400 rounded-md focus:text-black focus:bg-white duration-150 "/>
                </div>
                <div className='pt-5 h-auto mx-auto w-auto'>
                    <Input id='type' 
                        type='text' 
                        label='Type'
                        value={newNote.type} 
                        onChange={(e) => updateNewNote(e)}
                        className="h-10 pl-2 bg-gray-400 rounded-md focus:text-black focus:bg-white duration-150 w-100%"/>
                </div>
                <div className='pt-5 h-auto mx-auto w-auto'>
                    <Textarea 
                        label='Description'
                        id='description' 
                        type='text'
                        value={newNote.description} 
                        resize='vertical'
                        onChange={(e) => updateNewNote(e)}
                        className="h-10 pl-2 bg-gray-400 rounded-md focus:text-black focus:bg-white duration-150 w-100%"/>
                </div>
            </div>

            <div className="w-full flex space-x-7">
                <div className="mx-auto pt-10 space-x-5">
                    <Button className=" bg-blue-500 text-white rounded-md" onClick={onSubmitClick}>Create</Button>
                    <Button className=" bg-red-500 text-white rounded-md">Cancel</Button>
                </div>
            </div>

            <Button color='amber' onClick={() => {console.log(fetchNotes())}}>Click for Data.</Button>

        </div>
    )
}