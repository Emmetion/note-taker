import { addDoc, collection, serverTimestamp, documentId, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useDeleteNote = () => {
    const notesCollectionRef = collection(db, 'notes');
    const { userID } = useGetUserInfo();

    const deleteNote = async (id) => {
        const doc = await getDoc(notesCollectionRef, id);

        if (doc == null) {
            // assume doc is already deleted.
            console.error('deleteing doc that doesn\'t exist.');
            return;
        }

        if (doc.id !== userID) {
            // deleting a document belonging to a different user.
            console.error('attempted to delete doc not owned.')
        }

        await deleteDoc(doc);
    }

    return { deleteNote }

}