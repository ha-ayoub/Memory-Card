import type { DifficultyLevel, Theme } from "./types";

export const THEMES: Theme[] = [
{
    id: 'avatars',
    name: 'Avatars',
    icon: '👤',
    images: Array.from({ length: 32 }, (_, i) => 
      `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&size=150`
    )
  },
  {
    id: 'robots',
    name: 'Robots',
    icon: '🤖',
    images: Array.from({ length: 32 }, (_, i) => 
      `https://api.dicebear.com/7.x/bottts/svg?seed=${i}&size=150`
    )
  },
  {
    id: 'monsters',
    name: 'Monstres',
    icon: '👾',
    images: Array.from({ length: 32 }, (_, i) => 
      `https://robohash.org/${i}?set=set2&size=150x150`
    )
  },
  {
    id: 'cats',
    name: 'Cats',
    icon: '😺',
    images: Array.from({ length: 32 }, (_, i) => 
      `https://robohash.org/cat${i}?set=set4&size=150x150`
    )
  },
  {
    id: 'identicons',
    name: 'Pixels',
    icon: '🎮',
    images: Array.from({ length: 32 }, (_, i) => 
      `https://api.dicebear.com/7.x/pixel-art/svg?seed=${i}&size=150`
    )
  }
];

export const DIFFICULTY_LEVELS: DifficultyLevel[] = [
  { size: 4, label: 'Easy', grid: '4x4', pairs: 8 },
  { size: 6, label: 'Medium', grid: '6x4', pairs: 18 },
  { size: 8, label: 'Difficult', grid: '8x8', pairs: 32 }
];