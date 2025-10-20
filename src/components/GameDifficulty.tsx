import type { Translation } from "../locales";
import type { DifficultyLevel } from "../utils/types";

export default function GameDifficulty({ levels, currentSize, t, onDifficultyChange }: { 
  levels: DifficultyLevel[]; 
  currentSize: number;
  t: Translation;
  onDifficultyChange: (size: number) => void;
}) {
  return (
    <div className="section">
      <h3>{t.difficulty}</h3>
      <div className="difficulty-list">
        {levels.map(level => (
          <button
            key={level.size}
            onClick={() => onDifficultyChange(level.size)}
            className={`difficulty-item ${currentSize === level.size ? 'active' : ''}`}
          >
            <span className="difficulty-label">
              {t.difficulties[level.label.toLowerCase() as 'easy' | 'medium' | 'hard']}
            </span>
            <span className="difficulty-grid">{level.grid}</span>
          </button>
        ))}
      </div>
    </div>
  )
}