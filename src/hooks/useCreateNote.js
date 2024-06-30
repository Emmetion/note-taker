import { addDoc, collection, serverTimestamp, documentId } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useCreateNote = () => {
  const notesCollectionRef = collection(db, "notes");
  const { userID } = useGetUserInfo();

  const createNote = async ({
    name,
    description,
    type,
  }) => {

    if (userID === null || userID === undefined) {
      console.log('User not logged in')
      return;
    }
    await addDoc(notesCollectionRef, {
      userID,
      name,
      description,
      type,
      createdAt: serverTimestamp(),
    });
    console.log('Note created successfully!')
  };
  return { createNote };
};