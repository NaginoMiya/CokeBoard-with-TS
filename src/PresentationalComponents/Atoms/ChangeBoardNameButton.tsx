import { FC, useRef } from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";

// Modal
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { Fade, Grid } from "@material-ui/core/";

// Button
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RefreshIcon from "@material-ui/icons/Refresh";
import { green } from "@material-ui/core/colors";

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

const useStyles = makeStyles((theme) => ({
    input: {
        width: "100%",
        alignItems: "center",
        fontSize: "30px",
    },
    // Modalのスタイルです.
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: "50%",
    },
    // IconButtonsのスタイルです.
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

type Props = {
    isModalOpen: boolean;
    isLimitOver: boolean;
    handleOpenModal: () => void;
    handleCloseModal: (NewMemoName: string) => void;
};

const ChangeMemoNameButton: FC<Props> = ({
    isModalOpen,
    isLimitOver,
    handleOpenModal,
    handleCloseModal,
}) => {
    const classes = useStyles();
    const InputNewBoardNameRef = useRef<HTMLInputElement>(null);

    const WrapperHandleCloseModal = () => {
        const tmpInput: string =
            InputNewBoardNameRef.current === null
                ? ""
                : InputNewBoardNameRef.current.value;
        handleCloseModal(tmpInput);
    };

    return (
        <>
            {/*  名前変更ボタンです. 適当に変えてください */}
            <div className={classes.root}>
                <ColorButton
                    aria-label="delete"
                    onClick={handleOpenModal}
                    variant="contained"
                    color="primary"
                    endIcon={<RefreshIcon />}
                >
                    Change Memo Title!
                </ColorButton>
            </div>

            {/* Modalです. */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={isModalOpen}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                disableBackdropClick
            >
                <Fade in={isModalOpen}>
                    <Grid container className={classes.paper} spacing={4}>
                        <Grid item xs={10}>
                            <input
                                ref={InputNewBoardNameRef}
                                className={classes.input}
                                placeholder="New Memo Title"
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <ColorButton
                                onClick={WrapperHandleCloseModal}
                                variant="contained"
                                color="primary"
                                endIcon={<AddCircleOutlineIcon />}
                            >
                                Save!
                            </ColorButton>
                        </Grid>
                        <Grid item xs={12}>
                            {isLimitOver ? (
                                <h2>タイトルが長すぎます.</h2>
                            ) : null}
                        </Grid>
                    </Grid>
                </Fade>
            </Modal>
        </>
    );
};

export default ChangeMemoNameButton;
