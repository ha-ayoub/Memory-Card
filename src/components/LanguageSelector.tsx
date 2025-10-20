import type { Language } from '../locales';
import { languages } from '../locales';

export default function LanguageSelector({ 
  currentLanguage, 
  onLanguageChange
}: { 
  currentLanguage: Language; 
  onLanguageChange: (lang: Language) => void;
}) {

    const currentLang = languages.find(l => l.code === currentLanguage);

  return (
    <div className="language-selector-compact">
      <select 
        value={currentLanguage} 
        onChange={(e) => onLanguageChange(e.target.value as Language)}
        className="language-dropdown-compact"
        title={currentLang?.name}
      >
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.flag}
          </option>
        ))}
      </select>
    </div>
  );
}