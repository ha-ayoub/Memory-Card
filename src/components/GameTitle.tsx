import type { Language, Translation } from "../locales";
import LanguageSelector from "./LanguageSelector";

export default function GameTitle({ t, language, onLanguageChange  }: { 
    t: Translation;
    language: Language;
    onLanguageChange: (lang: Language) => void;
}) {
    return (
        <div className="logo-section">
            <LanguageSelector
                currentLanguage={language}
                onLanguageChange={onLanguageChange}
            />
            <div className="logo">?</div>
            <h1>{t.title}</h1>
        </div>
    )
}