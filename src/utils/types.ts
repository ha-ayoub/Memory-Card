export interface Card {
  id: string;
  img: string;
  matched: boolean;
}

export interface GameScore {
  time: number;
  moves: number;
  size: number;
  date: string;
}

export interface Theme {
  id: string;
  name: string;
  icon: string;
  images: string[];
}

export interface DifficultyLevel {
  size: number;
  label: string;
  grid: string;
  pairs: number;
}