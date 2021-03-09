import { FC } from "react";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

type Props = {
    logOut: () => void;
};

const SignOutButton: FC<Props> = ({ logOut }) => (
    <Button variant="contained" onClick={logOut} endIcon={<ExitToAppIcon />}>
        Logout
    </Button>
);

export default SignOutButton;
