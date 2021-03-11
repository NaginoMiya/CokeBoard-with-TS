import { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Container } from "@material-ui/core/";
import "./Explanation.css";
import glasses from "../../Images/glasses.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "inline-block",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(6),
        },
    },
}));

const Explanation1: FC = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="xl">
            <div className={classes.root}>
                <Grid container spacing={2} justify="center">
                    <Grid item xl={7}>
                        <Paper elevation={10} className="paper-components">
                            <h3 className="paper-title">
                                みんなでドリンクでも飲みながら
                            </h3>
                            <div className="paper-text">
                                <p>
                                    Coke
                                    Boardは1本の大きなジュースをみんなでシェアしながら
                                </p>
                                <p>
                                    楽しくアイデア出しするような場面を想像しながら作成されました。
                                </p>
                                <p>
                                    議論が白熱してアイデアがあっちこっち行ってしまっても大丈夫。Coke
                                    Boardは1つにまとめてくれます。
                                </p>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xl={5}>
                        <img src={glasses} className="glasses" alt="glasses" />
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};

export default Explanation1;
