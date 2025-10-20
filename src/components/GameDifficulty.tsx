import type { DifficultyLevel } from "../utils/types";

export default function GameDifficulty({ levels, currentSize, onDifficultyChange }: { 
  levels: DifficultyLevel[]; 
  currentSize: number; 
  onDifficultyChange: (size: number) => void;
}) {
  return (
    <div className="section">
      <h3>Difficulty</h3>
      <div className="difficulty-list">
        {levels.map(level => (
          <button
            key={level.size}
            onClick={() => onDifficultyChange(level.size)}
            className={`difficulty-item ${currentSize === level.size ? 'active' : ''}`}
          >
            <span className="difficulty-label">{level.label}</span>
            <span className="difficulty-grid">{level.grid}</span>
          </button>
        ))}
      </div>
    </div>
  )
}