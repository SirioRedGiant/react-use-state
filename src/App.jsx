import { useState } from "react";

const languages = [
  {
    id: 1,
    title: "HTML",
    description:
      "HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini.",
  },
  {
    id: 2,
    title: "CSS",
    description:
      "CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per descrivere la presentazione di un documento scritto in HTML o XML. Controlla il layout, i colori, i caratteri e l'aspetto complessivo di una pagina web.",
  },
  {
    id: 3,
    title: "JavaScript",
    description:
      "JavaScript è un linguaggio di programmazione dinamico utilizzato per lo sviluppo web, che consente contenuti interattivi come grafici animati, pulsanti cliccabili e altre funzionalità dinamiche sui siti web.",
  },
  {
    id: 4,
    title: "Node.js",
    description:
      "Node.js è un ambiente di runtime JavaScript lato server che permette di utilizzare JavaScript anche sul backend, consentendo agli sviluppatori di usare lo stesso linguaggio sia sul client che sul server.",
  },
  {
    id: 5,
    title: "Express",
    description:
      "Express è un framework per applicazioni web minimalista e veloce per Node.js. Fornisce strumenti robusti per creare applicazioni web e API e semplifica la gestione delle rotte e delle richieste.",
  },
  {
    id: 6,
    title: "ReactJS",
    description:
      "ReactJS è una libreria JavaScript per costruire interfacce utente, in particolare applicazioni a pagina singola. Consente agli sviluppatori di creare componenti UI riutilizzabili e di gestire efficacemente lo stato dell'applicazione.",
  },
];

//note LOGICA BOTTONI
function LanguageButton({ language, isActive, onClick }) {
  let classeBottoni = "btn";
  if (isActive) {
    classeBottoni = "btn active";
  }
  return (
    <button className={classeBottoni} onClick={onClick}>
      {language.title}
    </button>
  );
}

export default function App() {
  //note stato --> primo oggetto dell'array
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  console.log("il linguaggio selezionato è:", currentLanguage.title);

  return (
    <div className="container">
      <h1>Learn Web Development</h1>

      {/* bottoni */}
      <div className="button-container">
        {languages.map((language) => (
          <LanguageButton
            key={language.id}
            language={language}
            isActive={currentLanguage.id === language.id}
            onSelect={() => setCurrentLanguage(language)}
          />
        ))}
      </div>
      {/* card */}
      <div className="card">
        <h2>{currentLanguage.title}</h2>
        <p>{currentLanguage.description} </p>
      </div>
    </div>
  );
}
