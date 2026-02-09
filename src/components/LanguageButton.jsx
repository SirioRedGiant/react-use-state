//note LOGICA BOTTONI
export default function LanguageButton({
  selectedLanguage,
  isActive,
  onClick,
}) {
  let classeBottoni = "btn";
  if (isActive) {
    classeBottoni = "btn active";
  }
  return (
    <button className={classeBottoni} onClick={onClick}>
      {selectedLanguage.title}
    </button>
  );
}
