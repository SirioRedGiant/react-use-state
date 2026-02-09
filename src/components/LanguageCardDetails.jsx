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
