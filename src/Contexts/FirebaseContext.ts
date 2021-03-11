import { createContext } from "react";
import firebase from "firebase/app";

type FirebaseContextValue = {
    auth: firebase.auth.Auth | null;
    db: firebase.firestore.Firestore | null;
};

const FirebaseContext = createContext<FirebaseContextValue>({
    auth: null,
    db: null,
});

export default FirebaseContext;
