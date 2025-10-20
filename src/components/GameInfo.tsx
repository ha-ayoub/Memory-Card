import type { Language, Translation } from "../locales";
import { DIFFICULTY_LEVELS, THEMES } from "../utils/constants";
import type { GameScore, Theme } from "../utils/types";
import GameDifficulty from "./GameDifficulty";
import GameStats from "./GameStats";
import GameTheme from "./GameTheme";
import GameTitle from "./GameTitle";

export default function GameInfo({ currentTheme, currentSize, time, moves, matchedCount, totalPairs, bestScore, t, language,
    onThemeChange, onDifficultyChange, onLanguageChange }: {
        currentTheme: Theme;
        currentSize: number;
        time: number;
        moves: number;
        matchedCount: number;
        totalPairs: number;
        bestScore: GameScore | null;
        t: Translation;
        language: Language;
        onThemeChange: (theme: Theme) => void;
        onDifficultyChange: (size: number) => void;
        onLanguageChange: (lang: Language) => void;
    }) {
    return (
        <aside className="sidebar">
            <GameTitle t={t}
                language={language}
                onLanguageChange={onLanguageChange}
            />
            <GameTheme
                themes={THEMES}
                currentTheme={currentTheme}
                t={t}
                onThemeChange={onThemeChange}
            />
            <GameDifficulty
                levels={DIFFICULTY_LEVELS}
                currentSize={currentSize}
                t={t}
                onDifficultyChange={onDifficultyChange}
            />
            <GameStats
                time={time}
                moves={moves}
                matchedCount={matchedCount}
                totalPairs={totalPairs}
                bestScore={bestScore}
                t={t}
            />
        </aside>
    )
}