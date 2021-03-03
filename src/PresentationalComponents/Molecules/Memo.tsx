import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActions, CardContent, SvgIcon } from "@material-ui/core/";

// markdown
import ReactMarkdown from "react-markdown";
import breaks from "remark-breaks"; // mdでの改行をそのまま改行にしてくれるやつ

// for view of drag handler.
import DragHandleIcon from "@material-ui/icons/DragHandle";

// dnd types
import { ConnectDropTarget, ConnectDragSource } from "react-dnd";

import EditButton from "../../ContainerComponents/Atoms/EditButton";

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

type Props = {
    text: string;
    drop: ConnectDropTarget;
    drag: ConnectDragSource;
    opacity: number;
    isHover: boolean;
};

const Memo: FC<Props> = ({ text, drop, drag, opacity, isHover }) => {
    const classes = useStyles();

    const tmpMarkdownContents = `# Markdown.\n${text}`;

    return (
        <div ref={drop} style={{ opacity }}>
            <Card raised={isHover}>
                <CardActions>
                    <div ref={drag} style={{ cursor: "move" }}>
                        <SvgIcon component={DragHandleIcon} />
                    </div>
                    <EditButton />
                </CardActions>

                <CardContent>
                    <ReactMarkdown
                        plugins={[breaks]}
                        className={classes.markdown}
                    >
                        {tmpMarkdownContents}
                    </ReactMarkdown>
                </CardContent>
            </Card>
        </div>
    );
};

export default Memo;
