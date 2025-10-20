import type { Translation } from "../locales";
import { formatTime } from "../utils/helpers";
import type { GameScore } from "../utils/types";

export default function GameStats({ time, moves, matchedCount, totalPairs, bestScore, t }: {
  time: number;
  moves: number;
  matchedCount: number;
  totalPairs: number;
  bestScore: GameScore | null;
  t: Translation;
}) {
  return (
    <div className="section stats-section">
      <h3>Statistics</h3>
      <div className="stat-list">
        <div className="stat-row">
          <span className="stat-icon">⏱️</span>
          <span className="stat-value">{formatTime(time)}</span>
          <span className="stat-label">{t.stats.time}</span>
        </div>
        <div className="stat-row">
          <span className="stat-icon">🎯</span>
          <span className="stat-value">{moves}</span>
          <span className="stat-label">{t.stats.moves}</span>
        </div>
        <div className="stat-row">
          <span className="stat-icon">✅</span>
          <span className="stat-value">{matchedCount / 2}/{totalPairs}</span>
          <span className="stat-label">{t.stats.pairs}</span>
        </div>
        {bestScore && (
          <div className="stat-row highlight">
            <span className="stat-icon">🏆</span>
            <span className="stat-value">{formatTime(bestScore.time)}</span>
            <span className="stat-label">{t.stats.record}</span>
          </div>
        )}
      </div>
    </div>
  )
}