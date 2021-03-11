import { FC } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

// Configure FirebaseUI.
const uiConfig = {
    signInSuccessUrl: "App",
    signInFlow: "redirect",
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
};

type Props = {
    auth: firebase.auth.Auth | null;
};

const SignInButton: FC<Props> = ({ auth }) => (
    <div className="flex-box">
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
);

export default SignInButton;
