import { FC, useContext } from "react";
import FirebaseContext from "../../Contexts/FirebaseContext";
import EnhancedSignInButton from "../../PresentationalComponents/Atoms/SignInButton";

const SignInButton: FC = () => {
    const { auth } = useContext(FirebaseContext);

    return <EnhancedSignInButton auth={auth} />;
};

export default SignInButton;
