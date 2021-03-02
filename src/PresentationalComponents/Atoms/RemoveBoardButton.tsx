import { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Button } from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    button: {
        width: "80%",
        "& > *": {
            color: "#fffafa",
        },
    },
    // IconButtonsのスタイルです.
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

const RemoveBoardButton: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button
                aria-label="delete"
                // onClick={removeMemo}
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
            >
                Delete Current Memo
            </Button>
        </div>
    );
};

export default RemoveBoardButton;
