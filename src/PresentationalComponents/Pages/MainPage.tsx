import { FC, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import { Navigate } from "react-router";
import UserContext from "../../Contexts/UserContextValue";

import SideBar from "../Organisms/SideBar";
import Board from "../Organisms/Board";

import "./MainPage.css";

type Props = {
    isLoading: boolean;
};

const MainPage: FC<Props> = ({ isLoading = false }) => {
    const { user } = useContext(UserContext);

    return user === null ? (
        <div>
            <Navigate to="/" replace />
        </div>
    ) : (
        <Grid container className="MainPage" spacing={0}>
            <Grid item xs={2} className="MenuBar">
                <div>{isLoading ? <div>Loading</div> : <SideBar />}</div>
            </Grid>
            <Grid item xs={10} className="MemoScreen" spacing={0}>
                <h1>BoardName</h1>
                <Board />
            </Grid>
        </Grid>
    );
};

export default MainPage;
