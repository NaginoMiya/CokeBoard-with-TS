import { FC, useState, useCallback } from "react";
import EnhancedCreateBoardButton from "../../PresentationalComponents/Atoms/CreateNewBoardButton";

const CreateNewBoardButton: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLimitOver, setIsLimitOver] = useState(false);
    const handleOpen = useCallback(() => setIsOpen(true), [setIsOpen]);
    const handleClose = useCallback(
        (NewBoardName: string) => {
            if (NewBoardName === "") return;
            if (NewBoardName.length > 40) {
                setIsLimitOver(true);

                return;
            }
            setIsOpen(false);
        },
        [setIsOpen, setIsLimitOver]
    );

    return (
        <EnhancedCreateBoardButton
            isOpen={isOpen}
            isLimitOver={isLimitOver}
            handleOpen={handleOpen}
            handleClose={handleClose}
        />
    );
};

export default CreateNewBoardButton;
