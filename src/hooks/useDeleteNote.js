import { addDoc, collection, serverTimestamp, documentId, deleteDoc, getDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useDeleteNote = () => {
    const notesCollectionRef = collection(db, 'notes');
    const { userID } = useGetUserInfo();

    const deleteNote = async (id) => {
        const docRef = doc(notesCollectionRef, id);
        const document = await getDoc(docRef);

        if (document == null) {
            // assume doc is already deleted.
            console.error('deleteing doc that doesn\'t exist.');
            return;
        }
        let data = document.data();
        if (data.userID !== userID) {
            // deleting a document belonging to a different user.
            console.error('attempted to delete doc not owned.')
        }

        await deleteDoc(docRef);
    }

    return { deleteNote }

}