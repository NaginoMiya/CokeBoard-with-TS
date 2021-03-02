import { FC, useRef } from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";

// Modal
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { Fade, Grid } from "@material-ui/core/";

// Button
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    longtitle: {
        color: "red",
    },
    input: {
        alignItems: "center",
        width: "100%",
        fontSize: "30px",
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        width: "50%",
        padding: theme.spacing(2, 4, 3),
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
    },
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

const ColorButton = withStyles((theme) => ({
    root: {
        width: "80%",
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
        "&:hover": {
            backgroundColor: green[700],
        },
        "& > *": {
            color: "#fffafa",
        },
    },
}))(Button);

type Props = {
    isOpen: boolean;
    isLimitOver: boolean;
    handleOpen: () => void;
    handleClose: (NewMemoName: string) => void;
};

const CreateNewBoardButton: FC<Props> = ({
    isOpen,
    isLimitOver,
    handleOpen,
    handleClose,
}) => {
    const classes = useStyles();
    const InputNewBoardNameRef = useRef<HTMLInputElement>(null);

    const WrapperHandleClose = () => {
        const tmpInput: string =
            InputNewBoardNameRef.current === null
                ? ""
                : InputNewBoardNameRef.current.value;
        handleClose(tmpInput);
    };

    return (
        <>
            <div className={classes.root}>
                <ColorButton
                    aria-label="delete"
                    onClick={handleOpen}
                    variant="contained"
                    color="primary"
                    // className={classes.button}
                    startIcon={<AddCircleOutlineIcon />}
                >
                    Add New Memo
                </ColorButton>
            </div>

            {/* onClose無駄かも． */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={isOpen}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                disableBackdropClick
            >
                <Fade in={isOpen}>
                    <Grid container className={classes.paper} spacing={4}>
                        <Grid item xs={10}>
                            <input
                                ref={InputNewBoardNameRef}
                                className={classes.input}
                                placeholder="Memo Title"
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <ColorButton
                                onClick={WrapperHandleClose}
                                variant="contained"
                                color="primary"
                                endIcon={<AddCircleOutlineIcon />}
                            >
                                ADD
                            </ColorButton>
                        </Grid>
                        <Grid item xs={12}>
                            {isLimitOver ? (
                                <h2 className={classes.longtitle}>
                                    タイトルが長すぎます.
                                </h2>
                            ) : null}
                        </Grid>
                    </Grid>
                </Fade>
            </Modal>
        </>
    );
};

export default CreateNewBoardButton;
