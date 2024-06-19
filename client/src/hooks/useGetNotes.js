import { collection, getDoc, getDocs, where, query } from "firebase/firestore";
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
            console.log(userID);
            const q = query(notesCollectionRef, where('userID', '==', userID));
            const notesSnapshot = await getDocs(q);
            const notesData = notesSnapshot.docs.map((doc) => doc.data());
            console.log(notesData)
            setNotes(notesData);
            setLoading(false);
            return notesData;
        } catch (error) {
            console.error("Error fetching notes: ", error);
            setLoading(false);
            return [];
        }
    }   

    useEffect(() => {
        fetchNotes();
    }, [userID]);
    
    return { notes, loading, fetchNotes };
}