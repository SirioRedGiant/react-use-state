// LOGICA BOTTONI
//note    IL NIPOTE => È Figlio di LanguageButtonList e Nipote di App.
//note                Il suo ruolo => È il componente Atomico (il pezzo più piccolo).
//note                Cosa fa => Riceve dal padre (LanguageButtonList) solo quello che gli serve per sopravvivere: il titolo da mostrare, se deve essere colorato (isSelected) e cosa fare se cliccato.

export default function LanguageButton({
  selectedLanguage,
  isSelected,
  onClick,
}) {
  let classeBottoni = "btn";
  if (isSelected) {
    classeBottoni = "btn active";
  }
  return (
    <button className={classeBottoni} onClick={onClick}>
      {selectedLanguage.title}
    </button>
  );
}
