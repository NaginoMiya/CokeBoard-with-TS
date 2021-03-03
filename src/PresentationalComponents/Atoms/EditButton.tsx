import { FC, useRef } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// Modal
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

// Edit Button
import { IconButton, Button } from "@material-ui/core/";
import EditIcon from "@material-ui/icons/Edit";
import { green } from "@material-ui/core/colors";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
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
        width: "30vw",
    },
    // IconButtonsのスタイルです.
    edit: {
        display: "inline-block",
    },
    // Markdownのスタイル
    markdown: {
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingBottom: "15px",
        "& > *": {
            textAlign: "left",
            margin: "0px",
            marginBottom: "3px",
            marginTop: "2px",
        },
        // フォントサイズの変更（保留）
        "& > p": {
            fontSize: "15px",
            margin: "0",
        },
    },
    textBox: {
        height: "60vh",
        width: "100%",
        alignItems: "center",
        fontSize: "15px",
        resize: "none",
    },
    root: {
        "& > *": {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(1),
            height: "45.5vh",
            overflowY: "scroll",
        },
    },
}));

const ColorButton = withStyles((theme) => ({
    root: {
        width: "100%",
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
    isModalOpen: boolean;
    handleOpenModal: () => void;
    handleCloseModal: () => void;
};

const EditButton: FC<Props> = ({
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
}) => {
    const classes = useStyles();

    const InputMemoContentsRef = useRef<HTMLTextAreaElement>(null);

    return (
        <>
            <div className={classes.edit}>
                <IconButton aria-label="delete" onClick={handleOpenModal}>
                    Edit
                    <EditIcon />
                </IconButton>
            </div>

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
                    <Grid
                        container
                        className={classes.paper}
                        alignItems="stretch"
                        direction="column"
                        spacing={0}
                    >
                        <Grid item xs={12}>
                            <textarea
                                ref={InputMemoContentsRef}
                                className={classes.textBox}
                            >
                                {/* props.CurrentMemo.MiniMemos[props.idx] */}
                                Current Memo の内容がPlace Holder
                                として入力されています.
                            </textarea>
                        </Grid>
                        <Grid item xs={12}>
                            <ColorButton
                                onClick={handleCloseModal}
                                variant="contained"
                                color="primary"
                                endIcon={<ArrowForwardIcon />}
                            >
                                SAVE
                            </ColorButton>
                        </Grid>
                    </Grid>
                </Fade>
            </Modal>
        </>
    );
};

export default EditButton;
