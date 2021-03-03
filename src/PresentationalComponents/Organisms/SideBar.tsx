import { FC } from "react";
import Typography from "@material-ui/core/Typography";
import CreateNewBoardButton from "../../ContainerComponents/Atoms/CreateNewBoardButton";
import RemoveBoardButton from "../../ContainerComponents/Atoms/RemoveBoardButton";
import SelectBoardButton from "../../ContainerComponents/Molecules/SelectBoardButton";

import "./SideBar.css";

// test data (for MemoSelector)
const TestData: string[] = ["Memo1", "Memo2", "Memo3"];

const SideBar: FC = () => (
    // cssのクラスネームをmemo->boardに変更する
    // メニューも並べ替えられるようにDragableになるかも.

    <>
        <Typography variant="h5" className="site-title-menu-bar">
            🥤Coke Board
        </Typography>
        <CreateNewBoardButton />
        <RemoveBoardButton />
        <Typography variant="h6" className="menu-bar-memo">
            Boards
        </Typography>

        <div className="MemoSelectorList">
            {TestData.map((x) => (
                <SelectBoardButton memoName={x} />
            ))}
        </div>
    </>
);
export default SideBar;
