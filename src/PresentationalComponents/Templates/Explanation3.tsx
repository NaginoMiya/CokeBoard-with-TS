import { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Container } from "@material-ui/core/";
import "./Explanation.css";
import imageIcon from "../../Images/image.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "20px",
        display: "inline-block",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(6),
        },
    },
}));

const Explanation3: FC = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="xl">
            <div className={classes.root}>
                <Grid container spacing={2} justify="center">
                    <Grid item xl={7}>
                        <Paper elevation={10} className="paper-components">
                            <h3 className="paper-title">
                                作ったメモは一枚の画像やpdfに(開発中)
                            </h3>
                            <div className="paper-text">
                                <p>
                                    みんなで作ったメモは最終的に全員が見える場所に共有したくなることでしょう。
                                </p>
                                <p>その際に一々サイトにアクセスし直したり、</p>
                                <p>
                                    スクリーンショットを撮ったりすることは手間です。
                                </p>
                                <p>
                                    Coke
                                    Boardでは作成されたメモを1枚の画像やpdfに出力しダウンロードすることができます。
                                </p>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xl={5}>
                        <img
                            src={imageIcon}
                            className="image-icon"
                            alt="icon"
                        />
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};

export default Explanation3;
