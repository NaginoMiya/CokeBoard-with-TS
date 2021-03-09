import { FC, useEffect } from "react";
import firebase from "firebase";
import { useRecoilState } from "recoil";
import EnhancedSignInButton from "../../PresentationalComponents/Atoms/SignInButton";

import userIdState from "../../Recoil/userIdState";

const SignInButton: FC = () => {
    const [uid, setUid] = useRecoilState(userIdState);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((usr) => {
            setUid(usr === null ? "" : usr.uid);
        });
    }, [setUid]);

    return (
        <>
            <EnhancedSignInButton />
            {uid}
        </>
    );
};

export default SignInButton;
