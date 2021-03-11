import { FC } from "react";
import { useNavigate } from "react-router";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

type Props = {
    auth: firebase.auth.Auth | null;
};

const SignInButton: FC<Props> = ({ auth }) => {
    const navigate = useNavigate();

    // Configure FirebaseUI.
    const uiConfig = {
        signInFlow: "redirect",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => {
                navigate("/App", { replace: true });

                return false;
            },
        },
    };

    return (
        <div className="flex-box">
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
    );
};

export default SignInButton;
