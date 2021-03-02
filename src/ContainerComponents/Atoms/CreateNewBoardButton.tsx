import { FC, useState, useCallback } from "react";
import EnhancedCreateBoardButton from "../../PresentationalComponents/Atoms/CreateNewBoardButton";

const CreateNewBoardButton: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLimitOver, setIsLimitOver] = useState(false);
    const handleOpenModal = useCallback(() => setIsModalOpen(true), [
        setIsModalOpen,
    ]);
    const handleCloseModal = useCallback(
        (NewBoardName: string) => {
            if (NewBoardName === "") return;
            if (NewBoardName.length > 40) {
                setIsLimitOver(true);

                return;
            }
            setIsModalOpen(false);
        },
        [setIsModalOpen, setIsLimitOver]
    );

    return (
        <EnhancedCreateBoardButton
            isModalOpen={isModalOpen}
            isLimitOver={isLimitOver}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
        />
    );
};

export default CreateNewBoardButton;
