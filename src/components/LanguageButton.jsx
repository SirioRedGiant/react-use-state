//note LOGICA BOTTONI
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
