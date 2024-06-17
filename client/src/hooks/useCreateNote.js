import { addDoc, collection, serverTimestamp } from "firebase/firestore";
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
    await addDoc(notesCollectionRef, {
      userID,
      noteName,
      noteDescription,
      noteType,
      createdAt: serverTimestamp(),
    });
  };
  return { createNote };
};