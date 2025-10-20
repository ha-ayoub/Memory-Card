import type { Card, Theme } from "./types";

export function shuffle<T>(array: T[]): T[] {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = a[i];
    a[i] = a[j]!;
    a[j] = temp!;
  }
  return a;
}

export function makeDeck(size: number, theme: Theme): Card[] {
  const pairsCount = (size * size) / 2;
  
  let selectedImages: string[] = [];
  if (theme.images.length >= pairsCount) {
    selectedImages = theme.images.slice(0, pairsCount);
  } else {
    while (selectedImages.length < pairsCount) {
      selectedImages = [...selectedImages, ...theme.images];
    }
    selectedImages = selectedImages.slice(0, pairsCount);
  }
  
  return shuffle([...selectedImages, ...selectedImages]).map((img, idx) => ({
    id: `${idx}-${img}`,
    img,
    matched: false
  }));
}

export function formatTime(sec: number): string {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}