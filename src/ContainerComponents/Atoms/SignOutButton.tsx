import { FC, useCallback } from "react";
import firebase from "firebase";
import { useSetRecoilState } from "recoil";
import userIdState from "../../Recoil/userIdState";
import EnhancedSignOutButton from "../../PresentationalComponents/Atoms/SignOutButton";

const SignOutButton: FC = () => {
    const setUid = useSetRecoilState(userIdState);
    const logOut = useCallback(() => {
        firebase
            .auth()
            .signOut()
            .catch((err) => console.error(err)); // eslint-disable-line no-console
        setUid("");
    }, [setUid]);

    return <EnhancedSignOutButton logOut={logOut} />;
};

export default SignOutButton;
