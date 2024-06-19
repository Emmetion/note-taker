import { Typography } from "@material-tailwind/react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function EditNote({note}) {

    const { id } = useParams();
    const nav = useNavigate();
    
    useEffect(() => {
        if (!id) {
            nav('/my-notes');
        }
    }, [id, nav])

    return (
        // Edit Font Page.
        <div className="w-full h-full">
            <Typography variant='h1' className="font-body">Editing Note</Typography>
            { id ? <Typography variant='h2' className="font-body">Note ID: {id}</Typography> : null }
        </div>
    )
}