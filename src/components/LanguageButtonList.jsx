import LanguageButton from "./LanguageButton";

export default function LanguageButtonList({
  languages,
  currentLanguage,
  onClick,
}) {
  return (
    <div className="button-container">
      {languages.map((language) => (
        <LanguageButton
          key={language.id}
          selectedLanguage={language}
          currentLanguage={currentLanguage.id === language.id}
          onClick
        />
      ))}
    </div>
  );
}
