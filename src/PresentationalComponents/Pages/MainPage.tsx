import { FC } from "react";

import Grid from "@material-ui/core/Grid";
import SideBar from "../Organisms/SideBar";
import Board from "../Organisms/Board";

import "./MainPage.css";

type Props = {
    isLoading: boolean;
};

const MainPage: FC<Props> = ({ isLoading = false }) => (
    <Grid container className="MainPage" spacing={0}>
        <Grid item xs={2} className="MenuBar">
            <div>{isLoading ? <div>Loading</div> : <SideBar />}</div>
        </Grid>
        <Grid item xs={10} className="MemoScreen" spacing={0}>
            <h1>Board Name</h1>
            <Board />
        </Grid>
    </Grid>
);

export default MainPage;
