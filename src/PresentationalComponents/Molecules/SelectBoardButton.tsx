import { FC } from "react";
import { withStyles, Button, Box } from "@material-ui/core/";

import ChangeBoardNameButton from "../../ContainerComponents/Atoms/ChangeBoardNameButton";

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText("#fffafa"),
        margin: "4px",
        backgroundColor: "#fffafa",
        width: "80%",
        "&:hover": {
            backgroundColor: "#cccccc",
        },
        "& > *": {
            textOverflow: "ellipsis",
        },
        textTransform: "none", // 大文字に変換されるのを防ぎます.
    },
}))(Button);

type Props = {
    memoName: string;
};

const SelectBoardButton: FC<Props> = ({ memoName }) => (
    <>
        <Box component="div">
            <ColorButton variant="contained">{memoName}</ColorButton>
        </Box>

        {/* 以下に，Change Memo Name Button が配置されます */}
        <ChangeBoardNameButton />
    </>
);

export default SelectBoardButton;
