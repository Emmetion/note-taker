import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";
import { useEffect, useState } from "react";

export const useGetNotes = () => {
    const notesCollectionRef = collection(db, 'notes');
    const [loading, setLoading] = useState(true);
    const [notes, setNotes] = useState(null);
    const { userID } = useGetUserInfo();

    const fetchNotes = async () => {
        if (userID === null || userID === undefined) {
            console.log("attempted to fetch notes without a user.");
            setLoading(false);
            return [];
        }
        if (notes !== null) {
            setLoading(false);
            console.log('early return.')
            return notes;
        }

        try {
            const q = query(notesCollectionRef, where('userID', '==', userID));
            const notesSnapshot = await getDocs(q);
            const notesData = [];
            notesSnapshot.docs.forEach(doc => {
                let d = doc.data();
                d.id = doc.id; // Include DocumentID in data.
                notesData.push(d);
            });
            console.log(notesData);
            setNotes(notesData);
            setLoading(false);
            return notesData;
        } catch (error) {
            console.error("Error fetching notes: ", error);
            setLoading(false);
            return [];
        }
    }   

    const refreshNotes = async () => {
        setLoading(true);
        if (userID === null || userID === undefined) {
            console.log("attempted to fetch notes without a user.");
            setLoading(false);
            return [];
        }

        try {
            const q = query(notesCollectionRef, where('userID', '==', userID));
            const notesSnapshot = await getDocs(q);
            const notesData = [];
            notesSnapshot.docs.forEach(doc => {
                let d = doc.data();
                d.id = doc.id; // Include DocumentID in data.
                notesData.push(d);
            });
            console.log(notesData);
            setNotes(notesData);
            setLoading(false);
            return notesData;
        } catch (error) {
            console.error("Error fetching notes: ", error);
            setLoading(false);
            return [];
        }
    }

    const getSingleNote = async (noteID) => {
        if (notes === null) {
            await fetchNotes();
            console.error('Attempted to fetch note without notes data.');
            return null;
        }
        let tempNote = null;
        notes.forEach(note => {
            console.log(note);
            console.log("looking for: ", noteID)
            if (note.id === noteID) {
                tempNote = note;
            }
        });

        if (tempNote === null) {
            console.error('Failed to locate note.id: ', noteID);
            return null;
        }
        return tempNote;
    }

    useEffect(() => {
        fetchNotes();
    }, [userID]);
    
    return { notes, loading, fetchNotes, getSingleNote, refreshNotes };
}