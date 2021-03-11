import firebase from "firebase/app";
import { createContext } from "react";

type UserContextValue = {
    user: firebase.User | null;
};

const UserContext = createContext<UserContextValue>({
    user: null,
});

export default UserContext;
