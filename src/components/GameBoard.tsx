import type { Translation } from "../locales";
import { DIFFICULTY_LEVELS } from "../utils/constants";
import type { Card, Theme } from "../utils/types";
import GameCard from "./GameCard";

export default function GameBoard({ currentTheme, deck, size, flipped, t, onCardClick }: {
    currentTheme: Theme;
    deck: Card[];
    size: number;
    flipped: string[];
    t: Translation;
    onCardClick: (card: Card) => void;
}) {

    const currentLevel = DIFFICULTY_LEVELS.find(l => l.size === size);

    return (
        <main className="game-area">
            <div className="game-header">
                <div className="game-info">
                    <h2>{t.gameInProgress}</h2>
                    <p>{t.difficulties[currentLevel?.label.toLowerCase() as 'easy' | 'medium' | 'hard']}
                        {' • '} {t.themes[currentTheme.id as keyof typeof t.themes]}
                    </p>
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