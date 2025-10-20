import { useEffect, useMemo, useState } from "react";
import type { Card, GameScore, Theme } from "./utils/types";
import { DIFFICULTY_LEVELS, THEMES } from "./utils/constants";
import { makeDeck } from "./utils/helpers";
import GameInfo from "./components/GameInfo";
import VictoryModal from "./components/VictoryModal";
import GameBoard from "./components/GameBoard";
import Signature from "./components/Signature";


export default function App() {
  const defaultTheme = THEMES[0]!;
  const [currentTheme, setCurrentTheme] = useState<Theme>(defaultTheme);
  const [size, setSize] = useState(4);
  const [deck, setDeck] = useState<Card[]>(() => makeDeck(4, defaultTheme));
  const [flipped, setFlipped] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [bestScore, setBestScore] = useState<GameScore | null>(null);

  const matchedCount = useMemo(() => deck.filter(c => c.matched).length, [deck]);
  const totalPairs = (size * size) / 2;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (running) {
      timer = setInterval(() => setTime(t => t + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  useEffect(() => {
    if (matchedCount === deck.length && deck.length > 0) {
      setRunning(false);
      setTimeout(() => setShowModal(true), 500);
      const result: GameScore = { time, moves, size, date: new Date().toISOString() };
      const isBetter = !bestScore || result.time < bestScore.time || 
                      (result.time === bestScore.time && result.moves < bestScore.moves);
      if (isBetter) {
        setBestScore(result);
      }
    }
  }, [matchedCount, deck.length, time, moves, size, bestScore]);

  function startNewGame(newSize: number = size) {
    setSize(newSize);
    setDeck(makeDeck(newSize, currentTheme));
    setFlipped([]);
    setMoves(0);
    setTime(0);
    setRunning(false);
    setDisabled(false);
    setShowModal(false);
  }

  function handleThemeChange(theme: Theme) {
    setCurrentTheme(theme);
    startNewGame(size);
  }

  function handleCardClick(card: Card) {
    if (!running) setRunning(true);
    if (disabled || flipped.includes(card.id) || card.matched) return;

    const newFlipped = [...flipped, card.id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setDisabled(true);
      setMoves(m => m + 1);
      const [firstId, secondId] = newFlipped;
      const first = deck.find(c => c.id === firstId)!;
      const second = deck.find(c => c.id === secondId)!;

      if (first.img === second.img) {
        setDeck(d => d.map(c => c.img === first.img ? { ...c, matched: true } : c));
        setFlipped([]);
        setDisabled(false);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 700);
      }
    }
  }

  return (
    <div className="app">
      <div className="game-container">
        <GameInfo 
          currentTheme={currentTheme}
          currentSize={size}
          time={time}
          moves={moves}
          matchedCount={matchedCount}
          totalPairs={totalPairs}
          bestScore={bestScore}
          onThemeChange={handleThemeChange}
          onDifficultyChange={startNewGame}
        />

        <GameBoard 
          currentTheme={currentTheme} 
          deck={deck} size={size} 
          flipped={flipped} 
          onCardClick={handleCardClick} 
          />
      </div>
      
      <VictoryModal 
        isOpen={showModal} 
        time={time} 
        moves={moves} 
        onClose={() => setShowModal(false)} 
        onReplay={() => startNewGame(size)}/>

        <Signature/>
    </div>
  );
}