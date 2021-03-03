import { FC, useState, useCallback } from "react";

import Memo from "../../ContainerComponents/Molecules/Memo";

import "./Board.css";

type Item = {
    id: number;
    text: string;
};

const initData: Item[] = [
    {
        id: 1,
        text: "id:1",
    },
    {
        id: 2,
        text: "id:2",
    },
    {
        id: 3,
        text: "id:3",
    },
    {
        id: 4,
        text: "id:4",
    },
    {
        id: 5,
        text: "id:5",
    },
    {
        id: 6,
        text: "id:6",
    },
    {
        id: 7,
        text: "id:7",
    },
];

const Board: FC = () => {
    const [cards, setCards] = useState(initData);

    const moveCard = useCallback(
        (dragIndex: number, hoverIndex: number) => {
            const x = dragIndex;
            const y = hoverIndex;

            // swap
            const newCards = [...cards];
            newCards[x] = cards[y];
            newCards[y] = cards[x];

            setCards(newCards);
        },
        [cards]
    );

    const [hoverIndex, setHoverIndex] = useState(-1);
    const renderCard = (card: { id: number; text: string }, index: number) => (
        <Memo
            key={card.id}
            index={index}
            id={card.id}
            text={card.text}
            moveCard={moveCard}
            hoverIndex={hoverIndex}
            setHoverIndex={setHoverIndex}
        />
    );

    return (
        <div className="files-container">
            {cards.map((card, i) => renderCard(card, i))}
        </div>
    );
};

export default Board;
