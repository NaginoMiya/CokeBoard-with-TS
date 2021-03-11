import { FC, useCallback } from "react";
import firebase from "firebase";
import EnhancedSignOutButton from "../../PresentationalComponents/Atoms/SignOutButton";

const SignOutButton: FC = () => {
    const logOut = useCallback(() => {
        firebase
            .auth()
            .signOut()
            .catch((err) => console.error(err)); // eslint-disable-line no-console
    }, []);

    return <EnhancedSignOutButton logOut={logOut} />;
};

export default SignOutButton;
