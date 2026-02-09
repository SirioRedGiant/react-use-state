//note  IL FIGLIO MAGGIORE : È un componente Figlio di App. È un organizzatore. Riceve dal padre(Nonno) l'intera lista dei linguaggi e l'ordine di creare dei bottoni.
//note  Cosa fa: Non disegna direttamente i bottoni, ma fa da "ponte". Prende il telecomando che gli ha dato il padre (onSelect) e lo prepara per i suoi figli (i bottoni).

import LanguageButton from "./LanguageButton";

export default function LanguageButtonList({
  languages,
  currentLanguage,
  onSelect,
}) {
  return (
    <div className="button-container">
      {languages.map((language) => {
        //controllo
        console.log(
          "Confronto per",
          language.title,
          currentLanguage?.id === language.id,
        );

        return (
          <LanguageButton
            key={language.id}
            selectedLanguage={language}
            isSelected={currentLanguage?.id === language.id}
            onClick={() => onSelect(language)}
          />
        );
      })}
    </div>
  );
}
