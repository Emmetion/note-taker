import React, { useEffect, useState } from "react";
import { Form, FormFeedback, FormGroup, Input, InputGroup, InputGroupText, Label } from "reactstrap";

import { db } from "../../config/firebase-config";
import { useCreateNote } from "../../hooks/useCreateNote";

export default function CreateNote() {
    const { createNote } = useCreateNote();

    const [newNote, setNewNote] = useState({name: '', type: ''})

    const updateNewNote = (e) => {
        setNewNote({
            ...newNote,
            [e.target.id]: e.target.value
        });
    }

    const validateSubmition = () => {
        return newNote.name !== '' && newNote.type !== '';
    }

    const onSubmitClick = () => {
        if (!validateSubmition()) {
            console.log('invalid form submission.');
            return
        }

        createNote({noteName: newNote.name, noteDescription: '', noteType: newNote.type})
    }

    return (
        <div className="w-full h-full flex flex-col pt-5">
            <p className="text-4xl text-center w-full">
                Create a Note
            </p>
            <div className="w-[300px] self-center">
                <div className='pt-5 h-auto mx-auto '>
                    <label for='name' className="mr-3 text-xl">Name</label>
                    <input id='name' type='text'
                        value={newNote.name} 
                        onChange={(e) => updateNewNote(e)}
                        className="h-10 pl-2 bg-gray-400 rounded-md focus:text-black focus:bg-white duration-150 w-max"/>
                </div>
                <div className='pt-5 h-auto mx-auto w-auto'>
                    <label for='tags' className="mr-3 text-xl">Tags: </label>
                    <input id='tags' type='text' 
                        value={newNote.tags} 
                        onChange={(e) => updateNewNote(e)}
                        className="h-10 pl-2 bg-gray-400 rounded-md focus:text-black focus:bg-white duration-150 w-100%"/>
                </div>
            </div>

            <div className="w-full flex space-x-7">
                <div className="mx-auto pt-10 space-x-5">
                    <button className="border-4 border-blue-500 bg-blue-500 text-white rounded-md text-2xl">Create</button>
                    <button className="border-4 border-red-500 bg-red-500 text-white rounded-md text-2xl">Cancel</button>
                </div>
            </div>
        </div>
    )
}