import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    SvgIcon,
} from "@material-ui/core/";

// for view of drag handler.
import DragHandleIcon from "@material-ui/icons/DragHandle";

// dnd types
import { ConnectDropTarget, ConnectDragSource } from "react-dnd";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,

        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        marginTop: theme.spacing(1),

        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(1),

        height: "45.5vh",
        overflowY: "scroll",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
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

    return (
        <div ref={drop} style={{ opacity }}>
            <Card className={classes.root} raised={isHover}>
                <CardActions>
                    <div ref={drag} style={{ cursor: "move" }}>
                        <SvgIcon component={DragHandleIcon} />
                    </div>
                    <Button color="primary" size="small">
                        Edit
                    </Button>
                    <Button color="secondary" size="small">
                        Remove
                    </Button>
                </CardActions>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Memo;
