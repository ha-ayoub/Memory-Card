import { fr } from './fr';
import { en } from './en';
import { ar } from './ar';
import { es } from './es';
import { pt } from './pt';
import { nl } from './nl';
import { de } from './de';

export const translations = {fr,en,ar,es,pt,nl,de};

export type Language = keyof typeof translations;
export type Translation = typeof fr;

export const languages = [
  { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
  { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
  { code: 'ar' as Language, name: 'العربية', flag: '🇸🇦' },
  { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
  { code: 'pt' as Language, name: 'Português', flag: '🇵🇹' },
  { code: 'nl' as Language, name: 'Nederlands', flag: '🇳🇱' },
  { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' }
];