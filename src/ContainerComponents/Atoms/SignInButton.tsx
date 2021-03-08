import { FC, useEffect } from "react";
import firebase from "firebase";
import { useRecoilState } from "recoil";
import EnhancedSignInButton from "../../PresentationalComponents/Atoms/SignInButton";

import userState from "../../Recoil/user";

const SignInButton: FC = () => {
    const [user, setUser] = useRecoilState(userState);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((usr) => {
            setUser(usr === null ? "" : usr.uid);
        });
    }, [setUser]);

    return (
        <>
            <EnhancedSignInButton />
            {user}
        </>
    );
};

export default SignInButton;
