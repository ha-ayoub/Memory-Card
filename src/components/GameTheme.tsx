import { THEMES } from "../utils/constants";
import type { Theme } from "../utils/types";

export default function GameTheme( { themes, currentTheme, onThemeChange}: { 
  themes: Theme[]; 
  currentTheme: Theme; 
  onThemeChange: (theme: Theme) => void;
}) {
return (
    <div className="section">
      <h3>Theme</h3>
      <div className="theme-grid">
        {themes.map(theme => (
          <button
            key={theme.id}
            onClick={() => onThemeChange(theme)}
            className={`theme-card ${currentTheme.id === theme.id ? 'active' : ''}`}
            title={theme.name}
          >
            <span className="theme-icon">{theme.icon}</span>
            <span className="theme-name">{theme.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}