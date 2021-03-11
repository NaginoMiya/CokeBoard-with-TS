import { FC, useEffect, useState } from "react";
import firebase from "firebase";
import FirebaseContext from "./Contexts/FirebaseContext";
import UserContext from "./Contexts/UserContextValue";

const FirebaseApp: FC = ({ children }) => {
    const [isAuthLoading, setIsAuthLoading] = useState(true);
    const [user, setUser] = useState<firebase.User | null>(null);

    const auth = firebase.auth();
    const db = firebase.firestore();

    const unSubscribe = auth.onAuthStateChanged((firebaseUser) => {
        setUser(firebaseUser);
        setIsAuthLoading(false);
    });

    useEffect(() => unSubscribe);

    return isAuthLoading ? (
        <p>Loading</p>
    ) : (
        <FirebaseContext.Provider value={{ auth, db }}>
            <UserContext.Provider value={{ user }}>
                {children}
            </UserContext.Provider>
        </FirebaseContext.Provider>
    );
};

export default FirebaseApp;
