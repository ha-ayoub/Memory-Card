import { DIFFICULTY_LEVELS, THEMES } from "../utils/constants";
import type { GameScore, Theme } from "../utils/types";
import GameDifficulty from "./GameDifficulty";
import GameStats from "./GameStats";
import GameTheme from "./GameTheme";
import GameTitle from "./GameTitle";

export default function GameInfo({ currentTheme, currentSize, time, moves, matchedCount, totalPairs, bestScore, onThemeChange, onDifficultyChange }: {
    currentTheme: Theme;
    currentSize: number;
    time: number;
    moves: number;
    matchedCount: number;
    totalPairs: number;
    bestScore: GameScore | null;
    onThemeChange: (theme: Theme) => void;
    onDifficultyChange: (size: number) => void;
}) {
    return (
        <aside className="sidebar">
            <GameTitle />
            <GameTheme
                themes={THEMES}
                currentTheme={currentTheme}
                onThemeChange={onThemeChange}
            />
            <GameDifficulty
                levels={DIFFICULTY_LEVELS}
                currentSize={currentSize}
                onDifficultyChange={onDifficultyChange}
            />
            <GameStats
                time={time}
                moves={moves}
                matchedCount={matchedCount}
                totalPairs={totalPairs}
                bestScore={bestScore}
            />
        </aside>
    )
}