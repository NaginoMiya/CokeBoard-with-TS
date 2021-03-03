import { FC } from "react";
import { useDrag, useDrop } from "react-dnd";

import EnhancedMemo from "../../PresentationalComponents/Molecules/Memo";

type Props = {
    id: number;
    text: string;
    index: number;
    moveCard: (dragIndex: number, hoverIndex: number) => void;
    hoverIndex: number;
    setHoverIndex: React.Dispatch<React.SetStateAction<number>>;
};

interface DragItem {
    index: number;
    id: string;
    type: string;
}
const Memo: FC<Props> = ({
    id,
    text,
    index,
    moveCard,
    hoverIndex,
    setHoverIndex,
}) => {
    const ItemType = {
        MEMO: "Memo",
    };

    const [_, drop] = useDrop({
        accept: ItemType.MEMO,
        collect() {
            return {};
        },
        hover() {
            setHoverIndex(index);
        },
        drop(item: DragItem) {
            setHoverIndex(-1); // HoverIndexをリセットする.
            moveCard(item.index, index);
        },
    });

    const [{ opacity }, drag, preview] = useDrag({
        item: { type: ItemType.MEMO, id, index },
        collect: (monitor) => ({
            endDrop: monitor.didDrop(),
            opacity: monitor.isDragging() ? 0.4 : 1,
        }),
    });

    return (
        <div ref={preview}>
            <EnhancedMemo
                text={text}
                drop={drop}
                drag={drag}
                opacity={opacity}
                isHover={hoverIndex === index}
            />
        </div>
    );
};

export default Memo;
