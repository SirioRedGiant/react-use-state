//note   IL FIGLIO MINORE => È un esecutore.
//note   Cosa fa: aspetta che il padre gli passi un linguaggio. Se il padre gli passa null, lui dice "Nessun linguaggio". Se il padre gli passa un oggetto, lui lo stampa a schermo.

export default function LanguageCardDetails({ language }) {
  return (
    <div className="card">
      {/* se non c'è il linguaggio */}
      {!language && <p>nessun linguaggio selezionato</p>}
      {/* se c'è */}
      {language && (
        <>
          <h2>{language.title}</h2>
          <p>{language.description} </p>
        </>
      )}
    </div>
  );
}
