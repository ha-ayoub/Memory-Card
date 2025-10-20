import type { Card } from "../utils/types";

export default function GameCard({ card, flipped, onClick }: { card: Card; flipped: boolean; onClick: () => void }) {

   return (
    <div className={`game-card ${flipped ? 'flipped' : ''} ${card.matched ? 'matched' : ''}`} onClick={onClick}>
      <div className="game-card-inner">
        <div className="game-card-front">
          <div className="card-logo">?</div>
          <div className="card-pattern"></div>
        </div>
        <div className="game-card-back">
          <img 
            src={card.img} alt="card" 
            onError={(e) => {
              console.error('Image failed to load:', card.img);
            }} 
          />
        </div>
      </div>
    </div>
  );
}