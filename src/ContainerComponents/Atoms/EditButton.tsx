import { FC, useState } from "react";
import EnhancedEditButton from "../../PresentationalComponents/Atoms/EditButton";

const EditButton: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <EnhancedEditButton
            isModalOpen={isModalOpen}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
        />
    );
};

export default EditButton;
