import LanguageButton from "./LanguageButton";

export default function LanguageButtonList({
  languages,
  currentLanguage,
  onSelect,
}) {
  return (
    <div className="button-container">
      {languages.map((language) => (
        <LanguageButton
          key={language.id}
          selectedLanguage={language}
          isSelected={currentLanguage?.id === language.id}
          onClick={() => onselect(language)}
        />
      ))}
    </div>
  );
}
