import { addDoc, collection, serverTimestamp, documentId } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useCreateNote = () => {
  const notesCollectionRef = collection(db, "notes");
  const { userID } = useGetUserInfo();

  const createNote = async ({
    noteName,
    noteDescription,
    noteType,
  }) => {

    if (userID === null || userID === undefined) {
      console.log('User not logged in')
      return;
    }
    await addDoc(notesCollectionRef, {
      userID,
      noteName,
      noteDescription,
      noteType,
      createdAt: serverTimestamp(),
    });
    console.log('Note created successfully!')
  };
  return { createNote };
};