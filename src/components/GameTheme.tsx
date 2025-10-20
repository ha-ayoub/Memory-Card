import type { Translation } from "../locales";
import { THEMES } from "../utils/constants";
import type { Theme } from "../utils/types";

export default function GameTheme( { themes, currentTheme,t ,onThemeChange}: { 
  themes: Theme[]; 
  currentTheme: Theme;
  t: Translation;
  onThemeChange: (theme: Theme) => void;
}) {
return (
    <div className="section">
      <h3>{t.theme}</h3>
      <div className="theme-grid">
        {themes.map(theme => (
          <button
            key={theme.id}
            onClick={() => onThemeChange(theme)}
            className={`theme-card ${currentTheme.id === theme.id ? 'active' : ''}`}
            title={t.themes[theme.id as keyof typeof t.themes]}
          >
            <span className="theme-icon">{theme.icon}</span>
            <span className="theme-name">
              {t.themes[theme.id as keyof typeof t.themes]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}