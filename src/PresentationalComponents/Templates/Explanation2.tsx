import { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Container } from "@material-ui/core/";
import "./Explanation.css";

import MarkDownIcon from "../../Images/markdown.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "inline-block",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(6),
        },
    },
}));

const Explanation2: FC = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="xl">
            <div className={classes.root}>
                <Grid container spacing={2} justify="center">
                    <Grid item xl={5}>
                        <Container>
                            <img
                                src={MarkDownIcon}
                                className="md-icon"
                                alt="Markdown-icon"
                            />
                        </Container>
                    </Grid>
                    <Grid item xl={7}>
                        <Paper elevation={10} className="paper-components">
                            <h3 className="paper-title">嬉しいMarkdown対応</h3>
                            <div className="paper-text">
                                <p>たかがメモといっても見やすさは大切です。</p>
                                <p>
                                    Coke BoardではMarkdown入力に対応しており、
                                </p>
                                <p>メモを見やすく飾ってくれます。</p>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};

export default Explanation2;
