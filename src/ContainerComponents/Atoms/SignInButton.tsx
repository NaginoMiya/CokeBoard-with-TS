import { FC, useEffect } from "react";
import firebase from "firebase";
import EnhancedSignInButton from "../../PresentationalComponents/Atoms/SignInButton";

const SignInButton: FC = () => {
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user!.uid);
        });
    }, []);

    return <EnhancedSignInButton />;
};

export default SignInButton;
