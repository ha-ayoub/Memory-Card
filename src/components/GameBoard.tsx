import { DIFFICULTY_LEVELS } from "../utils/constants";
import type { Card, Theme } from "../utils/types";
import GameCard from "./GameCard";

export default function GameBoard({ currentTheme, deck, size, flipped, onCardClick }: {
    currentTheme: Theme;
    deck: Card[];
    size: number;
    flipped: string[];
    onCardClick: (card: Card) => void;
}) {

    const currentLevel = DIFFICULTY_LEVELS.find(l => l.size === size);

    return (
        <main className="game-area">
            <div className="game-header">
                <div className="game-info">
                    <h2>Game in progress</h2>
                    <p>{currentLevel?.label} • {currentTheme.name}</p>
                </div>
            </div>
            <div className="board-wrapper">
                <div className={`board board-${size}`}>
                    {deck.map(c => (
                        <GameCard
                            key={c.id}
                            card={c}
                            flipped={flipped.includes(c.id) || c.matched}
                            onClick={() => onCardClick(c)}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}