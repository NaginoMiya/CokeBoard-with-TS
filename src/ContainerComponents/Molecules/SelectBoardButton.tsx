import { FC } from "react";
import EnhancedSelectBoradButton from "../../PresentationalComponents/Molecules/SelectBoardButton";

type Props = {
    memoName: string;
};

const SelectBoardButton: FC<Props> = ({ memoName }) => (
    <EnhancedSelectBoradButton memoName={memoName} />
);

export default SelectBoardButton;
